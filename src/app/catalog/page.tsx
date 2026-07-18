import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/CatalogBrowser";

export const metadata: Metadata = {
  title: "The Catalog",
  description:
    "10 original songs written for Country, Southern Rock, and Americana artists. Concept demos available for recording inquiry.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: "The Catalog | JohnPat",
    description:
      "10 original songs written for Country, Southern Rock, and Americana artists.",
    url: "/catalog",
  },
};

export default function CatalogPage() {
  return (
    <main>
      <section className="page-hero catalog-hero">
        <div className="page-hero__inner">
          <p className="eyebrow">Songwriter Portfolio</p>
          <h1 className="section-title">The Catalog</h1>
          <p className="section-copy">
            10 original songs written for Country, Southern Rock, and Americana
            artists.
          </p>
          <p className="demo-notice">
            Original lyrics by JohnPat. Concept recordings demonstrate each
            song’s emotion, structure, and musical direction—available for
            recording consideration.
          </p>
        </div>
      </section>

      <section className="section-shell catalog-shell">
        <CatalogBrowser />
      </section>
    </main>
  );
}
