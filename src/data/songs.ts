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
  vocalFormat: VocalFormat;
  feel: string;
  copyright: string;
}

const COPYRIGHT = "© 2026 JohnPat Music. All rights reserved.";

export const songs: Song[] = [
  {
    slug: "what-it-takes",
    title: "What It Takes",
    genres: ["Country", "Southern Rock"],
    themes: ["hard work", "resilience", "responsibility", "faith"],
    description:
      "A driving anthem about grit, faith, and the responsibility it takes to keep going.",
    story:
      "Written for the moments when life asks more of you than you think you have. This song sits at the crossroads of Country storytelling and Southern Rock muscle—built for a strong male vocal that can carry both swagger and sincerity.",
    lyricExcerpt:
      "You give what it takes when the road gets long…\nyou give what it takes when your back ain’t strong…",
    audioPath: "/audio/what-it-takes.mp3",
    artworkPath: "/images/songs/what-it-takes.png",
    availableForRecording: true,
    featured: true,
    vocalFormat: "Male vocal",
    feel: "Mid-tempo drive · anthemic",
    copyright: COPYRIGHT,
  },
  {
    slug: "she-only-looks-at-me-that-way",
    title: "She Only Looks at Me That Way",
    genres: ["Country"],
    themes: ["love", "devotion", "relationship"],
    description:
      "A tender Country love song about the look that belongs to one person alone.",
    story:
      "Some love songs shout. This one watches. It’s about that rare glance across a room that says everything words can’t. Written as a Male/Female duet so two voices can carry the conversation.",
    lyricExcerpt:
      "She only looks at me that way…\nlike the whole world fell away…",
    audioPath: "/audio/she-only-looks-at-me-that-way.mp3",
    artworkPath: "/images/songs/she-only-looks-at-me-that-way.png",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male/Female duet",
    feel: "Warm mid-tempo · intimate",
    copyright: COPYRIGHT,
  },
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
      "Can I come along… just a little while longer…\nbefore the road gets wider and you’re stronger…",
    audioPath: "/audio/can-i-come-along.mp3",
    artworkPath: "/images/songs/can-i-come-along.png",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Ballad · reflective",
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
      "Back when time moved slow…\nand nobody was in a hurry to go…",
    audioPath: "/audio/back-when-time-moved-slow.mp3",
    artworkPath: "/images/songs/back-when-time-moved-slow.png",
    availableForRecording: true,
    featured: false,
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
      "I still got some fight left in me…\nain’t down yet and I don’t aim to be…",
    audioPath: "/audio/still-got-some-fight.mp3",
    artworkPath: "/images/songs/still-got-some-fight.png",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Up-tempo · Southern Rock edge",
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
      "Believe when the night won’t break…\nbelieve in the promise you can’t yet take…",
    audioPath: "/audio/believe.mp3",
    artworkPath: "/images/songs/believe.png",
    availableForRecording: true,
    featured: false,
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
      "Home ain’t a house… it ain’t brick and wood…\nit’s the ones who love you like nobody could…",
    audioPath: "/audio/home-aint-a-house.mp3",
    artworkPath: "/images/songs/home-aint-a-house.png",
    availableForRecording: true,
    featured: false,
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
      "These nights ain’t long enough…\nwhen the band’s still playing and the road’s still rough…",
    audioPath: "/audio/not-long-enough.mp3",
    artworkPath: "/images/songs/not-long-enough.png",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Upbeat · dancefloor Country",
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
      "Leave it better than you found it…\nleave a little light where the dark surrounded it…",
    audioPath: "/audio/leave-it-better-than-you-found-it.mp3",
    artworkPath: "/images/songs/leave-it-better-than-you-found-it.png",
    availableForRecording: true,
    featured: false,
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
      "It’s a honky tonk revival…\nbring your broken heart and your survival…",
    audioPath: "/audio/honky-tonk-revival.mp3",
    artworkPath: "/images/songs/honky-tonk-revival.png",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Up-tempo · neon-lit Country",
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
  const index = getSongIndex(slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? songs[index - 1] : songs[songs.length - 1],
    next: index < songs.length - 1 ? songs[index + 1] : songs[0],
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
