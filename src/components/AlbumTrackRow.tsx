"use client";

import Image from "next/image";
import type { AlbumTrack } from "@/data/album";
import {
  formatPreviewTime,
  useAlbumPreview,
} from "@/components/AlbumPreviewProvider";

interface AlbumTrackRowProps {
  track: AlbumTrack;
}

export function AlbumTrackRow({ track }: AlbumTrackRowProps) {
  const {
    playTrack,
    seek,
    currentTime,
    duration,
    status,
    isCurrentTrack,
    isPlayingTrack,
  } = useAlbumPreview();

  const current = isCurrentTrack(track.slug);
  const playing = isPlayingTrack(track.slug);
  const unavailable = current && status === "unavailable";
  const loading = current && status === "loading";

  const progressMax = current && duration > 0 ? duration : 30;
  const progressValue = current ? currentTime : 0;

  let playLabel = "Play preview";
  if (loading) playLabel = "Loading preview";
  else if (unavailable) playLabel = "Preview coming soon";
  else if (playing) playLabel = "Pause preview";

  return (
    <article className="album-track">
      <span className="album-track__number" aria-hidden="true">
        {String(track.trackNumber).padStart(2, "0")}
      </span>

      <div className="album-track__art">
        <Image
          src={track.artworkPath}
          alt={`Cover artwork for ${track.title}`}
          width={120}
          height={120}
          className="album-track__art-image"
        />
      </div>

      <div className="album-track__main">
        <div className="album-track__heading">
          <h3 className="album-track__title">{track.title}</h3>
          <span className="album-track__badge">Preview</span>
        </div>

        <div className="album-track__controls">
          <button
            type="button"
            className="album-track__play"
            onClick={() => playTrack(track)}
            aria-pressed={playing}
            aria-label={`${playLabel}: ${track.title}`}
          >
            <span aria-hidden="true">
              {unavailable ? "○" : playing ? "❚❚" : "▶"}
            </span>
            <span>
              {unavailable
                ? "Preview Soon"
                : loading
                  ? "Loading…"
                  : playing
                    ? "Pause"
                    : "Play"}
            </span>
          </button>

          <div className="album-track__progress">
            <input
              type="range"
              className="album-track__range"
              min={0}
              max={progressMax}
              step={0.1}
              value={progressValue}
              disabled={!current || unavailable || duration <= 0}
              aria-label={`Preview progress for ${track.title}`}
              onChange={(event) => seek(Number(event.target.value))}
            />
            <div className="album-track__times">
              <span>{current ? formatPreviewTime(currentTime) : "0:00"}</span>
              <span>
                {current && duration > 0
                  ? formatPreviewTime(duration)
                  : "~0:30"}
              </span>
            </div>
          </div>
        </div>

        {unavailable ? (
          <p className="album-track__unavailable">
            Preview clip not available yet.
          </p>
        ) : null}
      </div>
    </article>
  );
}
