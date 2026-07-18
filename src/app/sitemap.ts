import type { MetadataRoute } from "next";
import { songs } from "@/data/songs";

const SITE_URL = "https://johnpatmusic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/catalog",
    "/for-artists",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/catalog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const songRoutes: MetadataRoute.Sitemap = songs.map((song) => ({
    url: `${SITE_URL}/songs/${song.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...songRoutes];
}
