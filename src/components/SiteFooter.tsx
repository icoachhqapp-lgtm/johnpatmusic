import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/catalog", label: "The Catalog" },
  { href: "/for-artists", label: "For Artists" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-14 text-center lg:px-10">
        <Link href="/" aria-label="JohnPat home">
          <Image
            src="/johnpat-logo.png"
            alt="JohnPat"
            width={180}
            height={80}
            className="h-auto w-[140px] object-contain opacity-90"
          />
        </Link>

        <div>
          <p className="font-display text-2xl tracking-[0.08em] text-[var(--paper)]">
            JOHNPAT
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--amber)]">
            Country · Southern Rock · Americana Songwriter
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.22em] text-[#9a8f80]"
        >
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="max-w-md text-sm leading-relaxed text-[#7a7166]">
          Concept recordings presented for songwriting demonstration and inquiry
          purposes.
        </p>

        <p className="text-[11px] uppercase tracking-[0.28em] text-[#5c554c]">
          © 2026 JohnPat Music. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
