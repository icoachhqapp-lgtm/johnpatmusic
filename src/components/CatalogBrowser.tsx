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
    <div className="catalog-browser">
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
        {filtered.length} original song{filtered.length === 1 ? "" : "s"} ·
        concept demos for recording inquiry
      </p>

      <div className="catalog-list">
        {filtered.map((song, index) => (
          <div key={song.slug} className="catalog-list__item reveal">
            <span className="catalog-list__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <SongCard song={song} layout="list" />
          </div>
        ))}
      </div>
    </div>
  );
}
