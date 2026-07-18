import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Rye } from "next/font/google";
import { AudioProvider } from "@/components/AudioProvider";
import { MiniPlayer } from "@/components/MiniPlayer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

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
  title: {
    default: "JohnPat | Country · Southern Rock · Americana Songwriter",
    template: "%s | JohnPat",
  },
  description:
    "Original Country, Southern Rock, and Americana songs available for artists, bands, producers, and publishers.",
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
