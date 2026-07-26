/**
 * Storage and identification for post images.
 *
 * Images uploaded from the admin editor go into a Netlify Blobs store and are
 * served back from /media/<key>. Two rules shape everything here:
 *
 *  1. The file type is decided by the bytes, never by the browser. A
 *     Content-Type header and a filename extension are both attacker-supplied,
 *     so an "image/png" claim on an HTML file would otherwise be enough to get
 *     stored content served from our own origin.
 *  2. The key is a content hash plus a slugified name. Re-uploading the same
 *     file lands on the same key (idempotent, no duplicates), two different
 *     files can never collide, and nothing about the key can be guessed from
 *     the filename alone.
 */

import { slugify } from './posts';

export const MEDIA_PATH = '/media/';
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB
const STORE_NAME = 'post-media';

/** The only types we accept. No SVG: it is a script container, not a picture. */
export const MIME_BY_EXT: Record<string, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  avif: 'image/avif',
};

export const ACCEPT_ATTRIBUTE = 'image/jpeg,image/png,image/webp,image/gif,image/avif';

export interface ImageType {
  mime: string;
  ext: string;
}

/* --------------------------------------------------------------- sniffing */

const ascii = (b: Uint8Array, at: number, len: number): string =>
  String.fromCharCode(...b.subarray(at, at + len));

/**
 * Identify an image from its magic bytes, or return null.
 *
 * Anything not recognised here is rejected — an allow-list of five container
 * formats, not a deny-list of known-bad ones.
 */
export function sniffImage(bytes: Uint8Array): ImageType | null {
  if (bytes.length < 16) return null;

  // PNG — the full 8-byte signature.
  if (
    bytes[0] === 0x89 &&
    ascii(bytes, 1, 3) === 'PNG' &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return { mime: 'image/png', ext: 'png' };
  }

  // JPEG — SOI followed by any marker.
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { mime: 'image/jpeg', ext: 'jpg' };
  }

  // GIF87a / GIF89a.
  const gif = ascii(bytes, 0, 6);
  if (gif === 'GIF87a' || gif === 'GIF89a') {
    return { mime: 'image/gif', ext: 'gif' };
  }

  // WebP — a RIFF container whose form type is WEBP.
  if (ascii(bytes, 0, 4) === 'RIFF' && ascii(bytes, 8, 4) === 'WEBP') {
    return { mime: 'image/webp', ext: 'webp' };
  }

  // AVIF — an ISO-BMFF `ftyp` box declaring an AVIF brand, either as the major
  // brand or among the compatible brands that follow it.
  if (ascii(bytes, 4, 4) === 'ftyp') {
    const boxSize = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint32(0);
    const end = Math.min(boxSize > 0 ? boxSize : 0, bytes.length);
    for (let at = 8; at + 4 <= end; at += 4) {
      const brand = ascii(bytes, at, 4);
      if (brand === 'avif' || brand === 'avis') return { mime: 'image/avif', ext: 'avif' };
    }
  }

  return null;
}

/* ------------------------------------------------------------- dimensions */

/**
 * Intrinsic pixel size, best effort.
 *
 * Used only to tell the author what they just uploaded, so an unparsed file
 * (notably AVIF, whose size lives in a nested `ispe` box) simply returns null
 * rather than costing us a decoder dependency.
 */
