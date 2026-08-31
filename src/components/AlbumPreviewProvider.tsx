"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { AlbumTrack } from "@/data/album";
import { formatAudioTime, safeAudioDuration } from "@/lib/formatAudioTime";
import { useAudioPlayer } from "@/components/AudioProvider";

export type PreviewStatus =
  | "idle"
  | "loading"
  | "playing"
  | "paused"
  | "unavailable";

interface AlbumPreviewContextValue {
  currentTrack: AlbumTrack | null;
  status: PreviewStatus;
  currentTime: number;
  duration: number;
  playTrack: (track: AlbumTrack) => void;
  togglePlayPause: () => void;
  pause: () => void;
  stop: () => void;
  seek: (time: number) => void;
  isCurrentTrack: (slug: string) => boolean;
  isPlayingTrack: (slug: string) => boolean;
}

const AlbumPreviewContext = createContext<AlbumPreviewContextValue | null>(
  null,
);

/**
 * Isolated preview player for album tracks.
 * Only ever loads `previewAudioPath` (~30s MP3s) — never full masters.
 */
export function AlbumPreviewProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrackRef = useRef<AlbumTrack | null>(null);

  const [currentTrack, setCurrentTrack] = useState<AlbumTrack | null>(null);
  const [status, setStatus] = useState<PreviewStatus>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const { stop: stopFullPlayer } = useAudioPlayer();

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    // Previews must not offer a download affordance via controls attribute.
    audio.controls = false;
    audioRef.current = audio;

    const syncDuration = () => {
      setDuration(safeAudioDuration(audio.duration));
    };

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => syncDuration();
    const onDurationChange = () => syncDuration();
    const onEnded = () => {
      setStatus("paused");
      setCurrentTime(0);
      audio.currentTime = 0;
    };
    const onPlaying = () => setStatus("playing");
    const onPause = () => {
      if (!audio.ended) setStatus("paused");
    };
    const onWaiting = () => setStatus("loading");
    const onError = () => {
      setStatus("unavailable");
      setDuration(0);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("error", onError);
      audioRef.current = null;
    };
  }, []);

  const playTrack = useCallback(
    (track: AlbumTrack) => {
      const audio = audioRef.current;
      if (!audio) return;

      // Ensure concept-demo / full player never stacks with a preview.
      stopFullPlayer();

      const currentSrc = audio.getAttribute("src") ?? "";
      const isSame = currentSrc === track.previewAudioPath;

      if (isSame && !audio.paused && status === "playing") {
        audio.pause();
        return;
      }

      if (
        isSame &&
        (status === "paused" || audio.paused) &&
        status !== "unavailable"
      ) {
        void audio.play().catch(() => setStatus("unavailable"));
        return;
      }

      audio.pause();
      setCurrentTrack(track);
      setStatus("loading");
      setCurrentTime(0);
      setDuration(0);
      // Security: only the preview path is ever assigned.
      audio.src = track.previewAudioPath;
      audio.load();

      void audio
        .play()
        .then(() => setStatus("playing"))
        .catch(() => setStatus("unavailable"));
    },
    [status, stopFullPlayer],
  );

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    if (status === "unavailable") {
      playTrack(currentTrack);
      return;
    }

    if (audio.paused) {
      stopFullPlayer();
      void audio.play().catch(() => setStatus("unavailable"));
    } else {
      audio.pause();
    }
  }, [currentTrack, playTrack, status, stopFullPlayer]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setStatus(currentTrack ? "paused" : "idle");
  }, [currentTrack]);

  const seek = useCallback(
    (time: number) => {
      const audio = audioRef.current;
      if (!audio || status === "unavailable") return;
      const max = safeAudioDuration(audio.duration);
      const next = Math.max(0, Math.min(time, max || time));
      audio.currentTime = next;
      setCurrentTime(next);
    },
    [status],
  );

  const isCurrentTrack = useCallback(
    (slug: string) => currentTrack?.slug === slug,
    [currentTrack],
  );

  const isPlayingTrack = useCallback(
    (slug: string) => currentTrack?.slug === slug && status === "playing",
    [currentTrack, status],
  );

  const value = useMemo(
    () => ({
      currentTrack,
      status,
      currentTime,
      duration,
      playTrack,
      togglePlayPause,
      pause,
      stop,
      seek,
      isCurrentTrack,
      isPlayingTrack,
    }),
    [
      currentTrack,
      status,
      currentTime,
      duration,
      playTrack,
      togglePlayPause,
      pause,
      stop,
      seek,
      isCurrentTrack,
      isPlayingTrack,
    ],
  );

  return (
    <AlbumPreviewContext.Provider value={value}>
      {children}
    </AlbumPreviewContext.Provider>
  );
}

export function useAlbumPreview() {
  const ctx = useContext(AlbumPreviewContext);
  if (!ctx) {
    throw new Error("useAlbumPreview must be used within AlbumPreviewProvider");
  }
  return ctx;
}

export function formatPreviewTime(seconds: number) {
  return formatAudioTime(seconds);
}
