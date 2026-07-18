import Image from "next/image";

const featuredSongs = [
  {
    title: "What It Takes",
    theme: "Hard work. Responsibility. Sacrifice.",
  },
  {
    title: "Still Got Some Fight",
    theme: "Resilience when life says quit.",
  },
  {
    title: "Home Ain't a House",
    theme: "The people we love are what make a home.",
  },
  {
    title: "Believe",
    theme: "Faith in what we cannot yet see.",
  },
  {
    title: "Can I Come Along",
    theme: "A father, a son, and time that moves too fast.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#080807] text-[#f5f0e7]">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-rural-dawn.png')",
        }}
      >
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-black/35" />

        {/* Navigation */}
        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#home" aria-label="JohnPat home">
            <Image
              src="/johnpat-logo.png"
              alt="JohnPat"
              width={230}
              height={100}
              priority
              className="h-auto w-[155px] object-contain sm:w-[185px] lg:w-[220px]"
            />
          </a>

          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8dfd1] md:flex">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#music">
              Music
            </a>
            <a className="nav-link" href="#artists">
              For Artists
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero text */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-7xl items-center px-6 pb-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d2a34f] sm:text-sm">
              American Songwriter
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#fffaf1] sm:text-6xl lg:text-8xl">
              Every song starts
              <span className="block text-[#d7ac62]">with a story.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ded5c8] sm:text-xl">
              Original country and Americana songs about faith, family, hard
              work, love, resilience, and the legacy we leave behind.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="button-primary" href="#music">
                Listen to the Music
              </a>

              <a className="button-secondary" href="#artists">
                For Artists
              </a>
            </div>
          </div>
        </div>

        <a
          href="#music"
          aria-label="Scroll to featured music"
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.3em] text-white/65"
        >
          Discover the music
          <span className="mt-2 block text-xl">↓</span>
        </a>
      </section>

      {/* LATEST RELEASE */}
      <section id="music" className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-4 bg-[#c99a48]/10 blur-3xl" />

            <Image
              src="/album-cover.png"
              alt="Leave It Better Than You Found It album cover"
              width={1200}
              height={1200}
              className="relative h-auto w-full border border-white/10 shadow-2xl shadow-black"
            />
          </div>

          <div>
            <p className="eyebrow">Featured Album</p>

            <h2 className="section-title">
              Leave It Better
              <span className="block text-[#d2a34f]">
                Than You Found It
              </span>
            </h2>

            <p className="section-copy">
              Ten original songs rooted in real life—work, faith, family,
              love, memory, resilience, and the choices that shape what we
              leave behind.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="button-primary" href="#songs">
                Hear the Album
              </a>

              <a className="button-secondary" href="#about">
                The Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SONGS */}
      <section id="songs" className="border-y border-white/10 bg-[#0d0c0a]">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Featured Songs</p>

            <h2 className="section-title">
              Stories that deserve
              <span className="block text-[#d2a34f]">a chorus.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredSongs.map((song, index) => (
              <article
                key={song.title}
                className="group flex min-h-[260px] flex-col justify-between border border-white/10 bg-[#12110f] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c99a48]/60 hover:bg-[#171510]"
              >
                <span className="text-xs font-bold tracking-[0.25em] text-[#9d8c72]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-[#fff8eb]">
                    {song.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#aaa197]">
                    {song.theme}
                  </p>

                  <button
                    type="button"
                    className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#d2a34f] transition group-hover:text-[#f0c775]"
                  >
                    Hear the Story →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOR ARTISTS */}
      <section id="artists" className="section-shell">
        <div className="relative overflow-hidden border border-[#c99a48]/25 bg-[#11100d] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#c99a48]/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow">For Recording Artists</p>

            <h2 className="section-title">
              Looking for your
              <span className="block text-[#d2a34f]">next song?</span>
            </h2>

            <p className="section-copy">
              JohnPat writes original country songs built around memorable
              stories, strong hooks, and themes that connect with real
              listeners. Select songs may be available for recording,
              collaboration, or licensing.
            </p>

            <a className="button-primary mt-9" href="#contact">
              Discuss a Song
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-white/10 bg-[#0d0c0a]">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">About JohnPat</p>

              <h2 className="section-title">
                Real life becomes
                <span className="block text-[#d2a34f]">country music.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#bdb4a8]">
              <p>
                JohnPat is an American songwriter creating country and
                Americana songs shaped by work, faith, family, love, and the
                lessons people carry through life.
              </p>

              <blockquote className="border-l-2 border-[#c99a48] pl-6 text-2xl leading-9 text-[#f3eadc]">
                “I do not write songs because I want to be famous. I write
                because some stories deserve to be remembered.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-shell text-center">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Contact</p>

          <h2 className="section-title">
            Start with
            <span className="block text-[#d2a34f]">the song.</span>
          </h2>

          <p className="section-copy mx-auto">
            For recording, collaboration, publishing, licensing, or general
            music inquiries, contact JohnPat Music.
          </p>

          <a
            className="button-primary mt-9"
            href="mailto:contact@johnpatmusic.com"
          >
            Contact JohnPat Music
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs uppercase tracking-[0.2em] text-[#756e65]">
        © 2026 JohnPat Music. All rights reserved.
      </footer>
    </main>
  );
}