"use client";

import { useState, type ReactNode } from "react";
import { Photo } from "./Photo";

export function ListingGallery({ images, title, badges }: { images: string[]; title: string; badges?: ReactNode }) {
  const [active, setActive] = useState(0);
  return (
    <div className="dgallery">
      <Photo
        src={images[active]}
        alt={`${title}, photo ${active + 1} of ${images.length}`}
        sizes="(max-width: 900px) 100vw, 740px"
        priority
        className="dmain"
      >
        {badges}
      </Photo>
      <div className="dthumbs">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={i === active ? "on" : ""}
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-pressed={i === active}
          >
            <Photo src={src} alt="" sizes="180px" />
          </button>
        ))}
      </div>
    </div>
  );
}
