"use client";

import { useRef, useState } from "react";
import type { Review } from "@/lib/data";

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const step = () => {
    const t = track.current;
    const first = t?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 22 : 0;
  };
  const go = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
  const goTo = (i: number) => track.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  const onScroll = () => {
    const t = track.current;
    const s = step();
    if (!t || !s) return;
    const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 2;
    setActive(atEnd ? reviews.length - 1 : Math.round(t.scrollLeft / s));
  };

  return (
    <div className="car" role="region" aria-roledescription="carousel" aria-label="Client reviews">
      <div className="car-track" ref={track} onScroll={onScroll} tabIndex={0}>
        {reviews.map((r, i) => (
          <figure className="card" key={r.id} aria-label={`Review ${i + 1} of ${reviews.length}`}>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>{r.quote}</blockquote>
            <figcaption className="who"><b>{r.who}</b>{r.role} · {r.area}</figcaption>
          </figure>
        ))}
      </div>
      <div className="car-ctl">
        <button type="button" onClick={() => go(-1)} aria-label="Previous reviews">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <div className="car-dots">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              type="button"
              className={i === active ? "on" : ""}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next reviews">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
