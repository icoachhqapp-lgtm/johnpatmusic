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
import { getAdjacentSongs, type Song } from "@/data/songs";

export type AudioStatus =
  | "idle"
  | "loading"
  | "playing"
  | "paused"
  | "unavailable";

interface AudioContextValue {
  currentSong: Song | null;
  status: AudioStatus;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  playPrevious: () => void;
  playNext: () => void;
  pause: () => void;
  stop: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  isCurrentSong: (slug: string) => boolean;
  isPlayingSong: (slug: string) => boolean;
}

const AudioPlayerContext = createContext<AudioContextValue | null>(null);

function formatSafeDuration(value: number) {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSongRef = useRef<Song | null>(null);
  const playSongRef = useRef<(song: Song) => void>(() => undefined);

  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [status, setStatus] = useState<AudioStatus>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    currentSongRef.current = currentSong;
  }, [currentSong]);

  const playSong = useCallback((song: Song) => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentSrc = audio.getAttribute("src") ?? "";
    const isSame = currentSrc === song.audioPath;

    if (isSame && !audio.paused && status === "playing") {
      audio.pause();
      return;
    }

    if (isSame && (status === "paused" || audio.paused) && status !== "unavailable") {
      void audio.play().catch(() => setStatus("unavailable"));
      return;
    }

    audio.pause();
    setCurrentSong(song);
    setStatus("loading");
    setCurrentTime(0);
    setDuration(0);
    audio.src = song.audioPath;
    audio.load();

    void audio
      .play()
      .then(() => setStatus("playing"))
      .catch(() => setStatus("unavailable"));
  }, [status]);

  useEffect(() => {
    playSongRef.current = playSong;
  }, [playSong]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () =>
      setDuration(formatSafeDuration(audio.duration));
    const onEnded = () => {
      const song = currentSongRef.current;
      if (!song) {
        setStatus("paused");
        setCurrentTime(0);
        return;
      }
      const { next } = getAdjacentSongs(song.slug);
      if (next) playSongRef.current(next);
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
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("error", onError);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    if (status === "unavailable") {
      playSong(currentSong);
      return;
    }

    if (audio.paused) {
      void audio.play().catch(() => setStatus("unavailable"));
    } else {
      audio.pause();
    }
  }, [currentSong, playSong, status]);

  const playPrevious = useCallback(() => {
    if (!currentSong) return;
    const { previous } = getAdjacentSongs(currentSong.slug);
    if (previous) playSong(previous);
  }, [currentSong, playSong]);

  const playNext = useCallback(() => {
    if (!currentSong) return;
    const { next } = getAdjacentSongs(currentSong.slug);
    if (next) playSong(next);
  }, [currentSong, playSong]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setStatus(currentSong ? "paused" : "idle");
  }, [currentSong]);

  const seek = useCallback(
    (time: number) => {
      const audio = audioRef.current;
      if (!audio || status === "unavailable") return;
      const next = Math.max(
        0,
        Math.min(time, formatSafeDuration(audio.duration) || time),
      );
      audio.currentTime = next;
      setCurrentTime(next);
    },
    [status],
  );

  const setVolume = useCallback((value: number) => {
    const next = Math.max(0, Math.min(1, value));
    setVolumeState(next);
    if (next > 0) setIsMuted(false);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const isCurrentSong = useCallback(
    (slug: string) => currentSong?.slug === slug,
    [currentSong],
  );

  const isPlayingSong = useCallback(
    (slug: string) => currentSong?.slug === slug && status === "playing",
    [currentSong, status],
  );

  const value = useMemo(
    () => ({
      currentSong,
      status,
      currentTime,
      duration,
      volume,
      isMuted,
      playSong,
      togglePlayPause,
      playPrevious,
      playNext,
      pause,
      stop,
      seek,
      setVolume,
      toggleMute,
      isCurrentSong,
      isPlayingSong,
    }),
    [
      currentSong,
      status,
      currentTime,
      duration,
      volume,
      isMuted,
      playSong,
      togglePlayPause,
      playPrevious,
      playNext,
      pause,
      stop,
      seek,
      setVolume,
      toggleMute,
      isCurrentSong,
      isPlayingSong,
    ],
  );

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) {
    throw new Error("useAudioPlayer must be used within AudioProvider");
  }
  return ctx;
}

export function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
