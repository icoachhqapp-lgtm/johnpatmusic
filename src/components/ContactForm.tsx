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
  /** Optional default inquiry type for deep links from other pages */
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
  const [company, setCompany] = useState("");
  const [inquiryType, setInquiryType] =
    useState<InquiryType>(defaultInquiryType);
  const [songInterest, setSongInterest] = useState(initialSong);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    setSongInterest(initialSong);
  }, [initialSong]);

  useEffect(() => {
    if (status === "idle" || !statusRef.current) return;
    statusRef.current.focus();
  }, [status]);

  function resetFields() {
    setName("");
    setEmail("");
    setCompany("");
    setInquiryType(defaultInquiryType);
    setSongInterest(initialSong);
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || submittingRef.current) return;

    submittingRef.current = true;
    setSending(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          inquiryType,
          songInterest,
          message,
        }),
      });

      let payload: { ok?: boolean; error?: string } = {};
      try {
        payload = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        payload = {};
      }

      if (!response.ok || !payload.ok) {
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
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      {status !== "idle" ? (
        <div
          ref={statusRef}
          className={
            status === "success"
              ? "contact-form__status contact-form__status--success"
              : "contact-form__status contact-form__status--error"
          }
          role={status === "success" ? "status" : "alert"}
          tabIndex={-1}
          aria-live={status === "success" ? "polite" : "assertive"}
          id={`${formId}-status`}
        >
          <p>{statusMessage}</p>
          {status === "success" ? (
            <button
              type="button"
              className="contact-form__status-dismiss"
              onClick={() => {
                setStatus("idle");
                setStatusMessage("");
              }}
            >
              Dismiss
            </button>
          ) : (
            <p className="contact-form__status-hint">
              Your entered information has been kept so you can try again.
            </p>
          )}
        </div>
      ) : null}

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
            name="company"
            value={company}
            disabled={sending}
            onChange={(event) => setCompany(event.target.value)}
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
            name="song"
            value={songInterest}
            disabled={sending}
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
            disabled={sending}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
      </div>

      <p className="contact-form__note">
        Inquiries are sent to songs@johnpatmusic.com. Choose the inquiry type
        that best matches your request—recording, licensing, publishing, or
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
