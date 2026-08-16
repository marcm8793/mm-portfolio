import "server-only";

import { createHash } from "node:crypto";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 3;
const MAX_TRACKED_IDENTITIES = 500;

type AttemptStore = Map<string, number[]>;

const globalForContactRateLimit = globalThis as typeof globalThis & {
  contactSubmissionAttempts?: AttemptStore;
};

const attempts =
  globalForContactRateLimit.contactSubmissionAttempts ?? new Map<string, number[]>();

globalForContactRateLimit.contactSubmissionAttempts = attempts;

function anonymize(identity: string) {
  return createHash("sha256").update(identity).digest("hex");
}

function removeExpiredAttempts(now: number) {
  if (attempts.size < MAX_TRACKED_IDENTITIES) return;

  for (const [key, timestamps] of attempts) {
    const active = timestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );

    if (active.length === 0) attempts.delete(key);
    else attempts.set(key, active);
  }
}

export function checkContactRateLimit(identity: string) {
  const now = Date.now();
  const key = anonymize(identity);
  const activeAttempts = (attempts.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (activeAttempts.length >= RATE_LIMIT_MAX_ATTEMPTS) {
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - activeAttempts[0]);

    return {
      allowed: false as const,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }

  attempts.set(key, [...activeAttempts, now]);
  removeExpiredAttempts(now);

  return { allowed: true as const };
}
