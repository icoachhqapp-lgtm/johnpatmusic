import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FullAudioPlayer } from "@/components/FullAudioPlayer";
import {
  AVAILABILITY_STATEMENT,
  getSongBySlug,
  songs,
} from "@/data/songs";

interface SongPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({
  params,
}: SongPageProps): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) return { title: "Song Not Found" };

  return {
    title: song.title,
    description: song.description,
    alternates: {
      canonical: `/songs/${song.slug}`,
    },
    openGraph: {
      title: `${song.title} | JohnPat`,
      description: song.description,
      url: `/songs/${song.slug}`,
      type: "music.song",
      images: [
        {
          url: song.artworkPath,
          width: 1200,
          height: 1200,
          alt: `Cover artwork for ${song.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${song.title} | JohnPat`,
      description: song.description,
      images: [song.artworkPath],
    },
  };
}

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Concept Demo</p>
          <h1 className="section-title">{song.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {song.genres.map((genre) => (
              <span key={genre} className="tag tag--genre">
                {genre}
              </span>
            ))}
            {song.themes.slice(0, 3).map((theme) => (
              <span key={theme} className="tag tag--theme">
                {theme}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[#9d9080]">
            {song.vocalFormat} · {song.feel}
          </p>
        </div>
      </section>

      <section className="section-shell pt-10">
        <div className="song-detail-grid reveal">
          <div>
            <div className="overflow-hidden border border-[rgba(210,163,79,0.28)]">
              <Image
                src={song.artworkPath}
                alt={`Artwork for ${song.title}`}
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="mt-6">
              <FullAudioPlayer song={song} />
            </div>
          </div>

          <div>
            <p className="eyebrow">Story Behind the Song</p>
            <p className="text-lg leading-8 text-[var(--dust)]">{song.story}</p>

            <p className="eyebrow mt-10">Lyric Excerpt</p>
            <p className="lyric-block">{song.lyricExcerpt}</p>

            <p className="eyebrow mt-10">Song Information</p>
            <dl className="info-list">
              <div>
                <dt>Title</dt>
                <dd>{song.title}</dd>
              </div>
              <div>
                <dt>Genres</dt>
                <dd>{song.genres.join(", ")}</dd>
              </div>
              <div>
                <dt>Themes</dt>
                <dd>{song.themes.join(", ")}</dd>
              </div>
              <div>
                <dt>Vocal</dt>
                <dd>{song.vocalFormat}</dd>
              </div>
              <div>
                <dt>Feel</dt>
                <dd>{song.feel}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{song.duration}</dd>
              </div>
            </dl>

            <p className="eyebrow mt-10">Availability</p>
            <p className="text-lg leading-8 text-[var(--dust)]">
              {AVAILABILITY_STATEMENT}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`/contact?song=${song.slug}`}
                className="button-primary"
              >
                I’d Like to Record This Song
              </Link>
              <Link
                href={`/contact?song=${song.slug}`}
                className="button-secondary"
              >
                Ask About This Song
              </Link>
              <Link href="/catalog" className="button-secondary">
                Back to Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
