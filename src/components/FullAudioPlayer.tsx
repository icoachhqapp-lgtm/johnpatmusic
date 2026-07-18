"use client";

import Link from "next/link";
import { formatTime, useAudioPlayer } from "@/components/AudioProvider";
import type { Song } from "@/data/songs";

export function FullAudioPlayer({ song }: { song: Song }) {
  const {
    playSong,
    togglePlayPause,
    seek,
    setVolume,
    toggleMute,
    isCurrentSong,
    isPlayingSong,
    status,
    currentTime,
    duration,
    volume,
    isMuted,
  } = useAudioPlayer();

  const current = isCurrentSong(song.slug);
  const playing = isPlayingSong(song.slug);
  const unavailable = current && status === "unavailable";
  const loading = current && status === "loading";
  const displayTime = current ? currentTime : 0;
  const displayDuration = current && duration > 0 ? duration : 0;

  const handlePlay = () => {
    if (current) togglePlayPause();
    else playSong(song);
  };

  return (
    <div className="full-player" role="region" aria-label={`${song.title} audio player`}>
      <div className="full-player__top">
        <button
          type="button"
          className="player-icon-btn player-icon-btn--large"
          onClick={handlePlay}
          aria-label={
            unavailable
              ? "Demo coming soon"
              : playing
                ? "Pause"
                : "Play concept demo"
          }
          disabled={unavailable}
        >
          {loading ? "…" : playing ? "❚❚" : "▶"}
        </button>

        <div>
          <p className="eyebrow" style={{ marginBottom: "0.35rem" }}>
            Concept Demo
          </p>
          <p className="full-player__title font-display">{song.title}</p>
          {unavailable ? (
            <p className="full-player__notice">Demo coming soon</p>
          ) : (
            <p className="full-player__notice">
              Concept recording · {song.duration}
            </p>
          )}
        </div>
      </div>

      <div className="full-player__timeline">
        <span>{unavailable ? "—" : formatTime(displayTime)}</span>
        <input
          type="range"
          className="player-range"
          min={0}
          max={displayDuration > 0 ? displayDuration : 100}
          step={0.1}
          value={displayDuration > 0 ? displayTime : 0}
          disabled={!current || unavailable || displayDuration <= 0}
          aria-label="Seek"
          onChange={(event) => seek(Number(event.target.value))}
        />
        <span>
          {unavailable
            ? song.duration
            : formatTime(displayDuration || 0) === "0:00"
              ? song.duration
              : formatTime(displayDuration)}
        </span>
      </div>

      <div className="full-player__volume">
        <button
          type="button"
          className="player-icon-btn player-icon-btn--small"
          onClick={toggleMute}
          aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? "Mute" : "Vol"}
        </button>
        <input
          type="range"
          className="player-range player-range--volume"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : volume}
          aria-label="Volume"
          onChange={(event) => setVolume(Number(event.target.value))}
        />
        <Link href={`/contact?song=${song.slug}`} className="button-secondary">
          Recording Inquiry
        </Link>
      </div>
    </div>
  );
}
