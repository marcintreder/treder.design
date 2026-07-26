import { neon, type NeonQueryFunction } from '@neondatabase/serverless';
import { getSecret } from 'astro:env/server';

/**
 * Neon's HTTP driver — one round trip per query, no pooling to manage, which
 * is what we want from short-lived serverless invocations.
 *
 * Resolved lazily so that a missing DATABASE_URL fails at request time with a
 * clear message rather than breaking the whole build.
 */
// Typed as <false, false> — no full result metadata, no array mode — so queries
// resolve to plain row objects rather than the driver's wider union type.
let client: NeonQueryFunction<false, false> | null = null;

export function sql(): NeonQueryFunction<false, false> {
  if (!client) {
    const url = getSecret('DATABASE_URL');
    if (!url) {
      throw new Error('DATABASE_URL is not set — the blog cannot reach Postgres.');
    }
    client = neon(url);
  }
  return client;
}

export const hasDatabase = (): boolean => Boolean(getSecret('DATABASE_URL'));
