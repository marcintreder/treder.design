import { sql, hasDatabase } from './db';

export type PostKind = 'essay' | 'book-note';
export type PostStatus = 'draft' | 'published';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  bodyMd: string;
  kind: PostKind;
  status: PostStatus;
  featured: boolean;
  tags: string[];
  coverImage: string | null;
  readMinutes: number | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const toPost = (r: any): Post => ({
  id: r.id,
  slug: r.slug,
  title: r.title,
  excerpt: r.excerpt,
  bodyMd: r.body_md ?? '',
  kind: r.kind,
  status: r.status,
  featured: r.featured,
  tags: r.tags ?? [],
  coverImage: r.cover_image,
  readMinutes: r.read_minutes,
  publishedAt: r.published_at ? new Date(r.published_at).toISOString() : null,
  createdAt: new Date(r.created_at).toISOString(),
  updatedAt: new Date(r.updated_at).toISOString(),
});

/**
 * Published posts, newest first.
 *
 * Returns an empty list when no database is configured so that a local
 * checkout without a .env still builds and renders the rest of the site.
 */
export async function listPosts(options: { kind?: PostKind; limit?: number } = {}): Promise<Post[]> {
  if (!hasDatabase()) return [];
  const { kind, limit = 100 } = options;
  const db = sql();

  const rows = kind
    ? await db`SELECT * FROM posts
               WHERE status = 'published' AND kind = ${kind}
               ORDER BY published_at DESC NULLS LAST, created_at DESC
               LIMIT ${limit}`
    : await db`SELECT * FROM posts
               WHERE status = 'published'
               ORDER BY published_at DESC NULLS LAST, created_at DESC
               LIMIT ${limit}`;

  return rows.map(toPost);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!hasDatabase()) return null;
  const rows = await sql()`SELECT * FROM posts WHERE slug = ${slug} AND status = 'published' LIMIT 1`;
  return rows.length ? toPost(rows[0]) : null;
}

/** Human date in the site's style, e.g. "June 28, 2026". */
export const formatDate = (iso: string | null): string =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : '';

/** Falls back to a word-count estimate when read_minutes was not supplied. */
export const readingTime = (post: Post): string => {
  const minutes = post.readMinutes ?? Math.max(1, Math.round(post.bodyMd.split(/\s+/).length / 220));
  return `${minutes} min`;
};

export const kindLabel = (kind: PostKind): string => (kind === 'book-note' ? 'Book note' : 'Essay');
