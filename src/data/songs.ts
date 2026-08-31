export type Genre = "Country" | "Southern Rock" | "Americana" | "Blues Rock";

export type VocalFormat = "Male vocal" | "Male/Female duet";

export interface Song {
  slug: string;
  title: string;
  genres: Genre[];
  themes: string[];
  description: string;
  story: string;
  lyricExcerpt: string;
  audioPath: string;
  artworkPath: string;
  availableForRecording: boolean;
  featured: boolean;
  released: boolean;
  vocalFormat: VocalFormat;
  feel: string;
  copyright: string;
}

const COPYRIGHT = "© 2026 JohnPat Music. All rights reserved.";

/**
 * Public songwriter detail entries that belong on WHAT IT TAKES.
 * The Music/Catalog page is driven by `src/data/album.ts` — not this list order.
 */
export const songs: Song[] = [
  {
    slug: "whatever-it-takes",
    title: "Whatever It Takes",
    genres: ["Country", "Southern Rock"],
    themes: ["hard work", "resilience", "responsibility", "faith"],
    description:
      "A driving anthem about grit, faith, and the responsibility it takes to keep going.",
    story:
      "Written for the moments when life asks more of you than you think you have. This song sits at the crossroads of Country storytelling and Southern Rock muscle—built for a strong male vocal that can carry both swagger and sincerity.",
    lyricExcerpt:
      "I do what it takes...\nWhatever it costs...",
    audioPath: "/audio/what-it-takes.mp3",
    artworkPath: "/images/songs/whatever-it-takes.png",
    availableForRecording: true,
    featured: true,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Mid-tempo drive · anthemic",
    copyright: COPYRIGHT,
  },
  {
    slug: "she-only-looks-at-me-that-way",
    title: "She Only Looks At Me That Way",
    genres: ["Country"],
    themes: ["love", "devotion", "relationship"],
    description:
      "A tender Country love song about the look that belongs to one person alone.",
    story:
      "Some love songs shout. This one watches. It’s about that rare glance across a room that says everything words can’t. Written for a sincere male vocal that can carry the quiet weight of that look.",
    lyricExcerpt:
      "She only looks at me that way...\nLike I'm still the man she'd choose today...",
    audioPath: "/audio/she-only-looks-at-me-that-way.mp3",
    artworkPath: "/images/songs/she-only-looks-at-me-that-way.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Warm mid-tempo · intimate",
    copyright: COPYRIGHT,
  },
  {
    slug: "back-when-time-moved-slow",
    title: "Back When Time Moved Slow",
    genres: ["Country", "Americana"],
    themes: ["memories", "family", "friendship", "simpler times"],
    description:
      "A nostalgic look back at evenings that lasted longer and people who stayed awhile.",
    story:
      "Written like a porch conversation at dusk. Two voices trade verses about the years that shaped them—perfect for a Male/Female duet that feels lived-in and warm.",
    lyricExcerpt:
      "Back when time moved slow...\nHearts were runnin' free...",
    audioPath: "/audio/back-when-time-moved-slow.mp3",
    artworkPath: "/images/songs/back-when-time-moved-slow.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male/Female duet",
    feel: "Easy mid-tempo · nostalgic",
    copyright: COPYRIGHT,
  },
  {
    slug: "still-got-some-fight",
    title: "Still Got Some Fight",
    genres: ["Southern Rock", "Blues Rock"],
    themes: ["survival", "perseverance", "grit"],
    description:
      "A Southern Rock stomper for anyone who’s been knocked down and refuses to stay there.",
    story:
      "Built for grit. Thick guitars, bluesy edge, and a vocal that sounds like it’s been through something. This is survival music—loud enough for the stage, honest enough for the highway.",
    lyricExcerpt:
      "I've still got some fight...\nStill got that flame...",
    audioPath: "/audio/still-got-some-fight.mp3",
    artworkPath: "/images/songs/still-got-some-fight.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Up-tempo · Southern Rock edge",
    copyright: COPYRIGHT,
  },
  {
    slug: "leave-it-better-than-you-found-it",
    title: "Leave It Better Than You Found It",
    genres: ["Country", "Americana"],
    themes: ["legacy", "character", "responsibility"],
    description:
      "A song about character and legacy—leaving people and places better than you found them.",
    story:
      "The title says the mission. This is Country and Americana with purpose: a lyric about responsibility that doesn’t preach—it invites. Strong male vocal territory with a memorable title hook.",
    lyricExcerpt:
      "You don't own this world forever...\nLeave it better than you found it...",
    audioPath: "/audio/leave-it-better-than-you-found-it.mp3",
    artworkPath: "/images/songs/leave-it-better-than-you-found-it.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Steady mid-tempo · anthemic",
    copyright: COPYRIGHT,
  },
  {
    slug: "honky-tonk-revival",
    title: "Honky Tonk Revival",
    genres: ["Country", "Southern Rock"],
    themes: ["dancing", "nightlife", "celebration", "country tradition"],
    description:
      "A celebration of the honky-tonk spirit—neon glow, wood floors, and Country tradition alive again.",
    story:
      "Built for the dance floor and the late-night crowd. Country meets Southern Rock swagger with a chorus meant to turn a room into a revival. Male vocal with attitude and joy.",
    lyricExcerpt:
      "Keep this old tradition...\nAlive tonight...",
    audioPath: "/audio/honky-tonk-revival.mp3",
    artworkPath: "/images/songs/honky-tonk-revival.png",
    availableForRecording: true,
    featured: false,
    released: true,
    vocalFormat: "Male vocal",
    feel: "Up-tempo · neon-lit Country",
    copyright: COPYRIGHT,
  },
  {
    slug: "stay-till-sunrise",
    title: "Stay Till Sunrise",
    genres: ["Country"],
    themes: ["love", "romance", "night"],
    description:
      "A warm Country love song about holding onto the night a little longer.",
    story:
      "Written for quiet hours and last-call light—intimate Country storytelling for a sincere male vocal.",
    lyricExcerpt:
      "Stay till sunrise...\nDon't let this night slip by...",
    audioPath: "/audio/stay-till-sunrise.mp3",
    artworkPath: "/images/songs/stay-till-sunrise.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Warm mid-tempo · intimate",
    copyright: COPYRIGHT,
  },
];

