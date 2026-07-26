import type { APIRoute } from 'astro';
import { sql, hasDatabase } from '../../../lib/db';
import { isAdmin, ADMIN_COOKIE } from '../../../lib/admin';

export const prerender = false;

/**
 * Flip a post between draft and published.
 *
 * A stray or forged POST gets 403, not a redirect: a redirect would imply the
 * request was merely misrouted, and it would let an unauthenticated caller
 * probe the route by watching where it lands.
 */
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  let allowed = false;
  try {
    allowed = await isAdmin(cookies.get(ADMIN_COOKIE)?.value);
  } catch {
    allowed = false;
  }
  if (!allowed) return new Response('Forbidden', { status: 403 });

  if (!hasDatabase()) return new Response('No database configured', { status: 503 });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  const slug = form.get('slug');
  if (typeof slug !== 'string' || !slug) return new Response('Bad request', { status: 400 });

  /* One statement, so the read and the write cannot disagree: flip the status
     and stamp published_at the first time a post actually goes live. */
  const rows = await sql()`
    UPDATE posts
       SET status = CASE WHEN status = 'published' THEN 'draft' ELSE 'published' END,
           published_at = CASE
             WHEN status = 'published' THEN published_at
             WHEN published_at IS NULL THEN now()
             ELSE published_at
           END
     WHERE slug = ${slug}
    RETURNING slug`;

  if (rows.length === 0) return new Response('Not found', { status: 404 });

  return redirect('/admin', 303);
};
