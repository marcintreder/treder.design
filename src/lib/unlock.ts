/**
 * Server-side gate for the confidential (Google) case studies.
 *
 * The prototype compared the password in client-side JavaScript and shipped the
 * protected copy to every visitor regardless, so anyone could read it with View
 * Source. Here the password never leaves the server, the case body is not
 * rendered into the HTML unless the request is already unlocked, and the proof
 * of unlocking is an HMAC-signed cookie that the client cannot forge.
 */

const COOKIE = 'case_unlock';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const enc = new TextEncoder();

const secret = (): string => {
  const s = import.meta.env.SESSION_SECRET ?? process.env.SESSION_SECRET;
  if (!s) throw new Error('SESSION_SECRET is not set — cannot verify case-study unlocking.');
  return s;
};

const expectedPassword = (): string | null =>
  import.meta.env.CASE_STUDY_PASSWORD ?? process.env.CASE_STUDY_PASSWORD ?? null;

async function hmac(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(value));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Constant-time comparison, so a wrong guess leaks nothing through timing. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function checkPassword(input: string): Promise<boolean> {
  const expected = expectedPassword();
  if (!expected) return false;
  // Hash both sides first so the comparison length never depends on the secret.
  const [a, b] = await Promise.all([hmac(input.trim().toLowerCase()), hmac(expected.trim().toLowerCase())]);
  return safeEqual(a, b);
}

export async function issueCookie(): Promise<string> {
  const issued = String(Date.now());
  return `${issued}.${await hmac(issued)}`;
}

export async function isUnlocked(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  const [issued, sig] = cookieValue.split('.');
  if (!issued || !sig) return false;

  const age = (Date.now() - Number(issued)) / 1000;
  if (!Number.isFinite(age) || age < 0 || age > MAX_AGE) return false;

  return safeEqual(sig, await hmac(issued));
}

export const UNLOCK_COOKIE = COOKIE;
export const UNLOCK_MAX_AGE = MAX_AGE;
