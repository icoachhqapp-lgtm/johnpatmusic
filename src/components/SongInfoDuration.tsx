"use client";

import { AudioDuration } from "@/components/AudioDuration";

export function SongInfoDuration({
  audioPath,
  songSlug,
}: {
  audioPath: string;
  songSlug: string;
}) {
  return (
    <AudioDuration audioPath={audioPath} songSlug={songSlug} />
  );
}
