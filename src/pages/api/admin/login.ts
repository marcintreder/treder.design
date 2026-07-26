import type { APIRoute } from 'astro';
import {
  checkAdminPassword,
  issueAdminCookie,
  ADMIN_COOKIE,
  ADMIN_MAX_AGE,
} from '../../../lib/admin';

export const prerender = false;

const FALLBACK = '/admin';

/**
 * The redirect target arrives in a form field, so it is attacker-controllable.
 * Only ever bounce back to a path under /admin — that rules out absolute URLs,
 * protocol-relative `//evil.example`, and any open-redirect off this origin.
 */
function safeRedirect(raw: FormDataEntryValue | null): string {
  if (typeof raw !== 'string') return FALLBACK;
  const path = raw.split(/[?#]/)[0];
  return /^\/admin\/?$/.test(path) ? path : FALLBACK;
}

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(`${FALLBACK}?error=1`, 303);
  }

  const target = safeRedirect(form.get('redirect'));
  const submitted = form.get('password');
  const password = typeof submitted === 'string' ? submitted : '';

  let ok = false;
  let value: string | null = null;
  try {
    ok = await checkAdminPassword(password);
    if (ok) value = await issueAdminCookie();
  } catch {
    // A missing ADMIN_PASSWORD / SESSION_SECRET must fail closed, never open.
    ok = false;
  }

  if (!ok || !value) return redirect(`${target}?error=1`, 303);

  cookies.set(ADMIN_COOKIE, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_MAX_AGE,
  });

  return redirect(target, 303);
};
