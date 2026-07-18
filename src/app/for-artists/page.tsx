import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Artists",
  description:
    "Original Country, Southern Rock, and Americana songs available for artists, bands, producers, and publishers.",
};

const inquiryCategories = [
  {
    title: "Artist Recording Inquiry",
    copy: "Looking for an original song that fits your voice and story? Browse the catalog and reach out about recording consideration.",
  },
  {
    title: "Band Recording Inquiry",
    copy: "Bands seeking Country, Southern Rock, or Americana material can inquire about songs that match their sound and direction.",
  },
  {
    title: "Producer or Publisher Inquiry",
    copy: "Producers and publishers can request information about songs for projects, pitching, or development conversations.",
  },
  {
    title: "Collaboration Inquiry",
    copy: "Open to thoughtful collaboration conversations. Share the vision and the kind of song you’re looking for.",
  },
];

export default function ForArtistsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner max-w-4xl">
          <p className="eyebrow">For Artists, Bands, Producers &amp; Publishers</p>
          <h1 className="section-title">
            Songs Written for
            <span className="mt-1 block text-[var(--amber)]">
              the Right Voice
            </span>
          </h1>
          <p className="section-copy max-w-3xl">
            Every song on this site began with a story. The recordings you hear
            are concept demos created to communicate the lyrics, emotion,
            structure, and musical direction of each song.
          </p>
          <p className="section-copy max-w-3xl">
            If you are an artist, band, producer, or publisher looking for
            original Country, Southern Rock, or Americana material, use the
            catalog to find a song that fits your voice and direction.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="inquiry-grid reveal">
          {inquiryCategories.map((item) => (
            <article key={item.title} className="inquiry-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <Link
                href="/contact"
                className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[var(--amber)]"
              >
                Start Inquiry →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-3xl border border-[rgba(210,163,79,0.25)] bg-[var(--wood-lit)] p-8 sm:p-10">
          <p className="eyebrow">Before You Record</p>
          <ul className="space-y-4 text-lg leading-8 text-[var(--dust)]">
            <li>Lyrics are written by JohnPat.</li>
            <li>
              The presented recordings are concept demos intended to demonstrate
              each song—not finished masters for unrestricted commercial use.
            </li>
            <li>
              Interested parties should contact JohnPat before recording,
              releasing, distributing, licensing, adapting, or commercially
              using a song.
            </li>
            <li>
              Terms are discussed individually based on the project and parties
              involved.
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/catalog" className="button-primary">
              Explore the Catalog
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact JohnPat
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
