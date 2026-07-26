import type { APIRoute } from 'astro';
import { sql, hasDatabase } from '../../../lib/db';
import { isAdmin, ADMIN_COOKIE } from '../../../lib/admin';

export const prerender = false;

/**
 * Permanently remove a post.
 *
 * Two guards, because there is no undo: the session must be a real admin
 * session (403 otherwise, never a redirect), and the form must echo the slug
 * back in a `confirm` field. The echo is what makes the confirmation page
 * meaningful — a one-click POST that never passed through it cannot satisfy it.
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
  const confirm = form.get('confirm');

  if (typeof slug !== 'string' || !slug) return new Response('Bad request', { status: 400 });
  if (typeof confirm !== 'string' || confirm !== slug) {
    return new Response('Deletion not confirmed', { status: 400 });
  }

  await sql()`DELETE FROM posts WHERE slug = ${slug}`;

  return redirect('/admin?deleted=1', 303);
};
