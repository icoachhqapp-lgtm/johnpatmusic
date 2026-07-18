/**
 * Format audio seconds as m:ss.
 * Returns "—:—" for NaN, Infinity, negative, or otherwise invalid values.
 */
export function formatAudioTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "—:—";
  }

  const total = Math.floor(seconds);
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

/** Returns a safe positive duration, or 0 when metadata is unusable. */
export function safeAudioDuration(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}
