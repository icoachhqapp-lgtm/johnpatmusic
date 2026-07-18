export type Genre = "Country" | "Southern Rock" | "Americana" | "Blues Rock";

export type VocalFormat =
  | "Male vocal"
  | "Male/Female duet";

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
  duration: string;
  availableForRecording: boolean;
  featured: boolean;
  vocalFormat: VocalFormat;
  feel: string;
}

export const songs: Song[] = [
  {
    slug: "what-it-takes",
    title: "What It Takes",
    genres: ["Country", "Southern Rock"],
    themes: ["hard work", "resilience", "responsibility", "faith"],
    description:
      "A driving anthem about showing up when it counts—about the grit, faith, and responsibility it takes to keep going when quitting would be easier.",
    story:
      "Written for the moments when life asks more of you than you think you have. This song sits at the crossroads of Country storytelling and Southern Rock muscle—built for a strong male vocal that can carry both swagger and sincerity.",
    lyricExcerpt:
      "You give what it takes when the road gets long…\nyou give what it takes when your back ain’t strong…",
    audioPath: "/audio/what-it-takes.wav",
    artworkPath: "/album-cover.png",
    duration: "3:42",
    availableForRecording: true,
    featured: true,
    vocalFormat: "Male vocal",
    feel: "Mid-tempo drive · anthemic",
  },
  {
    slug: "she-only-looks-at-me-that-way",
    title: "She Only Looks at Me That Way",
    genres: ["Country"],
    themes: ["love", "devotion", "relationship"],
    description:
      "A tender Country love song about the look that belongs to one person alone—quiet devotion wrapped in a memorable melody.",
    story:
      "Some love songs shout. This one watches. It’s about that rare glance across a room that says everything words can’t. Written as a Male/Female duet so two voices can carry the conversation.",
    lyricExcerpt:
      "She only looks at me that way…\nlike the whole world fell away…",
    audioPath: "/audio/she-only-looks-at-me-that-way.wav",
    artworkPath: "/album-cover.png",
    duration: "3:28",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male/Female duet",
    feel: "Warm mid-tempo · intimate",
  },
  {
    slug: "can-i-come-along",
    title: "Can I Come Along",
    genres: ["Country", "Americana"],
    themes: ["fatherhood", "family", "growing up"],
    description:
      "A father-and-child story about time moving too fast—and the simple wish to share one more mile of the journey.",
    story:
      "This one came from watching a kid grow up overnight. It’s Country and Americana at heart: soft acoustic bones, honest lyric, and a chorus that parents will feel in their chest.",
    lyricExcerpt:
      "Can I come along… just a little while longer…\nbefore the road gets wider and you’re stronger…",
    audioPath: "/audio/can-i-come-along.wav",
    artworkPath: "/album-cover.png",
    duration: "3:55",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Ballad · reflective",
  },
  {
    slug: "back-when-time-moved-slow",
    title: "Back When Time Moved Slow",
    genres: ["Country", "Americana"],
    themes: ["memories", "family", "friendship", "simpler times"],
    description:
      "A nostalgic look back at the days when evenings lasted longer and people stayed awhile—memory, friendship, and home.",
    story:
      "Written like a porch conversation at dusk. Two voices trade verses about the years that shaped them—perfect for a Male/Female duet that feels lived-in and warm.",
    lyricExcerpt:
      "Back when time moved slow…\nand nobody was in a hurry to go…",
    audioPath: "/audio/back-when-time-moved-slow.wav",
    artworkPath: "/album-cover.png",
    duration: "4:02",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male/Female duet",
    feel: "Easy mid-tempo · nostalgic",
  },
  {
    slug: "still-got-some-fight",
    title: "Still Got Some Fight",
    genres: ["Southern Rock", "Blues Rock"],
    themes: ["survival", "perseverance", "grit"],
    description:
      "A Southern Rock / Blues Rock stomper for anyone who’s been knocked down and refuses to stay there.",
    story:
      "Built for grit. Thick guitars, bluesy edge, and a vocal that sounds like it’s been through something. This is survival music—loud enough for the stage, honest enough for the highway.",
    lyricExcerpt:
      "I still got some fight left in me…\nain’t down yet and I don’t aim to be…",
    audioPath: "/audio/still-got-some-fight.wav",
    artworkPath: "/album-cover.png",
    duration: "3:36",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Up-tempo · Southern Rock edge",
  },
  {
    slug: "believe",
    title: "Believe",
    genres: ["Country", "Americana"],
    themes: ["faith", "hope", "endurance"],
    description:
      "A faith-centered song about holding on when you can’t yet see the other side—hope set to melody.",
    story:
      "Written for quiet courage. Country and Americana textures carry a lyric about faith that doesn’t shout—it steadies. Suited to a sincere male vocal with room to breathe.",
    lyricExcerpt:
      "Believe when the night won’t break…\nbelieve in the promise you can’t yet take…",
    audioPath: "/audio/believe.wav",
    artworkPath: "/album-cover.png",
    duration: "3:48",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Mid-tempo · reverent lift",
  },
  {
    slug: "home-aint-a-house",
    title: "Home Ain’t a House",
    genres: ["Country", "Americana"],
    themes: ["home", "love", "belonging", "family"],
    description:
      "A reminder that walls don’t make a home—people do. Warm Country/Americana built for two voices.",
    story:
      "This song belongs on a kitchen table as much as a stage. It’s about belonging—the faces, the laughter, the ones who wait up. Written as a Male/Female duet for that shared truth.",
    lyricExcerpt:
      "Home ain’t a house… it ain’t brick and wood…\nit’s the ones who love you like nobody could…",
    audioPath: "/audio/home-aint-a-house.wav",
    artworkPath: "/album-cover.png",
    duration: "3:40",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male/Female duet",
    feel: "Warm mid-tempo · heartfelt",
  },
  {
    slug: "not-long-enough",
    title: "Not Long Enough",
    genres: ["Country"],
    themes: ["weekends", "dancing", "friendship", "living fully"],
    description:
      "A feel-good Country song about weekends that end too soon—dancing, friendship, and living fully while you can.",
    story:
      "Written for Friday nights and last-call smiles. Upbeat Country energy with a hook that invites a crowd to sing along. Built for a male vocal that can smile through the mic.",
    lyricExcerpt:
      "These nights ain’t long enough…\nwhen the band’s still playing and the road’s still rough…",
    audioPath: "/audio/not-long-enough.wav",
    artworkPath: "/album-cover.png",
    duration: "3:22",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Upbeat · dancefloor Country",
  },
  {
    slug: "leave-it-better-than-you-found-it",
    title: "Leave It Better Than You Found It",
    genres: ["Country", "Americana"],
    themes: ["legacy", "character", "responsibility"],
    description:
      "A song about character and legacy—about the quiet choice to leave people, places, and promises better than you found them.",
    story:
      "The title says the mission. This is Country and Americana with purpose: a lyric about responsibility that doesn’t preach—it invites. Strong male vocal territory with a memorable title hook.",
    lyricExcerpt:
      "Leave it better than you found it…\nleave a little light where the dark surrounded it…",
    audioPath: "/audio/leave-it-better-than-you-found-it.wav",
    artworkPath: "/album-cover.png",
    duration: "4:05",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Steady mid-tempo · anthemic",
  },
  {
    slug: "honky-tonk-revival",
    title: "Honky Tonk Revival",
    genres: ["Country", "Southern Rock"],
    themes: ["dancing", "nightlife", "celebration", "country tradition"],
    description:
      "A celebration of the honky-tonk spirit—boots on wood floors, neon glow, and Country tradition coming alive again.",
    story:
      "Built for the dance floor and the late-night crowd. Country meets Southern Rock swagger with a chorus meant to turn a room into a revival. Male vocal with attitude and joy.",
    lyricExcerpt:
      "It’s a honky tonk revival…\nbring your broken heart and your survival…",
    audioPath: "/audio/honky-tonk-revival.wav",
    artworkPath: "/album-cover.png",
    duration: "3:30",
    availableForRecording: true,
    featured: false,
    vocalFormat: "Male vocal",
    feel: "Up-tempo · neon-lit Country",
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
