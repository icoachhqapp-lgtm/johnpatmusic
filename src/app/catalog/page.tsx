import type { Metadata } from "next";
import { AlbumCatalog } from "@/components/AlbumCatalog";
import { whatItTakesAlbum } from "@/data/album";

export const metadata: Metadata = {
  title: "The Catalog",
  description: `${whatItTakesAlbum.title} — ${whatItTakesAlbum.subtitle} by ${whatItTakesAlbum.artist}. ${whatItTakesAlbum.releaseDateLabel}. 30-second previews.`,
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: `${whatItTakesAlbum.title} | JohnPat`,
    description: `${whatItTakesAlbum.subtitle} — ${whatItTakesAlbum.releaseDateLabel}`,
    url: "/catalog",
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

export default function CatalogPage() {
  return (
    <main>
      <section className="page-hero catalog-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Music</p>
          <h1 className="section-title">The Catalog</h1>
          <p className="section-copy">
            {whatItTakesAlbum.title} — the debut album from{" "}
            {whatItTakesAlbum.artist}.
          </p>
          <p className="demo-notice">
            Debut Album — {whatItTakesAlbum.releaseDateLabel}. Listen to
            30-second previews below. Full recordings are not available on this
            site.
          </p>
        </div>
      </section>

      <section className="section-shell catalog-shell">
        <AlbumCatalog />
      </section>
    </main>
  );
}
