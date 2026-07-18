"use client";

import { useMemo, useState } from "react";
import { SongCard } from "@/components/SongCard";
import {
  ALL_GENRE_FILTERS,
  filterSongsByGenre,
  type GenreFilter,
} from "@/data/songs";

export function CatalogBrowser() {
  const [filter, setFilter] = useState<GenreFilter>("ALL");
  const filtered = useMemo(() => filterSongsByGenre(filter), [filter]);

  return (
    <div>
      <div
        className="catalog-filters"
        role="tablist"
        aria-label="Filter songs by genre"
      >
        {ALL_GENRE_FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            className={`catalog-filter ${filter === item ? "catalog-filter--active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="catalog-count">
        Showing {filtered.length} song{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="catalog-grid">
        {filtered.map((song) => (
          <SongCard key={song.slug} song={song} />
        ))}
      </div>
    </div>
  );
}
