import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { getSongBySlug } from "@/data/songs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Recording, licensing, publishing, and collaboration inquiries for JohnPat original songs.",
};

interface ContactPageProps {
  searchParams: Promise<{ song?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const songSlug = params.song;
  const matched = songSlug ? getSongBySlug(songSlug) : undefined;

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner max-w-3xl">
          <p className="eyebrow">Inquiries</p>
          <h1 className="section-title">Contact</h1>
          <p className="section-copy">
            For recording, licensing, publishing, and collaboration inquiries.
            Share a little about your project and the song you’re interested in.
          </p>
          {matched ? (
            <p className="demo-notice">
              Prefilling song of interest: <strong>{matched.title}</strong>
            </p>
          ) : null}
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="mx-auto max-w-3xl">
          <ContactForm initialSongSlug={matched?.slug} />
        </div>
      </section>
    </main>
  );
}
