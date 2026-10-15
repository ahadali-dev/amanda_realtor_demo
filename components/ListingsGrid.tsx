"use client";

import { useState } from "react";
import { LISTINGS } from "@/lib/data";
import { ListingCard } from "./ListingCard";

const PAGE = 6;

export function ListingsGrid() {
  const [shown, setShown] = useState(PAGE);
  const remaining = LISTINGS.length - shown;

  return (
    <>
      <div className="lgrid">
        {LISTINGS.slice(0, shown).map((l, i) => (
          <ListingCard key={l.id} l={l} delay={(i % PAGE) * 60} />
        ))}
      </div>

      <div className="more">
        {remaining > 0 ? (
          <button className="btn btn-gold" onClick={() => setShown((s) => s + PAGE)}>
            Show more listings
            <span className="count">{remaining} more</span>
          </button>
        ) : (
          <button className="btn btn-line" onClick={() => setShown(PAGE)}>
            Show less
          </button>
        )}
        <p className="sample-note">Sample listings shown for this preview.</p>
      </div>
    </>
  );
}
