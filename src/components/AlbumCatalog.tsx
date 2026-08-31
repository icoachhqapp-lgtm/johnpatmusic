"use client";

import Image from "next/image";
import {
  hasStreamingLinks,
  whatItTakesAlbum,
  type AlbumStreamingLinks,
} from "@/data/album";
import { AlbumPreviewProvider } from "@/components/AlbumPreviewProvider";
import { AlbumTrackRow } from "@/components/AlbumTrackRow";

function StreamingLinks({ links }: { links: AlbumStreamingLinks }) {
  const items: { label: string; href: string }[] = [];
  if (links.spotify) items.push({ label: "Spotify", href: links.spotify });
  if (links.appleMusic)
    items.push({ label: "Apple Music", href: links.appleMusic });
  if (links.youtubeMusic)
    items.push({ label: "YouTube Music", href: links.youtubeMusic });
  if (links.amazonMusic)
    items.push({ label: "Amazon Music", href: links.amazonMusic });
  if (links.other) {
    for (const entry of links.other) {
      items.push({ label: entry.label, href: entry.url });
    }
  }

  if (items.length === 0) return null;

  return (
    <div className="album-streaming">
      <p className="album-streaming__label">Listen</p>
      <div className="album-streaming__links">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="album-streaming__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function AlbumCatalog() {
  const album = whatItTakesAlbum;
  const showStreaming =
    album.isReleased && hasStreamingLinks(album.streamingLinks);

  return (
    <AlbumPreviewProvider>
      <section className="album-catalog">
        <div className="album-hero">
          <div className="album-hero__art">
            <Image
              src={album.artworkPath}
              alt={`${album.title} album cover`}
              width={640}
              height={640}
              priority
              className="album-hero__art-image"
            />
          </div>

          <div className="album-hero__copy">
            <p className="eyebrow">{album.subtitle}</p>
            <h2 className="album-hero__title">{album.title}</h2>
            <p className="album-hero__artist">{album.artist}</p>
            <p className="album-hero__release">{album.releaseDateLabel}</p>
            <p className="album-hero__meta">{album.trackCountLabel}</p>
            <p className="album-hero__note">
              30-second previews only. Full songs are not available to stream or
              download on this site.
            </p>

            {showStreaming ? (
              <StreamingLinks links={album.streamingLinks} />
            ) : null}
          </div>
        </div>

        <div className="album-tracklist">
          <div className="album-tracklist__header">
            <h3 className="album-tracklist__title">Track List</h3>
            <p className="album-tracklist__count">
              {album.tracks.length} tracks · Preview
            </p>
          </div>

          <ol className="album-tracklist__list">
            {album.tracks.map((entry) => (
              <li key={entry.slug} className="album-tracklist__item">
                <AlbumTrackRow track={entry} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </AlbumPreviewProvider>
  );
}
