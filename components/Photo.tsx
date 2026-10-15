"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

// Fills its parent, shows a soft gradient if the photo is missing or fails.
export function Photo({ src, alt, sizes, className = "", priority, children }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          style={{ objectFit: "cover" }}
        />
      )}
      {children}
    </div>
  );
}
