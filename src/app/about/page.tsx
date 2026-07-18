import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "JohnPat is a Country, Southern Rock, and Americana songwriter writing original songs for the right voice.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | JohnPat",
    description:
      "JohnPat is a Country, Southern Rock, and Americana songwriter writing original songs for the right voice.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner max-w-3xl">
          <p className="font-display text-3xl tracking-[0.12em] text-[var(--paper)] sm:text-4xl">
            JOHNPAT
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--amber)]">
            Songwriter
          </p>
          <h1 className="section-title mt-8">
            Songs that tell
            <span className="mt-1 block text-[var(--amber)]">the truth.</span>
          </h1>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-3xl reveal">
          <div className="notebook notebook-lines px-8 py-14 sm:px-14 sm:py-16">
            <blockquote className="font-hand relative z-[1] text-[1.85rem] leading-snug text-[var(--paper)] sm:text-[2.35rem] sm:leading-[1.35]">
              “I believe the best songs tell the truth. They make us remember.
              They put words to things people feel but cannot always say. I
              write about faith, family, hard work, heartbreak, good times, and
              the legacy we leave behind.”
            </blockquote>
          </div>

          <div className="mt-12 space-y-6 text-lg leading-8 text-[var(--dust)]">
            <p>
              JohnPat writes original Country, Southern Rock, and Americana
              songs—material shaped by real life and written for artists who
              want something honest to sing.
            </p>
            <p>
              This site is a songwriter catalog, not a touring-artist page. The
              recordings you hear are concept demos created to communicate each
              song’s lyrics, emotion, structure, and musical direction.
            </p>
            <p>
              The catalog spans quiet ballads and road-worn anthems, love songs
              and legacy songs, porch-light Americana and neon-lit Southern
              Rock. Every track starts with a story. Every story is looking for
              the right voice.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/catalog" className="button-primary">
              Explore the Catalog
            </Link>
            <Link href="/contact" className="button-secondary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
