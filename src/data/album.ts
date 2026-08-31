/**
 * Debut album catalog data for WHAT IT TAKES.
 * Preview playback must use previewAudioPath only — never full masters.
 */

export interface AlbumStreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtubeMusic?: string;
  amazonMusic?: string;
  other?: { label: string; url: string }[];
}

export interface AlbumTrack {
  trackNumber: number;
  title: string;
  slug: string;
  artworkPath: string;
  /** Public path to a ~30s preview MP3. Never point this at a full master. */
  previewAudioPath: string;
  album: string;
  releaseDate: string;
}

export interface Album {
  slug: string;
  title: string;
  artist: string;
  subtitle: string;
  releaseDate: string;
  releaseDateLabel: string;
  trackCountLabel: string;
  artworkPath: string;
  /** Flip to true on release day when streaming links are ready. */
  isReleased: boolean;
  tracks: AlbumTrack[];
  /** Leave empty pre-release; fill with real URLs after release. */
  streamingLinks: AlbumStreamingLinks;
}

const ALBUM_TITLE = "What It Takes";
const RELEASE_DATE = "2026-09-01";

function track(
  trackNumber: number,
  slug: string,
  title: string,
  artworkExt: "png" | "jpg" = "png",
): AlbumTrack {
  const padded = String(trackNumber).padStart(2, "0");
  return {
    trackNumber,
    slug,
    title,
    artworkPath: `/images/songs/${slug}.${artworkExt}`,
    previewAudioPath: `/audio/previews/${padded}-${slug}.mp3`,
    album: ALBUM_TITLE,
    releaseDate: RELEASE_DATE,
  };
}

/** Official WHAT IT TAKES album track order. */
export const whatItTakesAlbum: Album = {
  slug: "what-it-takes",
  title: ALBUM_TITLE,
  artist: "JohnPat",
  subtitle: "Debut Album",
  releaseDate: RELEASE_DATE,
  releaseDateLabel: "September 1, 2026",
  trackCountLabel: "15 Tracks",
  artworkPath: "/images/albums/what-it-takes.png",
  isReleased: false,
  streamingLinks: {},
  tracks: [
    track(1, "whatever-it-takes", "Whatever It Takes"),
    track(2, "she-only-looks-at-me-that-way", "She Only Looks At Me That Way"),
    track(3, "find-your-groove", "Find Your Groove", "jpg"),
    track(4, "nothing-comes-easy", "Nothing Comes Easy", "jpg"),
    track(5, "dilemma", "Dilemma", "jpg"),
    track(6, "enjoy-the-ride", "Enjoy the Ride"),
    track(7, "still-raising-hell", "Still Raising Hell", "jpg"),
    track(8, "built-for-the-storm", "Built for the Storm", "jpg"),
    track(9, "second-chances", "Second Chances"),
    track(10, "still-got-some-fight", "Still Got Some Fight"),
    track(11, "honky-tonk-revival", "Honky Tonk Revival"),
    track(12, "stay-till-sunrise", "Stay Till Sunrise"),
    track(13, "say-less", "Say Less"),
    track(14, "back-when-time-moved-slow", "Back When Time Moved Slow"),
    track(15, "leave-it-better-than-you-found-it", "Leave It Better Than You Found It"),
  ],
};

export function getAlbumTracks(): AlbumTrack[] {
  return [...whatItTakesAlbum.tracks].sort(
    (a, b) => a.trackNumber - b.trackNumber,
  );
}

export function hasStreamingLinks(links: AlbumStreamingLinks): boolean {
  return Boolean(
    links.spotify ||
      links.appleMusic ||
      links.youtubeMusic ||
      links.amazonMusic ||
      (links.other && links.other.length > 0),
  );
}
