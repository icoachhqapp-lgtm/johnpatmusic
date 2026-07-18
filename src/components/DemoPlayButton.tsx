"use client";

import { useAudioPlayer } from "@/components/AudioProvider";
import type { Song } from "@/data/songs";

interface DemoPlayButtonProps {
  song: Song;
  variant?: "primary" | "ghost" | "card";
  className?: string;
}

export function DemoPlayButton({
  song,
  variant = "primary",
  className = "",
}: DemoPlayButtonProps) {
  const { playSong, isPlayingSong, isCurrentSong, status } = useAudioPlayer();

  const playing = isPlayingSong(song.slug);
  const current = isCurrentSong(song.slug);
  const unavailable = current && status === "unavailable";
  const loading = current && status === "loading";

  let label = "Play Demo";
  if (loading) label = "Loading…";
  else if (unavailable) label = "Demo Coming Soon";
  else if (playing) label = "Pause Demo";

  return (
    <button
      type="button"
      className={`demo-play-btn demo-play-btn--${variant} ${className}`.trim()}
      onClick={() => playSong(song)}
      aria-pressed={playing}
      aria-label={`${label}: ${song.title}`}
    >
      <span className="demo-play-btn__icon" aria-hidden="true">
        {unavailable ? "○" : playing ? "❚❚" : "▶"}
      </span>
      <span>{label}</span>
    </button>
  );
}
