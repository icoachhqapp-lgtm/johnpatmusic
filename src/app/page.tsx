import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAlbumTracks, whatItTakesAlbum } from "@/data/album";

export const metadata: Metadata = {
  title: {
    absolute: "JohnPat | What It Takes — Debut Album",
  },
  description: `${whatItTakesAlbum.title} — ${whatItTakesAlbum.subtitle} by ${whatItTakesAlbum.artist}. ${whatItTakesAlbum.releaseDateLabel}.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JohnPat | What It Takes — Debut Album",
    description: `${whatItTakesAlbum.subtitle} — ${whatItTakesAlbum.releaseDateLabel}`,
    url: "/",
    images: [
      {
        url: whatItTakesAlbum.artworkPath,
        width: 1200,
        height: 1200,
        alt: `${whatItTakesAlbum.title} album cover`,
      },
    ],
  },
};

export default function HomePage() {
  const album = whatItTakesAlbum;
  const previewTracks = getAlbumTracks().slice(0, 6);

  return (
    <main>
      {/* HERO — debut album */}
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
            <div className="release-hero__art album-home-art">
              <Image
                src={album.artworkPath}
                alt={`${album.title} album cover`}
                width={640}
                height={640}
                priority
                className="album-home-art__image"
              />
            </div>

            <div className="release-hero__content">
              <p className="eyebrow">{album.subtitle}</p>
              <h1 className="font-display release-hero__title">
                {album.title.toUpperCase()}
              </h1>
              <p className="release-hero__subtitle">
                {album.artist}
                <span className="album-home-meta">
                  {" "}
                  · {album.releaseDateLabel} · {album.trackCountLabel}
                </span>
              </p>

              <div className="release-hero__actions">
                <Link
                  href="/catalog"
                  className="button-primary release-hero__primary"
                >
                  Explore the Album
                </Link>
                <Link href="/catalog" className="button-secondary">
                  Listen to Previews
                </Link>
              </div>

              <p className="demo-notice">
                The official home of JohnPat&apos;s debut album. Browse all 15
                tracks and hear 30-second previews in The Catalog.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#album"
          aria-label="Scroll to album preview"
          className="scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/60"
        >
          The Album
          <span className="scroll-indicator__line" />
        </a>
      </section>

      {/* ALBUM PREVIEW */}
      <section
        id="album"
        className="page-section border-t border-white/5 bg-[var(--ink-soft)]"
      >
        <div className="section-shell reveal">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Debut Album</p>
              <h2 className="section-title">{album.title}</h2>
              <p className="section-copy">
                {album.artist} · {album.releaseDateLabel} ·{" "}
                {album.trackCountLabel}. A permanent catalog of original Country,
                Southern Rock, and Americana songwriting.
              </p>
            </div>
            <Link href="/catalog" className="button-secondary shrink-0">
              View Full Track List
            </Link>
          </div>

          <div className="album-home-grid mt-12">
            {previewTracks.map((track) => (
              <Link
                key={track.slug}
                href="/catalog"
                className="album-home-card"
              >
                <div className="album-home-card__art">
                  <Image
                    src={track.artworkPath}
                    alt={`Artwork for ${track.title}`}
                    width={320}
                    height={320}
                    className="album-home-card__image"
                  />
                </div>
                <p className="album-home-card__number">
                  {String(track.trackNumber).padStart(2, "0")}
                </p>
                <h3 className="album-home-card__title">{track.title}</h3>
              </Link>
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
              These songs were written to be sung by someone else. The previews
              on this site communicate lyrics, emotion, structure, and musical
              direction. If a song fits your voice or project, start a
              conversation.
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
