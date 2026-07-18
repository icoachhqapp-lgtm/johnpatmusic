"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "The Catalog" },
  { href: "/for-artists", label: "For Artists" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link
          href="/"
          aria-label="JohnPat home"
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/johnpat-logo.png"
            alt="JohnPat"
            width={230}
            height={100}
            priority
            className="h-auto w-[130px] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:w-[160px] lg:w-[190px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-[0.78rem] uppercase tracking-[0.22em] text-[#e8dfd1] md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(pathname, link.href) ? "nav-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-nav-toggle md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`mobile-nav md:hidden ${open ? "mobile-nav--open" : ""}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(pathname, link.href) ? "nav-link--active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
