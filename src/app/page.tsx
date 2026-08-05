import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SongArtwork } from "@/components/SongArtwork";
import { SongCard } from "@/components/SongCard";
import { getCatalogPreview, getSongBySlug } from "@/data/songs";

const HYPERFOLLOW_URL =
  "https://distrokid.com/hyperfollow/johnpat/honky-tonk-revival?ref=release";
const SPOTIFY_URL = "https://open.spotify.com/track/6Vx5Sum0oBeBrDN3d297oc";
const APPLE_MUSIC_URL =
  "https://music.apple.com/us/album/honky-tonk-revival/6793500219?i=6793500220";
const YOUTUBE_URL = "https://youtu.be/Q43MLH8LqfQ";
const AMAZON_MUSIC_URL =
  "https://music.amazon.com/albums/B0H9YP81PG?trackAsin=B0H9YL83KR";

export const metadata: Metadata = {
  title: {
    absolute: "JohnPat | Original Songs Looking for the Right Voice",
  },
  description:
    "Original Country, Southern Rock, and Americana songs available for artists, bands, producers, and publishers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JohnPat | Original Songs Looking for the Right Voice",
    description:
      "Original Country, Southern Rock, and Americana songs available for artists, bands, producers, and publishers.",
    url: "/",
  },
};

export default function HomePage() {
  const featuredRelease = getSongBySlug("honky-tonk-revival");
  const preview = getCatalogPreview(6);

  if (!featuredRelease) {
    throw new Error("Honky Tonk Revival song data is missing.");
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[calc(100vh-5.5rem)] flex-col overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-zoom absolute inset-[-4%]">
            <Image
              src="/hero-rural-dawn.png"
              alt="Cinematic rural landscape at dawn"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="absolute inset-0 z-[1] bg-black/50" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/88 via-[#1a1208]/55 to-black/25" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[var(--ink)] via-transparent to-black/40" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_40%,rgba(210,163,79,0.12),transparent_55%)]" />
        <div className="vignette" />
        <div className="film-grain" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-24 pt-10 lg:px-10">
          <div className="release-hero">
            <SongArtwork
              src={featuredRelease.artworkPath}
              alt="Official Honky Tonk Revival single artwork by JohnPat"
              size="featured"
              priority
              className="release-hero__art"
            />

            <div className="release-hero__content">
              <p className="eyebrow">Debut Single Out Now</p>
              <h1 className="font-display release-hero__title">
                HONKY TONK REVIVAL
              </h1>
              <p className="release-hero__subtitle">
                A high-energy blend of country, blues, and Southern rock built
                around honest storytelling.
              </p>

              <div className="release-hero__actions">
                <a
                  href={HYPERFOLLOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary release-hero__primary"
                >
                  🎵 Listen Everywhere
                </a>
                <div className="release-hero__platforms">
                  <a
                    href={SPOTIFY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary release-platform-button"
                  >
                    🟢 Spotify
                  </a>
                  <a
                    href={APPLE_MUSIC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary release-platform-button"
                  >
                    🍎 Apple Music
                  </a>
                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary release-platform-button"
                  >
                    ▶️ YouTube
                  </a>
                  <a
                    href={AMAZON_MUSIC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary release-platform-button"
                  >
                    🎧 Amazon Music
                  </a>
                </div>
              </div>

              <p className="demo-notice">
                JohnPat&apos;s debut single brings the songwriter identity of
                the catalog to a fully released track while the next chapter is
                already taking shape.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#featured"
          aria-label="Scroll to featured release"
          className="scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/60"
        >
          Featured Release
          <span className="scroll-indicator__line" />
        </a>
      </section>

      {/* FEATURED RELEASE */}
      <section
        id="featured"
        className="page-section border-t border-white/5 bg-[var(--ink-soft)]"
      >
        <div className="section-shell reveal">
          <p className="eyebrow">Featured Release</p>
          <h2 className="section-title">Honky Tonk Revival</h2>

          <div className="featured-song mt-10">
            <SongArtwork
              src={featuredRelease.artworkPath}
              alt="Honky Tonk Revival single cover artwork by JohnPat"
              size="featured"
              priority
              className="featured-song__art"
            />

            <div>
              <div className="song-card__tags">
                {featuredRelease.genres.map((genre) => (
                  <span key={genre} className="tag tag--genre">
                    {genre}
                  </span>
                ))}
              </div>

              <h3 className="font-display mt-4 text-3xl text-[var(--paper)] sm:text-4xl">
                {featuredRelease.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-[var(--dust)]">
                JohnPat&apos;s debut single blends country, Southern rock, and
                Americana into a high-energy honky-tonk anthem built for the
                dance floor.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#ddd2c2]">
                This first official release puts JohnPat&apos;s songwriting front
                and center in a hard-driving single made for boots, barrooms,
                and loud late nights.
              </p>

              <div className="featured-song__actions">
                <a
                  href={HYPERFOLLOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  🎵 Listen Everywhere
                </a>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary release-platform-button"
                >
                  🟢 Spotify
                </a>
                <a
                  href={APPLE_MUSIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary release-platform-button"
                >
                  🍎 Apple Music
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary release-platform-button"
                >
                  ▶️ YouTube
                </a>
                <a
                  href={AMAZON_MUSIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary release-platform-button"
                >
                  🎧 Amazon Music
                </a>
              </div>

              <p className="release-coming-soon">
                Next release coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG PREVIEW */}
      <section className="page-section bg-[var(--ink)]">
        <div className="section-shell reveal">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">The Catalog</p>
              <h2 className="section-title">
                Songs ready for
                <span className="mt-1 block text-[var(--amber)]">
                  the right voice.
                </span>
              </h2>
              <p className="section-copy">
                A preview of the catalog—original material written for Country,
                Southern Rock, and Americana artists.
              </p>
            </div>
            <Link href="/catalog" className="button-secondary shrink-0">
              View All Ten Songs
            </Link>
          </div>

          <div className="catalog-grid mt-12">
            {preview.map((song) => (
              <SongCard key={song.slug} song={song} layout="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* WRITTEN FOR THE RIGHT VOICE */}
      <section className="page-section border-y border-white/5 bg-[var(--wood)]">
        <div className="section-shell reveal">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Written for the Right Voice</p>
            <h2 className="section-title">
              Available for artists,
              <span className="mt-1 block text-[var(--amber)]">
                bands, producers &amp; publishers.
              </span>
            </h2>
            <p className="section-copy mx-auto text-center">
              These songs were written to be sung by someone else. The
              recordings on this site are concept demos—created to communicate
              lyrics, emotion, structure, and musical direction. If a song fits
              your voice or project, start a conversation.
            </p>
            <Link href="/for-artists" className="button-primary mt-10">
              Learn More for Artists
            </Link>
          </div>
        </div>
      </section>

      {/* WHY I WRITE */}
      <section className="page-section bg-[var(--ink-soft)]">
        <div className="section-shell reveal">
          <div className="notebook notebook-lines mx-auto max-w-3xl px-8 py-14 sm:px-14 sm:py-16">
            <p className="eyebrow relative z-[1]">Why I Write</p>
            <blockquote className="font-hand relative z-[1] mt-4 text-[1.85rem] leading-snug text-[var(--paper)] sm:text-[2.35rem] sm:leading-[1.35]">
              “I believe the best songs tell the truth. They remind us who we
              are, where we came from, who stood beside us, and what we hope to
              leave behind.”
            </blockquote>
            <p className="relative z-[1] mt-10 text-sm uppercase tracking-[0.28em] text-[var(--amber)]">
              — JohnPat
            </p>
            <Link
              href="/about"
              className="relative z-[1] mt-8 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--amber-bright)]"
            >
              Read More About the Writing →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="page-section relative overflow-hidden bg-[var(--ink)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(210,163,79,0.08),transparent_60%)]" />
        <div className="section-shell reveal relative text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Hear something that
            <span className="mt-1 block text-[var(--amber)]">
              fits your voice?
            </span>
          </h2>
          <p className="section-copy mx-auto">
            For recording, licensing, publishing, or collaboration inquiries,
            start a conversation.
          </p>
          <Link href="/contact" className="button-primary mt-10">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}

