import type { APIRoute } from 'astro';
import { MIME_BY_EXT, extensionOf, isMediaKey, mediaStore } from '../../lib/media';

export const prerender = false;

/**
 * Serve an uploaded post image.
 *
 * Public on purpose — these are illustrations inside published posts, and a
 * gated image would simply break every reader's page. The key is a content
 * hash, so it is unguessable and immutable: the same URL always returns the
 * same bytes, which is what earns the year-long immutable cache.
 *
 * The Content-Type comes from the extension baked into the key at upload time,
 * which was itself derived from sniffed magic bytes — never from anything a
 * requester or an uploader asserted. `nosniff` stops a browser from second-
 * guessing it.
 */
export const GET: APIRoute = async ({ params }) => {
  const key = params.key ?? '';

  // Reject anything that is not shaped like a key we minted, before touching
  // the store — that also rules out path traversal in the dev file fallback.
  if (!isMediaKey(key)) return new Response('Not found', { status: 404 });

  let stored: Awaited<ReturnType<Awaited<ReturnType<typeof mediaStore>>['get']>> = null;
  try {
    const store = await mediaStore();
    stored = await store.get(key);
  } catch {
    return new Response('Image storage unavailable', { status: 503 });
  }

  if (!stored) return new Response('Not found', { status: 404 });

  const mime = MIME_BY_EXT[extensionOf(key)] ?? stored.mime ?? 'application/octet-stream';

  return new Response(stored.bytes as unknown as ArrayBuffer, {
    status: 200,
    headers: {
      'content-type': mime,
      'content-length': String(stored.bytes.byteLength),
      'cache-control': 'public, max-age=31536000, immutable',
      'x-content-type-options': 'nosniff',
    },
  });
};
