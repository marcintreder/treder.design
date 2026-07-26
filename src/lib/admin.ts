/**
 * Session gate for the /admin blog console.
 *
 * Deliberately the same shape as `lib/unlock.ts` — Web Crypto HMAC over an
 * issued-at timestamp, constant-time compare, `issued.signature` cookie the
 * client cannot forge — but kept separate because the two gates protect
 * different things and must not share a cookie or a lifetime. The case-study
 * cookie only reveals copy; this one can delete rows, so it lives 7 days
 * instead of 30.
 *
 * Every entry point fails closed. If ADMIN_PASSWORD or SESSION_SECRET is
 * missing, `checkAdminPassword` and `isAdmin` both return false rather than
 * throwing or defaulting to allow — an unconfigured deploy is a locked admin
 * panel, never an open one.
 */

import { getSecret } from 'astro:env/server';

const COOKIE = 'admin_session';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days


const enc = new TextEncoder();

/* Read statically, the way unlock.ts and db.ts do — Vite only substitutes
   `import.meta.env.NAME`, so dynamic indexing would silently read nothing. An
   empty string counts as unset, so a blank line in .env locks rather than
   opens. */
const clean = (v: string | undefined): string | null =>
  typeof v === 'string' && v.length > 0 ? v : null;

const secret = (): string | null =>
  clean(getSecret('SESSION_SECRET'));

const expectedPassword = (): string | null =>
  clean(getSecret('ADMIN_PASSWORD'));

async function hmac(value: string, key: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(value));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Constant-time comparison, so a wrong guess leaks nothing through timing. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/**
 * Verify a submitted admin password.
 *
 * Unlike the case-study gate this does not lower-case or trim the input: an
 * admin password is a credential, and folding case would throw away entropy.
 */
export async function checkAdminPassword(input: string): Promise<boolean> {
  const key = secret();
  const expected = expectedPassword();
  if (!key || !expected || !input) return false;

  // Hash both sides first so the comparison length never depends on the secret.
  const [a, b] = await Promise.all([hmac(input, key), hmac(expected, key)]);
  return safeEqual(a, b);
}

/** `issued.signature` — the signature covers the timestamp, so neither can move. */
export async function issueAdminCookie(): Promise<string | null> {
  const key = secret();
  if (!key) return null;
  const issued = String(Date.now());
  return `${issued}.${await hmac(issued, key)}`;
}

export async function isAdmin(cookieValue: string | undefined): Promise<boolean> {
  const key = secret();
  // No password configured means no admin exists — an unsigned deploy must not
  // be administrable even if someone somehow presents a valid signature.
  if (!key || !expectedPassword() || !cookieValue) return false;

  const [issued, sig] = cookieValue.split('.');
  if (!issued || !sig) return false;

  const age = (Date.now() - Number(issued)) / 1000;
  if (!Number.isFinite(age) || age < 0 || age > MAX_AGE) return false;

  try {
    return safeEqual(sig, await hmac(issued, key));
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE = COOKIE;
export const ADMIN_MAX_AGE = MAX_AGE;
