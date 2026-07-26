/**
 * Seeds the six posts that were hardcoded in the 2026 design prototype into
 * Postgres, so the blog starts with its existing writing rather than empty.
 *
 * Idempotent: a post whose slug already exists is left untouched.
 *
 *   DATABASE_URL="postgres://…" node scripts/seed.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL is not set.');
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const posts = JSON.parse(readFileSync(join(here, '../migrations/002_seed_posts.json'), 'utf8'));
const sql = neon(url);

let inserted = 0;
let skipped = 0;

for (const p of posts) {
  const existing = await sql`SELECT 1 FROM posts WHERE slug = ${p.slug} LIMIT 1`;
  if (existing.length) {
    skipped++;
    continue;
  }

  // The prototype stored bodies as an array of paragraphs; Markdown is the
  // storage format from here on, so paragraphs become blank-line-separated text.
  // A leading pull-quote is preserved as a blockquote.
  const body = [p.quote ? `> ${p.quote}` : null, ...(p.body ?? [])].filter(Boolean).join('\n\n');
  const minutes = Number.parseInt(String(p.read).replace(/\D/g, ''), 10) || null;

  await sql`
    INSERT INTO posts (slug, title, excerpt, body_md, kind, status, featured, read_minutes, published_at, created_at)
    VALUES (${p.slug}, ${p.title}, ${p.excerpt}, ${body}, ${p.kind}, 'published', ${inserted === 0},
            ${minutes}, ${p.dateISO}, ${p.dateISO})`;
  inserted++;
}

console.log(`seeded: ${inserted} inserted, ${skipped} already present`);

const [{ count }] = await sql`SELECT count(*)::int AS count FROM posts WHERE status = 'published'`;
console.log(`published posts in database: ${count}`);
