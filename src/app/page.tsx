import Image from "next/image";

const catalogSongs = [
  {
    title: "What It Takes",
    theme: "Hard work. Responsibility. Sacrifice.",
    lyric: "you give what it takes…",
  },
  {
    title: "Still Got Some Fight",
    theme: "Resilience when life says quit.",
    lyric: "ain’t down yet…",
  },
  {
    title: "Home Ain’t a House",
    theme: "The people we love are what make a home.",
    lyric: "walls don’t make a home…",
  },
];

export default function Home() {
  return (
    <main className="bg-[var(--ink)] text-[var(--cream)]">
      {/* ——— HERO ——— */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-zoom absolute inset-[-4%]">
            <Image
              src="/hero-rural-dawn.png"
              alt="Rural landscape at dawn"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Dark black / brown cinematic overlays */}
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/88 via-[#1a1208]/55 to-black/25" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[var(--ink)] via-transparent to-black/40" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_40%,rgba(210,163,79,0.12),transparent_55%)]" />

        <div className="vignette" />
        <div className="film-grain" aria-hidden="true" />

        {/* Navigation */}
        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#home" aria-label="JohnPat home">
            <Image
              src="/johnpat-logo.png"
              alt="JohnPat"
              width={230}
              height={100}
              priority
              className="h-auto w-[150px] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:w-[180px] lg:w-[210px]"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[0.8rem] uppercase tracking-[0.22em] text-[#e8dfd1] md:flex">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#featured">
              Music
            </a>
            <a className="nav-link" href="#songs">
              Songs
            </a>
            <a className="nav-link" href="#artists">
              For Artists
            </a>
            <a className="nav-link" href="#signup">
              Stay Close
            </a>
          </nav>
        </header>

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-24 pt-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-hand mb-4 text-2xl text-[var(--amber)] sm:text-3xl">
              from the road &amp; the writing room
            </p>

            <h1 className="font-display max-w-3xl text-[2.85rem] leading-[1.08] text-[var(--paper)] sm:text-6xl lg:text-[4.75rem]">
              Every song starts{" "}
              <span className="block text-[var(--amber-bright)]">
                with a story.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ddd2c2] sm:text-xl">
              Original songs written from faith, family, hard work,
              heartbreak, and the life we leave behind.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="button-primary" href="#featured">
                Hear the Songs
              </a>
              <a className="button-secondary" href="#artists">
                Songs for Artists
              </a>
            </div>
          </div>
        </div>

        <a
          href="#featured"
          aria-label="Scroll to featured song"
          className="scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/60"
        >
          Scroll
          <span className="scroll-indicator__line" />
        </a>
      </section>

      {/* ——— 1. FEATURED SONG ——— */}
      <section
        id="featured"
        className="relative border-t border-white/5 bg-[var(--ink-soft)]"
      >
        <div className="section-shell reveal">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-6 bg-[var(--amber)]/10 blur-3xl" />
              <div className="relative overflow-hidden border border-[rgba(210,163,79,0.25)] shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
                <Image
                  src="/album-cover.png"
                  alt="Leave It Better Than You Found It album cover"
                  width={1200}
                  height={1200}
                  className="h-auto w-full scale-100 transition-transform duration-[1.8s] ease-out hover:scale-[1.04]"
                />
              </div>
            </div>

            <div>
              <p className="eyebrow">Featured Release</p>
              <h2 className="section-title">
                Leave It Better
                <span className="mt-1 block text-[var(--amber)]">
                  Than You Found It
                </span>
              </h2>
              <p className="section-copy">
                Ten original songs rooted in real life—work, faith, family,
                love, memory, and the choices that shape what we leave behind.
                Written for the stage, the highway, and the quiet hours after
                midnight.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a className="button-primary" href="#songs">
                  Hear the Album
                </a>
                <a className="button-secondary" href="#statement">
                  The Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 2. SONGWRITER STATEMENT ——— */}
      <section
        id="statement"
        className="relative overflow-hidden border-y border-white/5 bg-[var(--wood)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #d2a34f 0%, transparent 40%), radial-gradient(circle at 80% 70%, #6b4420 0%, transparent 45%)",
          }}
        />
        <div className="section-shell reveal relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Songwriter</p>
            <h2 className="section-title">
              Songs born from
              <span className="mt-1 block text-[var(--amber)]">
                the life lived.
              </span>
            </h2>
            <p className="section-copy mx-auto text-center">
              JohnPat writes country and Americana the old-fashioned way—one
              true story at a time. Faith on Sunday, dust on the boots,
              heartbreak in the rearview, and family at the center of every
              chorus. These aren’t trends. They’re rooms you’ve sat in and
              roads you’ve driven.
            </p>
            <p className="font-hand mt-10 text-3xl text-[var(--amber-bright)] sm:text-4xl">
              “Some stories deserve to be remembered.”
            </p>
          </div>
        </div>
      </section>

      {/* ——— 3. SONG CATALOG PREVIEW ——— */}
      <section id="songs" className="bg-[var(--ink)]">
        <div className="section-shell reveal">
          <div className="max-w-2xl">
            <p className="eyebrow">Song Catalog</p>
            <h2 className="section-title">
              Stories that deserve
              <span className="mt-1 block text-[var(--amber)]">a chorus.</span>
            </h2>
            <p className="section-copy">
              A glimpse into the catalog—hooks built for the radio, verses built
              for the soul.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {catalogSongs.map((song, index) => (
              <article key={song.title} className="song-card group">
                <span className="text-xs font-semibold tracking-[0.28em] text-[#8a7d6c]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-display text-2xl text-[var(--paper)] sm:text-[1.65rem]">
                    {song.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-[#aaa197]">
                    {song.theme}
                  </p>
                  <p className="font-hand mt-5 text-xl text-[var(--amber)]/80">
                    {song.lyric}
                  </p>
                  <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--amber)] transition group-hover:text-[var(--amber-bright)]">
                    Hear the Story →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 4. FOR ARTISTS ——— */}
      <section
        id="artists"
        className="relative border-y border-white/5 bg-[var(--ink-soft)]"
      >
        <div className="section-shell reveal">
          <div className="relative overflow-hidden border border-[rgba(210,163,79,0.28)] bg-[var(--wood-lit)] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[var(--amber)]/12 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/30 to-transparent" />

            <div className="relative max-w-3xl">
              <p className="eyebrow">For Artists</p>
              <h2 className="section-title">
                Looking for your
                <span className="mt-1 block text-[var(--amber)]">
                  next cut?
                </span>
              </h2>
              <p className="section-copy">
                Select songs are available for cuts, demos, and collaboration.
                If you’re chasing a story that lands—something with a hook,
                a heartbeat, and a reason to exist—let’s talk shop.
              </p>

              <ul className="mt-8 space-y-3 text-lg text-[#c9bfb0]">
                <li className="flex gap-3">
                  <span className="text-[var(--amber)]">—</span>
                  Songs available for recording artists seeking cuts
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--amber)]">—</span>
                  Demo-ready material with strong melodic hooks
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--amber)]">—</span>
                  Open to co-writes and creative collaboration
                </li>
              </ul>

              <a className="button-primary mt-10" href="#signup">
                Discuss a Song
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 5. LYRICS / NOTEBOOK ——— */}
      <section
        id="lyrics"
        className="bg-[var(--wood)]"
      >
        <div className="section-shell reveal">
          <div className="notebook notebook-lines mx-auto max-w-3xl px-8 py-14 sm:px-14 sm:py-16">
            <p className="eyebrow relative z-[1]">From the Notebook</p>
            <blockquote className="font-hand relative z-[1] mt-4 text-[2rem] leading-snug text-[var(--paper)] sm:text-[2.6rem] sm:leading-[1.35]">
              “I do not write songs because I want to be famous.
              <br />
              I write because some stories deserve to be remembered.”
            </blockquote>
            <p className="relative z-[1] mt-10 text-sm uppercase tracking-[0.28em] text-[var(--amber)]">
              — JohnPat
            </p>
          </div>
        </div>
      </section>

      {/* ——— 6. EMAIL SIGNUP ——— */}
      <section
        id="signup"
        className="relative overflow-hidden border-t border-white/5 bg-[var(--ink)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(210,163,79,0.08),transparent_60%)]" />
        <div className="section-shell reveal relative text-center">
          <div className="mx-auto max-w-xl">
            <p className="eyebrow">Stay Close</p>
            <h2 className="section-title">
              Hear it first
              <span className="mt-1 block text-[var(--amber)]">
                from the road.
              </span>
            </h2>
            <p className="section-copy mx-auto">
              New songs, demos, and songwriter notes—straight to your inbox.
              No noise. Just the music.
            </p>

            <form
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch"
              action="mailto:contact@johnpatmusic.com"
              method="get"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="body"
                type="email"
                required
                placeholder="Your email"
                className="signup-input flex-1"
              />
              <button type="submit" className="button-primary sm:px-8">
                Join the List
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ——— 7. CINEMATIC FOOTER ——— */}
      <footer className="relative overflow-hidden border-t border-[rgba(210,163,79,0.15)] bg-[var(--ink-soft)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-14 text-center lg:px-10">
          <Image
            src="/johnpat-logo.png"
            alt="JohnPat"
            width={180}
            height={80}
            className="h-auto w-[140px] object-contain opacity-90"
          />
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.22em] text-[#9a8f80]">
            <a className="nav-link" href="#featured">
              Music
            </a>
            <a className="nav-link" href="#songs">
              Songs
            </a>
            <a className="nav-link" href="#artists">
              For Artists
            </a>
            <a className="nav-link" href="#signup">
              Contact
            </a>
          </nav>
          <p className="font-hand text-xl text-[var(--amber)]/70">
            every song starts with a story
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#5c554c]">
            © 2026 JohnPat Music. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
