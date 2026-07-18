"use client";

import Image from "next/image";
import Link from "next/link";
import { formatTime, useAudioPlayer } from "@/components/AudioProvider";

export function MiniPlayer() {
  const {
    currentSong,
    status,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlayPause,
    playPrevious,
    playNext,
    seek,
    setVolume,
    toggleMute,
    stop,
  } = useAudioPlayer();

  if (!currentSong) return null;

  const progressMax = duration > 0 ? duration : 100;
  const progressValue = duration > 0 ? currentTime : 0;
  const unavailable = status === "unavailable";

  return (
    <div className="mini-player" role="region" aria-label="Now playing">
      <div className="mini-player__inner">
        <div className="mini-player__track">
          <div className="mini-player__art">
            <Image
              src={currentSong.artworkPath}
              alt={`Artwork for ${currentSong.title}`}
              width={72}
              height={72}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mini-player__meta">
            <p className="mini-player__label">
              {unavailable ? "Demo coming soon" : "Now playing"}
            </p>
            <p className="mini-player__title font-display">
              {currentSong.title}
            </p>
            <p className="mini-player__genres">
              {currentSong.genres.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mini-player__controls">
          <button
            type="button"
            className="player-icon-btn player-icon-btn--small"
            onClick={playPrevious}
            aria-label="Previous song"
          >
            ‹‹
          </button>
          <button
            type="button"
            className="player-icon-btn"
            onClick={togglePlayPause}
            aria-label={
              unavailable
                ? "Demo unavailable"
                : status === "playing"
                  ? "Pause"
                  : "Play"
            }
            disabled={unavailable}
          >
            {status === "playing" ? "❚❚" : "▶"}
          </button>
          <button
            type="button"
            className="player-icon-btn player-icon-btn--small"
            onClick={playNext}
            aria-label="Next song"
          >
            ››
          </button>

          <div className="mini-player__timeline">
            <span className="mini-player__time">
              {unavailable ? "—" : formatTime(currentTime)}
            </span>
            <input
              type="range"
              className="player-range"
              min={0}
              max={progressMax}
              step={0.1}
              value={progressValue}
              disabled={unavailable || duration <= 0}
              aria-label="Seek"
              onChange={(event) => seek(Number(event.target.value))}
            />
            <span className="mini-player__time">
              {unavailable
                ? currentSong.duration
                : duration > 0
                  ? formatTime(duration)
                  : currentSong.duration}
            </span>
          </div>
        </div>

        <div className="mini-player__aside">
          <div className="mini-player__volume">
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
          </div>

          <Link
            href={`/songs/${currentSong.slug}`}
            className="mini-player__link"
          >
            View Song
          </Link>

          <button
            type="button"
            className="player-icon-btn player-icon-btn--small"
            onClick={stop}
            aria-label="Close player"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
