"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { getSongBySlug, songs } from "@/data/songs";

const INQUIRY_TYPES = [
  "Recording Inquiry",
  "Licensing Inquiry",
  "Producer or Publisher Inquiry",
  "Collaboration",
  "General Question",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

const SUCCESS_MESSAGE =
  "Inquiry sent successfully. Thank you for reaching out. I’ll review your message and respond as soon as possible.";

const ERROR_MESSAGE =
  "Your inquiry could not be sent. Please try again or email songs@johnpatmusic.com.";

interface ContactFormProps {
  initialSongSlug?: string;
  defaultInquiryType?: InquiryType;
}

export function ContactForm({
  initialSongSlug,
  defaultInquiryType = "Recording Inquiry",
}: ContactFormProps) {
  const initialSong = initialSongSlug
    ? (getSongBySlug(initialSongSlug)?.title ?? "")
    : "";

  const formId = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyArtistBand, setCompanyArtistBand] = useState("");
  const [inquiryType, setInquiryType] =
    useState<InquiryType>(defaultInquiryType);
  const [songTitle, setSongTitle] = useState(initialSong);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    setSongTitle(initialSong);
  }, [initialSong]);

  useEffect(() => {
    if (status === "idle" || !statusRef.current) return;
    statusRef.current.focus();
  }, [status]);

  function resetFields() {
    setName("");
    setEmail("");
    setCompanyArtistBand("");
    setInquiryType(defaultInquiryType);
    setSongTitle(initialSong);
    setMessage("");
    setHoneypot("");
  }

  function dismissStatus() {
    setStatus("idle");
    setStatusMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || submittingRef.current) return;

    submittingRef.current = true;
    setSending(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          companyArtistBand,
          inquiryType,
          songTitle,
          message,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          honeypot,
        }),
      });

      let payload: { success?: boolean; error?: string } = {};
      try {
        payload = (await response.json()) as {
          success?: boolean;
          error?: string;
        };
      } catch {
        payload = {};
      }

      if (!response.ok || !payload.success) {
        setStatus("error");
        setStatusMessage(payload.error || ERROR_MESSAGE);
        return;
      }

      resetFields();
      setStatus("success");
      setStatusMessage(SUCCESS_MESSAGE);
    } catch {
      setStatus("error");
      setStatusMessage(ERROR_MESSAGE);
    } finally {
      setSending(false);
      submittingRef.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {status === "success" ? (
        <div
          className="contact-form__modal"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) dismissStatus();
          }}
        >
          <div
            ref={statusRef}
            className="contact-form__modal-panel"
            role="status"
            tabIndex={-1}
            aria-live="polite"
            aria-labelledby={`${formId}-success-title`}
            id={`${formId}-status`}
          >
            <p className="eyebrow" id={`${formId}-success-title`}>
              Inquiry Received
            </p>
            <p className="contact-form__modal-copy">{statusMessage}</p>
            <button
              type="button"
              className="button-primary"
              onClick={dismissStatus}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          ref={statusRef}
          className="contact-form__status contact-form__status--error"
          role="alert"
          tabIndex={-1}
          aria-live="assertive"
          id={`${formId}-status`}
        >
          <p>{statusMessage}</p>
          <p className="contact-form__status-hint">
            Your entered information has been kept so you can try again.
          </p>
        </div>
      ) : null}

      {/* Honeypot — hidden from real users */}
      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="contact-form__grid">
        <label className="field">
          <span>Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            disabled={sending}
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
            disabled={sending}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="field field--full">
          <span>Company or Artist / Band Name</span>
          <input
            name="companyArtistBand"
            value={companyArtistBand}
            disabled={sending}
            onChange={(event) => setCompanyArtistBand(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Inquiry Type</span>
          <select
            name="inquiryType"
            value={inquiryType}
            disabled={sending}
            onChange={(event) =>
              setInquiryType(event.target.value as InquiryType)
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
            name="songTitle"
            value={songTitle}
            disabled={sending}
            onChange={(event) => setSongTitle(event.target.value)}
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
            disabled={sending}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
      </div>

      <p className="contact-form__note">
        Inquiries are delivered to songs@johnpatmusic.com. Choose the inquiry
        type that best matches your request—recording, licensing, publishing, or
        collaboration.
      </p>

      <button
        type="submit"
        className="button-primary"
        disabled={sending}
        aria-busy={sending}
      >
        {sending ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
