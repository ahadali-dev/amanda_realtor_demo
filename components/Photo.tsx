"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Props = {
  src: string;
  /** Tried in order if `src` fails to load. */
  fallbacks?: string[];
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

// Fills its parent, shows a soft gradient if every photo fails to load.
export function Photo({ src, fallbacks = [], alt, sizes, className = "", priority, children }: Props) {
  const all = [src, ...fallbacks];
  const [i, setI] = useState(0);
  return (
    <div className={`photo ${className}`}>
      {i < all.length && (
        <Image
          key={all[i]}
          src={all[i]}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setI((n) => n + 1)}
          style={{ objectFit: "cover" }}
        />
      )}
      {children}
    </div>
  );
}
