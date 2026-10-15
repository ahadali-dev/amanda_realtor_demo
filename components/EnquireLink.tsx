"use client";

import type { ReactNode } from "react";
import { useSite, type EnquiryType } from "./SiteProvider";

// Link to the contact form that pre-fills the message (and optionally the type).
export function EnquireLink({
  message,
  type,
  className,
  children,
}: {
  message: string;
  type?: EnquiryType;
  className?: string;
  children: ReactNode;
}) {
  const { enquire } = useSite();
  return (
    <a href="#contact" className={className} onClick={() => enquire(message, type)}>
      {children}
    </a>
  );
}
