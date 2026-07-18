import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/CatalogBrowser";

export const metadata: Metadata = {
  title: "The Catalog",
  description:
    "10 original songs written for Country, Southern Rock, and Americana artists. Concept demos available for recording inquiry.",
};

export default function CatalogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Songwriter Catalog</p>
          <h1 className="section-title">The Catalog</h1>
          <p className="section-copy">
            10 original songs written for Country, Southern Rock, and Americana
            artists.
          </p>
          <p className="demo-notice">
            Concept demos communicate each song’s lyrics, emotion, structure,
            and musical direction. Lyrics by JohnPat.
          </p>
        </div>
      </section>

      <section className="section-shell pt-10">
        <CatalogBrowser />
      </section>
    </main>
  );
}
