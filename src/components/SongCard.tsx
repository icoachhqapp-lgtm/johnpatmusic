import Image from "next/image";
import Link from "next/link";
import { DemoPlayButton } from "@/components/DemoPlayButton";
import type { Song } from "@/data/songs";

interface SongCardProps {
  song: Song;
  featured?: boolean;
  layout?: "list" | "grid";
}

export function SongCard({
  song,
  featured = false,
  layout = "list",
}: SongCardProps) {
  return (
    <article
      className={`catalog-entry catalog-entry--${layout} ${featured ? "catalog-entry--featured" : ""}`}
    >
      <div className="catalog-entry__art">
        <Image
          src={song.artworkPath}
          alt={`Cover artwork for ${song.title}`}
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
        <div className="catalog-entry__play-overlay">
          <DemoPlayButton song={song} variant="overlay" />
        </div>
      </div>

      <div className="catalog-entry__body">
        <p className="catalog-entry__genre">{song.genres.join(" · ")}</p>

        <h3 className="font-display catalog-entry__title">
          <Link href={`/songs/${song.slug}`}>{song.title}</Link>
        </h3>

        <p className="catalog-entry__description">{song.description}</p>

        <p className="catalog-entry__copyright">{song.copyright}</p>

        <div className="catalog-entry__actions">
          <DemoPlayButton song={song} variant="card" />
          <Link
            href={`/songs/${song.slug}`}
            className="button-secondary button-compact"
          >
            View Song
          </Link>
          <Link
            href={`/contact?song=${song.slug}`}
            className="button-primary button-compact"
          >
            Recording Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
