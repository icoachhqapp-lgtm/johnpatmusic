import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Rye } from "next/font/google";
import { AudioProvider } from "@/components/AudioProvider";
import { MiniPlayer } from "@/components/MiniPlayer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const SITE_URL = "https://johnpatmusic.com";
const SITE_NAME = "JohnPat";
const SITE_DESCRIPTION =
  "Original Country, Southern Rock, and Americana songs available for artists, bands, producers, and publishers.";

const display = Rye({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const handwriting = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JohnPat | Country · Southern Rock · Americana Songwriter",
    template: "%s | JohnPat",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "JohnPat" }],
  creator: "JohnPat",
  publisher: "JohnPat Music",
  keywords: [
    "JohnPat",
    "songwriter",
    "country songs",
    "southern rock",
    "americana",
    "song catalog",
    "recording inquiry",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "JohnPat | Country · Southern Rock · Americana Songwriter",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/songs/what-it-takes.png",
        width: 1200,
        height: 1200,
        alt: "JohnPat — What It Takes song artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnPat | Country · Southern Rock · Americana Songwriter",
    description: SITE_DESCRIPTION,
    images: ["/images/songs/what-it-takes.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${handwriting.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AudioProvider>
          <SiteHeader />
          <div className="flex-1 pb-24">{children}</div>
          <SiteFooter />
          <MiniPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
