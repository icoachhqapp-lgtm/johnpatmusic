import Image from "next/image";
import Link from "next/link";
import { DemoPlayButton } from "@/components/DemoPlayButton";
import type { Song } from "@/data/songs";

interface SongCardProps {
  song: Song;
  featured?: boolean;
}

export function SongCard({ song, featured = false }: SongCardProps) {
  const themeLabels = song.themes.slice(0, 3);

  return (
    <article className={`song-card ${featured ? "song-card--featured" : ""}`}>
      <div className="song-card__art">
        <Image
          src={song.artworkPath}
          alt={`Artwork for ${song.title}`}
          width={640}
          height={640}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="song-card__body">
        <div className="song-card__tags">
          {song.genres.map((genre) => (
            <span key={genre} className="tag tag--genre">
              {genre}
            </span>
          ))}
        </div>

        <h3 className="font-display song-card__title">
          <Link href={`/songs/${song.slug}`}>{song.title}</Link>
        </h3>

        <div className="song-card__tags">
          {themeLabels.map((theme) => (
            <span key={theme} className="tag tag--theme">
              {theme}
            </span>
          ))}
        </div>

        <p className="song-card__vocal">{song.vocalFormat}</p>

        <div className="song-card__actions">
          <DemoPlayButton song={song} variant="card" />
          <Link href={`/songs/${song.slug}`} className="button-secondary button-compact">
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
