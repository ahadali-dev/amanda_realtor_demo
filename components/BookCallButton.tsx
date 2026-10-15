"use client";

import type { ReactNode } from "react";
import { useSite } from "./SiteProvider";

export function BookCallButton({
  className = "btn btn-gold",
  children = "Book a call",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { openBooking } = useSite();
  return (
    <button type="button" className={className} onClick={openBooking}>
      {children}
    </button>
  );
}
