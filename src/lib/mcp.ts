/**
 * A minimal, stateless MCP (Model Context Protocol) server over HTTP.
 *
 * Implemented directly against the JSON-RPC wire format rather than through the
 * official SDK: the SDK's HTTP transport expects Node's req/res objects, while
 * a serverless route gets a Fetch `Request`. The protocol surface we need —
 * initialize, tools/list, tools/call — is small enough that speaking it
 * directly is simpler and has no runtime dependency.
 */

export const PROTOCOL_VERSION = '2025-06-18';

export interface JsonRpcRequest {
  jsonrpc: '2.0';
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown>;
}

export interface ToolDefinition {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  handler: (args: Record<string, any>) => Promise<string>;
}

const result = (id: JsonRpcRequest['id'], value: unknown) => ({ jsonrpc: '2.0' as const, id, result: value });

const error = (id: JsonRpcRequest['id'], code: number, message: string) => ({
  jsonrpc: '2.0' as const,
  id,
  error: { code, message },
});

/** JSON-RPC error codes used here (from the spec). */
const METHOD_NOT_FOUND = -32601;
const INVALID_PARAMS = -32602;
const INTERNAL_ERROR = -32603;

export async function handleRpc(
  body: JsonRpcRequest,
  tools: ToolDefinition[],
  serverInfo: { name: string; version: string }
): Promise<object | null> {
  const { method, id } = body;

  switch (method) {
    case 'initialize':
      return result(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo,
      });

    // Notifications carry no id and expect no response body.
    case 'notifications/initialized':
    case 'notifications/cancelled':
      return null;

    case 'ping':
      return result(id, {});

    case 'tools/list':
      return result(id, {
        tools: tools.map(({ name, title, description, inputSchema }) => ({
          name,
          title,
          description,
          inputSchema,
        })),
      });

    case 'tools/call': {
      const name = body.params?.name as string | undefined;
      const args = (body.params?.arguments ?? {}) as Record<string, any>;
      const tool = tools.find((t) => t.name === name);

      if (!tool) return error(id, INVALID_PARAMS, `Unknown tool: ${name}`);

      try {
        const text = await tool.handler(args);
        return result(id, { content: [{ type: 'text', text }] });
      } catch (e) {
        // Tool failures are reported in-band so the model can read and react to
        // them, rather than as transport errors that abort the conversation.
        const message = e instanceof Error ? e.message : String(e);
        return result(id, { content: [{ type: 'text', text: `Error: ${message}` }], isError: true });
      }
    }

    default:
      return error(id, METHOD_NOT_FOUND, `Method not found: ${method}`);
  }
}

export { error as rpcError, INTERNAL_ERROR, INVALID_PARAMS };
