"use client";

import { useEffect, useRef, useState } from "react";
import { safeAudioDuration } from "@/lib/formatAudioTime";

export type AudioMetadataStatus = "idle" | "loading" | "ready" | "error";

/**
 * Loads audio duration with preload="metadata" only.
 * Reuses one Audio element per hook instance; cleans up on unmount / src change.
 */
export function useAudioMetadata(audioPath: string | null | undefined) {
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState<AudioMetadataStatus>("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioPath) {
      setDuration(0);
      setStatus("idle");
      return;
    }

    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;
    setStatus("loading");
    setDuration(0);

    const applyDuration = () => {
      const next = safeAudioDuration(audio.duration);
      if (next > 0) {
        setDuration(next);
        setStatus("ready");
      } else {
        setDuration(0);
        setStatus("error");
      }
    };

    const onLoadedMetadata = () => applyDuration();
    const onDurationChange = () => applyDuration();
    const onError = () => {
      setDuration(0);
      setStatus("error");
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("error", onError);
    audio.src = audioPath;
    audio.load();

    // Some browsers already have metadata after assigning src
    if (audio.readyState >= 1) {
      applyDuration();
    }

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("error", onError);
      audio.removeAttribute("src");
      audio.load();
      if (audioRef.current === audio) {
        audioRef.current = null;
      }
    };
  }, [audioPath]);

  return { duration, status };
}
