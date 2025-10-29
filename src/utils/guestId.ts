// Utility to manage a hashed guest ID for unauthenticated users
// - Generates a SHA-256 hash of the user's IP address along with lightweight, non-PII context
// - Persists the resulting guest ID in a cookie `guest_id`
// - Returns the existing cookie value if already set

const GUEST_COOKIE_NAME = "guest_id";
const GUEST_COOKIE_MAX_AGE_DAYS = 365; // Keep for a year unless cleared by the user

function setCookie(name: string, value: string, days: number) {
  try {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {}
}

function getCookie(name: string): string | null {
  try {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()!.split(";")[0];
  } catch {}
  return null;
}

async function sha256Hex(input: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function fetchClientIP(): Promise<string | null> {
  try {
    // Using ipify. If blocked, caller will fallback to random.
    const res = await fetch("https://api64.ipify.org?format=json", { cache: "no-store" });
    if (!res.ok) return null;
    const json = (await res.json()) as { ip?: string };
    return json.ip ?? null;
  } catch {
    return null;
  }
}

export async function getOrCreateGuestId(): Promise<string> {
  // Return existing cookie if present
  const existing = getCookie(GUEST_COOKIE_NAME);
  if (existing) return existing;

  // Try to fetch client IP
  const ip = await fetchClientIP();

  // Build a stable, privacy-preserving input
  // Include IP (if available) + user agent + timezone to reduce collisions without exposing raw IP
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone ?? "" : "";
  const seed = ip ? `ip:${ip}|ua:${ua}|tz:${tz}` : `noip|ua:${ua}|tz:${tz}|rand:${crypto.getRandomValues(new Uint32Array(1))[0]}`;

  const guestId = await sha256Hex(seed);

  // Persist in cookie
  setCookie(GUEST_COOKIE_NAME, guestId, GUEST_COOKIE_MAX_AGE_DAYS);

  return guestId;
}

export function getGuestIdFromCookie(): string | null {
  return getCookie(GUEST_COOKIE_NAME);
}