export function imageSize(bytes: Uint8Array, ext: string): { width: number; height: number } | null {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  try {
    if (ext === 'png' && ascii(bytes, 12, 4) === 'IHDR') {
      return { width: view.getUint32(16), height: view.getUint32(20) };
    }

    if (ext === 'gif') {
      return { width: view.getUint16(6, true), height: view.getUint16(8, true) };
    }

    if (ext === 'webp') {
      const chunk = ascii(bytes, 12, 4);
      if (chunk === 'VP8 ') {
        return { width: view.getUint16(26, true) & 0x3fff, height: view.getUint16(28, true) & 0x3fff };
      }
      if (chunk === 'VP8L') {
        const bits = view.getUint32(21, true);
        return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
      }
      if (chunk === 'VP8X') {
        const read24 = (at: number) => bytes[at] | (bytes[at + 1] << 8) | (bytes[at + 2] << 16);
        return { width: read24(24) + 1, height: read24(27) + 1 };
      }
      return null;
    }

    if (ext === 'jpg') {
      // Walk the marker chain to the first start-of-frame, which carries the size.
      let at = 2;
      while (at + 9 < bytes.length) {
        if (bytes[at] !== 0xff) {
          at += 1;
          continue;
        }
        const marker = bytes[at + 1];
        if (marker === 0xff || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
          at += 2;
          continue;
        }
        const length = view.getUint16(at + 2);
        const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
        if (isFrame) return { height: view.getUint16(at + 5), width: view.getUint16(at + 7) };
        if (length < 2) return null;
        at += 2 + length;
      }
    }
  } catch {
    return null;
  }

  return null;
}

/* -------------------------------------------------------------------- keys */

const KEY_PATTERN = /^[0-9a-f]{24}-[a-z0-9-]{1,48}\.(jpg|png|webp|gif|avif)$/;

export const isMediaKey = (key: string): boolean => KEY_PATTERN.test(key);

export const extensionOf = (key: string): string => key.slice(key.lastIndexOf('.') + 1);

/** `<24 hex of sha-256>-<slugified original name>.<sniffed extension>` */
export async function mediaKey(bytes: Uint8Array, filename: string, ext: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', bytes as unknown as ArrayBuffer);
  const hash = [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 24);

  const base = filename.replace(/\.[^.]*$/, '');
  const name = slugify(base).slice(0, 48) || 'image';

  return `${hash}-${name}.${ext}`;
}

/* ------------------------------------------------------------------ store */

export interface StoredMedia {
  bytes: Uint8Array;
  mime: string;
}

export interface MediaStore {
  put(key: string, bytes: Uint8Array, mime: string): Promise<void>;
  get(key: string): Promise<StoredMedia | null>;
}

const netlifyStore = async (): Promise<MediaStore> => {
  const { getStore } = await import('@netlify/blobs');
  // Strong consistency: the editor asks for the image it just uploaded almost
  // immediately, so eventual consistency would show a broken thumbnail.
  const store = getStore({ name: STORE_NAME, consistency: 'strong' });

  return {
    async put(key, bytes, mime) {
      await store.set(key, bytes as unknown as ArrayBuffer, { metadata: { mime } });
    },
    async get(key) {
      const result = await store.getWithMetadata(key, { type: 'arrayBuffer' });
      if (!result) return null;
      const mime = typeof result.metadata?.mime === 'string' ? result.metadata.mime : '';
      return { bytes: new Uint8Array(result.data), mime };
    },
  };
};

/**
 * Local-development fallback.
 *
 * `astro dev` runs outside the Netlify runtime, so there is no Blobs context to
 * connect to. Rather than make image upload untestable locally, dev writes into
 * .netlify/media-dev/ instead. This is reached only when Blobs is genuinely
 * unavailable *and* we are in dev — in production a Blobs failure must surface
 * as an error, never silently write to a function's ephemeral disk.
 */
const devFileStore = async (): Promise<MediaStore> => {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const dir = path.join(process.cwd(), '.netlify', 'media-dev');

  return {
    async put(key, bytes, mime) {
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, key), bytes);
      await fs.writeFile(path.join(dir, `${key}.type`), mime, 'utf8');
    },
    async get(key) {
      try {
        const bytes = await fs.readFile(path.join(dir, key));
        const mime = await fs.readFile(path.join(dir, `${key}.type`), 'utf8').catch(() => '');
        return { bytes: new Uint8Array(bytes), mime };
      } catch {
        return null;
      }
    },
  };
};

export async function mediaStore(): Promise<MediaStore> {
  try {
    return await netlifyStore();
  } catch (error) {
    if (import.meta.env.DEV) return devFileStore();
    throw error;
  }
}
