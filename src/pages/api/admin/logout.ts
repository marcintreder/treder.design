import type { APIRoute } from 'astro';
import { ADMIN_COOKIE } from '../../../lib/admin';

export const prerender = false;

/**
 * Logging out needs no session check: clearing a cookie you already hold is
 * harmless, and refusing an expired session would only strand the browser with
 * a dead cookie it cannot drop.
 */
export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(ADMIN_COOKIE, { path: '/' });
  return redirect('/admin', 303);
};
