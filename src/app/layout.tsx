import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Rye } from "next/font/google";
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
  title: "JohnPat Music | Country Songwriter",
  description:
    "Original country songs written from faith, family, hard work, heartbreak, and the life we leave behind.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
