"use client";

import { useMemo, useState } from "react";
import { getSongBySlug, songs } from "@/data/songs";

const INQUIRY_TYPES = [
  "Recording Inquiry",
  "Licensing Inquiry",
  "Producer or Publisher Inquiry",
  "Collaboration",
  "General Question",
] as const;

interface ContactFormProps {
  initialSongSlug?: string;
}

export function ContactForm({ initialSongSlug }: ContactFormProps) {
  const initialSong = initialSongSlug
    ? getSongBySlug(initialSongSlug)?.title ?? ""
    : "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [inquiryType, setInquiryType] =
    useState<(typeof INQUIRY_TYPES)[number]>("Recording Inquiry");
  const [songInterest, setSongInterest] = useState(initialSong);
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `JohnPat Inquiry — ${inquiryType}${songInterest ? ` — ${songInterest}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Artist / Band: ${company}`,
        `Inquiry Type: ${inquiryType}`,
        `Song of Interest: ${songInterest || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );
    return `mailto:songs@johnpatmusic.com?subject=${subject}&body=${body}`;
  }, [name, email, company, inquiryType, songInterest, message]);

  return (
    <form
      className="contact-form"
      // FORM IMPLEMENTATION POINT:
      // Replace this mailto fallback with a real form service / API route when available.
      // Current behavior opens the visitor's email client with a prefilled inquiry.
      action={mailtoHref}
      method="get"
      onSubmit={(event) => {
        // Ensure the latest field values are reflected in the mailto URL
        event.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="contact-form__grid">
        <label className="field">
          <span>Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="field field--full">
          <span>Company or Artist / Band Name</span>
          <input
            name="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Inquiry Type</span>
          <select
            name="inquiryType"
            value={inquiryType}
            onChange={(event) =>
              setInquiryType(
                event.target.value as (typeof INQUIRY_TYPES)[number],
              )
            }
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Song of Interest</span>
          <select
            name="song"
            value={songInterest}
            onChange={(event) => setSongInterest(event.target.value)}
          >
            <option value="">Select a song (optional)</option>
            {songs.map((song) => (
              <option key={song.slug} value={song.title}>
                {song.title}
              </option>
            ))}
          </select>
        </label>

        <label className="field field--full">
          <span>Message</span>
          <textarea
            required
            name="message"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
      </div>

      <p className="contact-form__note">
        This form opens your email client to send the inquiry. No message is
        stored on this website until a form service is connected.
      </p>

      <button type="submit" className="button-primary">
        Send Inquiry
      </button>
    </form>
  );
}