/**
 * Songs held for a future album / catalog expansion.
 * Not listed on /catalog, homepage, contact dropdown, or sitemap.
 */
export const archivedSongs: Song[] = [
  {
    slug: "can-i-come-along",
    title: "Can I Come Along",
    genres: ["Country", "Americana"],
    themes: ["fatherhood", "family", "growing up"],
    description:
      "A father-and-child story about time moving too fast—and wanting one more mile together.",
    story:
      "This one came from watching a kid grow up overnight. It’s Country and Americana at heart: soft acoustic bones, honest lyric, and a chorus that parents will feel in their chest.",
    lyricExcerpt:
      "Can I come along...\nBefore it's too late...",
    audioPath: "/audio/can-i-come-along.mp3",
    artworkPath: "/images/songs/can-i-come-along.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Ballad · reflective",
    copyright: COPYRIGHT,
  },
  {
    slug: "believe",
    title: "Believe",
    genres: ["Country", "Americana"],
    themes: ["faith", "hope", "endurance"],
    description:
      "A faith-centered song about holding on when you can’t yet see the other side.",
    story:
      "Written for quiet courage. Country and Americana textures carry a lyric about faith that doesn’t shout—it steadies. Suited to a sincere male vocal with room to breathe.",
    lyricExcerpt:
      "I believe...\nWhen I can't see tomorrow...",
    audioPath: "/audio/believe.mp3",
    artworkPath: "/images/songs/believe.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Mid-tempo · reverent lift",
    copyright: COPYRIGHT,
  },
  {
    slug: "home-aint-a-house",
    title: "Home Ain’t a House",
    genres: ["Country", "Americana"],
    themes: ["home", "love", "belonging", "family"],
    description:
      "A reminder that walls don’t make a home—people do.",
    story:
      "This song belongs on a kitchen table as much as a stage. It’s about belonging—the faces, the laughter, the ones who wait up. Written as a Male/Female duet for that shared truth.",
    lyricExcerpt:
      "Home is the arms...\nThat catch you when you fall...",
    audioPath: "/audio/home-aint-a-house.mp3",
    artworkPath: "/images/songs/home-aint-a-house.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male/Female duet",
    feel: "Warm mid-tempo · heartfelt",
    copyright: COPYRIGHT,
  },
  {
    slug: "not-long-enough",
    title: "Not Long Enough",
    genres: ["Country"],
    themes: ["weekends", "dancing", "friendship", "living fully"],
    description:
      "A feel-good Country song about weekends that end too soon and living fully while you can.",
    story:
      "Written for Friday nights and last-call smiles. Upbeat Country energy with a hook that invites a crowd to sing along. Built for a male vocal that can smile through the mic.",
    lyricExcerpt:
      "Not long enough...\nNever is...",
    audioPath: "/audio/not-long-enough.mp3",
    artworkPath: "/images/songs/not-long-enough.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Upbeat · dancefloor Country",
    copyright: COPYRIGHT,
  },
  {
    slug: "just-for-fun",
    title: "Just for Fun",
    genres: ["Country", "Southern Rock"],
    themes: ["resilience", "defiance", "proving them wrong"],
    description:
      "An upbeat anthem about proving the doubters wrong.",
    story:
      "Built for swagger and persistence—Country/Southern Rock energy for a male vocal that won’t quit.",
    lyricExcerpt:
      "Every time they count me out...\nI prove 'em wrong... just for fun...",
    audioPath: "/audio/just-for-fun.mp3",
    artworkPath: "/images/songs/just-for-fun.png",
    availableForRecording: true,
    featured: false,
    released: false,
    vocalFormat: "Male vocal",
    feel: "Upbeat · defiant swagger",
    copyright: COPYRIGHT,
  },
];

