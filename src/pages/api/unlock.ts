import type { APIRoute } from 'astro';
import { getCase } from '../../data/cases';
import { checkPassword, issueCookie, UNLOCK_COOKIE, UNLOCK_MAX_AGE } from '../../lib/unlock';

export const prerender = false;

const FALLBACK = '/portfolio';

/**
 * Only ever redirect back to a case-study page we actually own.
 *
 * The target arrives in a form field, so it is attacker-controllable: an open
 * redirect here would let someone bounce a visitor off this origin. We drop any
 * query/hash, require the literal `/portfolio/<slug>` shape (which also rules
 * out `//evil.example` and absolute URLs), and finally check the slug against
 * the real case list.
 */
function safeRedirect(raw: FormDataEntryValue | null): string {
  if (typeof raw !== 'string') return FALLBACK;

  const path = raw.split(/[?#]/)[0];
  const match = /^\/portfolio\/([a-z0-9-]+)\/?$/.exec(path);
  if (!match) return FALLBACK;

  return getCase(match[1]) ? path : FALLBACK;
}

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(FALLBACK, 303);
  }

  const target = safeRedirect(form.get('redirect'));
  const submitted = form.get('password');
  const password = typeof submitted === 'string' ? submitted : '';

  let ok = false;
  try {
    ok = password.length > 0 && (await checkPassword(password));
  } catch {
    // A missing SESSION_SECRET / CASE_STUDY_PASSWORD must fail closed, never open.
    ok = false;
  }

  if (!ok) return redirect(`${target}?error=1`, 303);

  cookies.set(UNLOCK_COOKIE, await issueCookie(), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: UNLOCK_MAX_AGE,
  });

  return redirect(target, 303);
};
