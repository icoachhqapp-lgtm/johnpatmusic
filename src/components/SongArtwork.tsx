import Image from "next/image";
import type { ReactNode } from "react";

type ArtworkSize = "card" | "featured" | "detail" | "player";

interface SongArtworkProps {
  src: string;
  alt: string;
  size?: ArtworkSize;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * Full-bleed-safe song cover frame: object-fit contain, centered, dark matte.
 * Never crops titles or edge details printed on the artwork.
 */
export function SongArtwork({
  src,
  alt,
  size = "card",
  priority = false,
  className = "",
  children,
}: SongArtworkProps) {
  return (
    <div className={`song-artwork song-artwork--${size} ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={
          size === "detail"
            ? "(max-width: 900px) 100vw, 480px"
            : size === "featured"
              ? "(max-width: 900px) 100vw, 520px"
              : size === "player"
                ? "72px"
                : "(max-width: 800px) 100vw, 340px"
        }
        priority={priority}
        className="song-artwork__image"
      />
      {children}
    </div>
  );
}
