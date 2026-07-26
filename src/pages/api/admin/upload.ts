import type { APIRoute } from 'astro';
import { isAdmin, ADMIN_COOKIE } from '../../../lib/admin';
import {
  MAX_UPLOAD_BYTES,
  MEDIA_PATH,
  imageSize,
  mediaKey,
  mediaStore,
  sniffImage,
} from '../../../lib/media';

export const prerender = false;

const json = (body: unknown, status: number): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
  });

/**
 * Accept an image from the admin editor and store it in Netlify Blobs.
 *
 * Same posture as every other admin mutation: the session is re-checked here
 * rather than trusted from the page that drew the control, and a caller without
 * one gets 403. An open upload endpoint would be an open file host.
 *
 * The declared Content-Type and the filename extension are used for nothing.
 * The stored type comes from sniffing the actual bytes, which is also what the
 * key's extension and the served Content-Type are derived from — so there is no
 * path by which a caller's claim about a file becomes a claim we repeat.
 */
export const POST: APIRoute = async ({ request, cookies }) => {
  let allowed = false;
  try {
    allowed = await isAdmin(cookies.get(ADMIN_COOKIE)?.value);
  } catch {
    allowed = false;
  }
  if (!allowed) return json({ error: 'Forbidden' }, 403);

  // Cheap early rejection so an oversized body is not buffered at all.
  const declared = Number(request.headers.get('content-length') ?? 0);
  if (declared > MAX_UPLOAD_BYTES * 1.05) {
    return json({ error: 'That image is over the 10 MB limit.' }, 413);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'Could not read the upload.' }, 400);
  }

  const file = form.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return json({ error: 'No file was attached.' }, 400);
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    const mb = (file.size / (1024 * 1024)).toFixed(1);
    return json({ error: `That image is ${mb} MB — the limit is 10 MB.` }, 413);
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  if (bytes.byteLength > MAX_UPLOAD_BYTES) {
    return json({ error: 'That image is over the 10 MB limit.' }, 413);
  }

  const type = sniffImage(bytes);
  if (!type) {
    return json(
      { error: 'That file is not a JPEG, PNG, WebP, GIF or AVIF image.' },
      415
    );
  }

  const key = await mediaKey(bytes, file.name || 'image', type.ext);

  try {
    // Idempotent by construction: the same bytes produce the same key, so a
    // re-upload overwrites itself with identical content.
    const store = await mediaStore();
    await store.put(key, bytes, type.mime);
  } catch {
    return json({ error: 'The image store is not available. Nothing was saved.' }, 503);
  }

  const size = imageSize(bytes, type.ext);

  return json(
    {
      url: `${MEDIA_PATH}${key}`,
      name: file.name || key,
      ...(size ?? {}),
    },
    201
  );
};
