"use client";

import { useAudioMetadata } from "@/hooks/useAudioMetadata";
import { formatAudioTime } from "@/lib/formatAudioTime";
import { useAudioPlayer } from "@/components/AudioProvider";

interface AudioDurationProps {
  audioPath: string;
  songSlug?: string;
  className?: string;
  /** Shown when metadata cannot be read */
  fallback?: string;
}

/**
 * Displays real duration from metadata (preload=metadata).
 * If this song is the active player track, prefers the live player duration.
 */
export function AudioDuration({
  audioPath,
  songSlug,
  className = "",
  fallback = "—:—",
}: AudioDurationProps) {
  const { currentSong, duration: playerDuration, status: playerStatus } =
    useAudioPlayer();
  const { duration: metaDuration, status: metaStatus } =
    useAudioMetadata(audioPath);

  const isActive = songSlug ? currentSong?.slug === songSlug : false;
  const liveDuration =
    isActive && playerDuration > 0 ? playerDuration : 0;

  if (isActive && playerStatus === "unavailable") {
    return <span className={className}>Demo coming soon</span>;
  }

  if (liveDuration > 0) {
    return (
      <span className={className}>{formatAudioTime(liveDuration)}</span>
    );
  }

  if (metaStatus === "loading" || metaStatus === "idle") {
    return <span className={className}>{fallback}</span>;
  }

  if (metaStatus === "error" || metaDuration <= 0) {
    return <span className={className}>Demo coming soon</span>;
  }

  return (
    <span className={className}>{formatAudioTime(metaDuration)}</span>
  );
}
