import type { APIRoute } from 'astro';
import { sql, hasDatabase } from '../../lib/db';
import { handleRpc, type JsonRpcRequest, type ToolDefinition, PROTOCOL_VERSION } from '../../lib/mcp';
// Shared with the browser admin so a post written in either place gets the same
// slug and the same read_minutes estimate.
import { slugify, estimateMinutes } from '../../lib/posts';
import { getSecret } from 'astro:env/server';

export const prerender = false;

/* ------------------------------------------------------------------ helpers */

const token = (): string | null => getSecret('BLOG_API_TOKEN') ?? null;

/**
 * The request is authorised if it presents the shared secret either as a bearer
 * token or as a `?k=` query parameter. The query form exists because some MCP
 * clients cannot attach custom headers — in that case the URL itself is the
 * credential, so it must be treated as a password and never shared.
 */
function authorised(request: Request, url: URL): boolean {
  const expected = token();
  if (!expected) return false;

  const header = request.headers.get('authorization') ?? '';
  const bearer = header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : null;
  const supplied = bearer ?? url.searchParams.get('k');
  if (!supplied || supplied.length !== expected.length) return false;

  let diff = 0;
  for (let i = 0; i < supplied.length; i++) diff |= supplied.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

const summarise = (row: any): string =>
  [
    `• ${row.title}`,
    `  slug: ${row.slug}`,
    `  status: ${row.status}${row.featured ? ' · featured' : ''} · kind: ${row.kind}`,
    row.published_at ? `  published: ${new Date(row.published_at).toISOString().slice(0, 10)}` : null,
    `  url: https://treder.design/blog/${row.slug}`,
  ]
    .filter(Boolean)
    .join('\n');

/* -------------------------------------------------------------------- tools */

const tools: ToolDefinition[] = [
  {
    name: 'list_posts',
    title: 'List blog posts',
    description:
      'List posts on treder.design with their slug, status and kind. Use this to find a post before updating it, or to check what is already published.',
    inputSchema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['draft', 'published', 'all'],
          description: 'Filter by status. Defaults to all.',
        },
        limit: { type: 'number', description: 'Maximum posts to return (default 25).' },
      },
    },
    handler: async ({ status = 'all', limit = 25 }) => {
      const db = sql();
      const rows =
        status === 'all'
          ? await db`SELECT * FROM posts ORDER BY COALESCE(published_at, created_at) DESC LIMIT ${limit}`
          : await db`SELECT * FROM posts WHERE status = ${status} ORDER BY COALESCE(published_at, created_at) DESC LIMIT ${limit}`;

      if (!rows.length) return 'No posts found.';
      return `${rows.length} post(s):\n\n${rows.map(summarise).join('\n\n')}`;
    },
  },

  {
    name: 'get_post',
    title: 'Read a blog post',
    description: 'Fetch one post by slug, including its full Markdown body. Use before updating so you can revise the existing text.',
    inputSchema: {
      type: 'object',
      properties: { slug: { type: 'string', description: 'The post slug.' } },
      required: ['slug'],
    },
    handler: async ({ slug }) => {
      const rows = await sql()`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`;
      if (!rows.length) return `No post with slug "${slug}".`;
      const p = rows[0] as any;
      return [
        `title: ${p.title}`,
        `slug: ${p.slug}`,
        `kind: ${p.kind}`,
        `status: ${p.status}`,
        `featured: ${p.featured}`,
        `tags: ${(p.tags ?? []).join(', ') || '—'}`,
        `excerpt: ${p.excerpt ?? '—'}`,
        '',
        '--- body (Markdown) ---',
        p.body_md ?? '',
      ].join('\n');
    },
  },

  {
    name: 'publish_post',
    title: 'Publish a blog post',
    description:
      'Create a new post on treder.design. Set status to "draft" to stage it without making it public. Published posts appear on the site immediately — no rebuild is required. The body is Markdown.',
    inputSchema: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'Post title.' },
        body_md: { type: 'string', description: 'Post body in Markdown.' },
        excerpt: {
          type: 'string',
          description: 'Short standfirst shown in listings. Derived from the body when omitted.',
        },
        kind: {
          type: 'string',
          enum: ['essay', 'book-note'],
          description: 'Editorial stream. "book-note" for notes from the book, "essay" otherwise. Defaults to essay.',
        },
        status: {
          type: 'string',
          enum: ['draft', 'published'],
          description: 'Defaults to published.',
        },
        slug: { type: 'string', description: 'URL slug. Derived from the title when omitted.' },
        tags: { type: 'array', items: { type: 'string' }, description: 'Optional topic tags.' },
        cover_image: { type: 'string', description: 'Optional image path, e.g. /img/foo.png' },
        featured: { type: 'boolean', description: 'Feature this post at the top of the blog.' },
      },
      required: ['title', 'body_md'],
    },
    handler: async ({
      title,
      body_md,
      excerpt,
      kind = 'essay',
      status = 'published',
      slug,
      tags = [],
      cover_image = null,
      featured = false,
    }) => {
      const finalSlug = slug ? slugify(slug) : slugify(title);
      if (!finalSlug) throw new Error('Could not derive a slug — pass one explicitly.');

      const clash = await sql()`SELECT slug FROM posts WHERE slug = ${finalSlug} LIMIT 1`;
      if (clash.length) {
        throw new Error(`A post with slug "${finalSlug}" already exists. Use update_post, or choose a different slug.`);
      }

      const rows = await sql()`
        INSERT INTO posts (slug, title, excerpt, body_md, kind, status, featured, tags, cover_image, read_minutes, published_at)
        VALUES (
          ${finalSlug}, ${title}, ${excerpt ?? null}, ${body_md}, ${kind}, ${status},
          ${featured}, ${tags}, ${cover_image}, ${estimateMinutes(body_md)},
          ${status === 'published' ? new Date().toISOString() : null}
        )
        RETURNING *`;

      const p = rows[0] as any;
      return status === 'published'
        ? `Published "${p.title}" — live now at https://treder.design/blog/${p.slug}`
        : `Saved "${p.title}" as a draft (slug: ${p.slug}). It is not publicly visible yet.`;
    },
  },

  {
    name: 'update_post',
    title: 'Update a blog post',
    description:
      'Change an existing post, identified by slug. Only the fields you pass are modified. Set status to "published" to publish a draft.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'Slug of the post to update.' },
        title: { type: 'string' },
        body_md: { type: 'string', description: 'Replacement Markdown body.' },
        excerpt: { type: 'string' },
        kind: { type: 'string', enum: ['essay', 'book-note'] },
        status: { type: 'string', enum: ['draft', 'published'] },
        tags: { type: 'array', items: { type: 'string' } },
        cover_image: { type: 'string' },
        featured: { type: 'boolean' },
        new_slug: { type: 'string', description: 'Rename the post URL. The old URL will stop working.' },
      },
      required: ['slug'],
    },
    handler: async (args) => {
      const { slug } = args;
      const existing = await sql()`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`;
      if (!existing.length) return `No post with slug "${slug}".`;
      const current = existing[0] as any;

      // COALESCE lets one statement handle any subset of fields: a null argument
      // leaves the stored value untouched.
      const next = {
        slug: args.new_slug ? slugify(args.new_slug) : current.slug,
        title: args.title ?? null,
        excerpt: args.excerpt ?? null,
        body_md: args.body_md ?? null,
        kind: args.kind ?? null,
        status: args.status ?? null,
        featured: typeof args.featured === 'boolean' ? args.featured : null,
        tags: args.tags ?? null,
        cover_image: args.cover_image ?? null,
        read_minutes: args.body_md ? estimateMinutes(args.body_md) : null,
      };

      // Stamp published_at the first time a post actually goes public, and
      // leave it alone on every later edit so the original date is preserved.
      const publishedAt =
        next.status === 'published' && current.status !== 'published' ? new Date().toISOString() : null;

      const rows = await sql()`
        UPDATE posts SET
          slug         = ${next.slug},
          title        = COALESCE(${next.title}, title),
          excerpt      = COALESCE(${next.excerpt}, excerpt),
          body_md      = COALESCE(${next.body_md}, body_md),
          kind         = COALESCE(${next.kind}, kind),
          status       = COALESCE(${next.status}, status),
          featured     = COALESCE(${next.featured}, featured),
          tags         = COALESCE(${next.tags}, tags),
          cover_image  = COALESCE(${next.cover_image}, cover_image),
          read_minutes = COALESCE(${next.read_minutes}, read_minutes),
          published_at = COALESCE(${publishedAt}, published_at)
        WHERE slug = ${slug}
        RETURNING *`;

      const p = rows[0] as any;
      return `Updated "${p.title}" (${p.status}) — https://treder.design/blog/${p.slug}`;
    },
  },

  {
    name: 'delete_post',
    title: 'Delete a blog post',
    description:
      'Permanently delete a post. This cannot be undone and the content is not recoverable — prefer unpublish_post unless the post is genuinely unwanted. Requires confirm_slug to match slug exactly, so a post is never deleted by accident.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'Slug of the post to delete.' },
        confirm_slug: {
          type: 'string',
          description: 'Repeat the slug to confirm the deletion is intentional.',
        },
      },
      required: ['slug', 'confirm_slug'],
    },
    handler: async ({ slug, confirm_slug }) => {
      if (slug !== confirm_slug) {
        throw new Error('confirm_slug does not match slug — nothing was deleted.');
      }
      const rows = await sql()`DELETE FROM posts WHERE slug = ${slug} RETURNING title`;
      if (!rows.length) return `No post with slug "${slug}" — nothing to delete.`;
      return `Permanently deleted "${(rows[0] as any).title}" (${slug}).`;
    },
  },

  {
    name: 'unpublish_post',
    title: 'Unpublish a blog post',
    description:
      'Take a post off the public site by returning it to draft. The content is kept, so it can be published again later.',
    inputSchema: {
      type: 'object',
      properties: { slug: { type: 'string' } },
      required: ['slug'],
    },
    handler: async ({ slug }) => {
      const rows = await sql()`UPDATE posts SET status = 'draft' WHERE slug = ${slug} RETURNING title`;
      if (!rows.length) return `No post with slug "${slug}".`;
      return `"${(rows[0] as any).title}" is now a draft and no longer public.`;
    },
  },
];

const serverInfo = { name: 'treder-design-blog', version: '1.0.0' };

/* ------------------------------------------------------------------- route */

export const POST: APIRoute = async ({ request, url }) => {
  if (!authorised(request, url)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json', 'www-authenticate': 'Bearer' },
    });
  }

  if (!hasDatabase()) {
    return new Response(JSON.stringify({ error: 'DATABASE_URL is not configured' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    });
  }

  let body: JsonRpcRequest;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const response = await handleRpc(body, tools, serverInfo);

  // Notifications get 202 with no body, per the MCP HTTP transport.
  if (response === null) return new Response(null, { status: 202 });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

/** A GET is useful for a quick "is it alive and is my token right?" check. */
export const GET: APIRoute = async ({ request, url }) => {
  const ok = authorised(request, url);
  return new Response(
    JSON.stringify({
      server: serverInfo,
      protocolVersion: PROTOCOL_VERSION,
      transport: 'http',
      authenticated: ok,
      tools: ok ? tools.map((t) => t.name) : undefined,
    }),
    { status: ok ? 200 : 401, headers: { 'content-type': 'application/json' } }
  );
};