export const AVAILABILITY_STATEMENT =
  "This original song is available for recording consideration by artists, bands, producers, and publishers. The recording presented here is a concept demo created to communicate the song’s lyrics, emotion, structure, and musical direction.";

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find((song) => song.slug === slug);
}

export function getFeaturedSong(): Song {
  return songs.find((song) => song.featured) ?? songs[0];
}

export function getCatalogPreview(limit = 6): Song[] {
  return songs.slice(0, limit);
}

export function getSongIndex(slug: string): number {
  return songs.findIndex((song) => song.slug === slug);
}

export function getAdjacentSongs(slug: string): {
  previous: Song | null;
  next: Song | null;
} {
  const released = songs.filter((song) => song.released);
  if (released.length === 0) return { previous: null, next: null };

  const index = released.findIndex((song) => song.slug === slug);
  if (index < 0) {
    return {
      previous: released[released.length - 1] ?? null,
      next: released[0] ?? null,
    };
  }

  return {
    previous:
      index > 0
        ? released[index - 1]
        : released[released.length - 1],
    next:
      index < released.length - 1
        ? released[index + 1]
        : released[0],
  };
}

export const ALL_GENRE_FILTERS = [
  "ALL",
  "COUNTRY",
  "SOUTHERN ROCK",
  "AMERICANA",
] as const;

export type GenreFilter = (typeof ALL_GENRE_FILTERS)[number];

export function filterSongsByGenre(filter: GenreFilter): Song[] {
  if (filter === "ALL") return songs;

  const map: Record<Exclude<GenreFilter, "ALL">, Genre[]> = {
    COUNTRY: ["Country"],
    "SOUTHERN ROCK": ["Southern Rock"],
    AMERICANA: ["Americana"],
  };

  const targets = map[filter];
  return songs.filter((song) =>
    song.genres.some((genre) => targets.includes(genre)),
  );
}
