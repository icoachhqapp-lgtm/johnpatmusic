import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DemoPlayButton } from "@/components/DemoPlayButton";
import { SongArtwork } from "@/components/SongArtwork";
import { SongCard } from "@/components/SongCard";
import { getCatalogPreview, getFeaturedSong } from "@/data/songs";

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
  const featured = getFeaturedSong();
  const preview = getCatalogPreview(6);

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
          <div className="max-w-3xl">
            <p className="font-display text-3xl tracking-[0.12em] text-[var(--paper)] sm:text-4xl">
              JOHNPAT
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--amber)] sm:text-sm">
              Country · Southern Rock · Americana Songwriter
            </p>

            <h1 className="font-display mt-8 max-w-3xl text-[2.6rem] leading-[1.08] text-[var(--paper)] sm:text-6xl lg:text-[4.5rem]">
              ORIGINAL SONGS
              <span className="mt-2 block text-[var(--amber-bright)]">
                LOOKING FOR THE RIGHT VOICE
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ddd2c2] sm:text-xl">
              Stories of faith, family, hard work, heartbreak, good times, and
              the legacy we leave behind—written for artists who want something
              real to sing.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/catalog" className="button-primary">
                Explore the Catalog
              </Link>
              <Link href="/for-artists" className="button-secondary">
                For Artists
              </Link>
            </div>

            <p className="demo-notice">
              Original lyrics written by JohnPat. Concept recordings created to
              demonstrate the songs’ emotion, structure, and musical direction.
            </p>
          </div>
        </div>

        <a
          href="#featured"
          aria-label="Scroll to featured song"
          className="scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/60"
        >
          Featured Song
          <span className="scroll-indicator__line" />
        </a>
      </section>

      {/* FEATURED SONG */}
      <section
        id="featured"
        className="page-section border-t border-white/5 bg-[var(--ink-soft)]"
      >
        <div className="section-shell reveal">
          <p className="eyebrow">Featured Song</p>
          <h2 className="section-title">What It Takes</h2>

          <div className="featured-song mt-10">
            <SongArtwork
              src={featured.artworkPath}
              alt={`Artwork for ${featured.title}`}
              size="featured"
              priority
              className="featured-song__art"
            />

            <div>
              <div className="song-card__tags">
                {featured.genres.map((genre) => (
                  <span key={genre} className="tag tag--genre">
                    {genre}
                  </span>
                ))}
              </div>

              <h3 className="font-display mt-4 text-3xl text-[var(--paper)] sm:text-4xl">
                {featured.title}
              </h3>

              <div className="song-card__tags mt-4">
                {featured.themes.slice(0, 4).map((theme) => (
                  <span key={theme} className="tag tag--theme">
                    {theme}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-lg leading-8 text-[var(--dust)]">
                {featured.description}
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#9d9080]">
                {featured.vocalFormat} · {featured.feel}
              </p>

              <div className="featured-song__actions">
                <DemoPlayButton song={featured} variant="primary" />
                <Link
                  href={`/songs/${featured.slug}`}
                  className="button-secondary"
                >
                  The Story
                </Link>
                <Link
                  href={`/contact?song=${featured.slug}`}
                  className="button-primary"
                >
                  Recording Inquiry
                </Link>
              </div>
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
