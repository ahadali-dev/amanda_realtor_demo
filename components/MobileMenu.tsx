"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { HashLink } from "./HashLink";
import { useSite } from "./SiteProvider";
import { CalendarIcon, InstagramIcon, PhoneIcon, TikTokIcon } from "./Icons";

const LINKS = [
  { href: "/#listings", label: "Listings" },
  { href: "/#sold", label: "Recently sold" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#area", label: "Cliffside Park" },
  { href: "/#about", label: "About" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const { openBooking } = useSite();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 901px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <div className={`mmenu${open ? " open" : ""}`} ref={root}>
      <button
        type="button"
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <div className="mpanel" id="mobile-panel">
        <div className="mpanel-in">
          <nav aria-label="Mobile">
            {LINKS.map((l, i) => (
              <HashLink key={l.href} href={l.href} onClick={close} style={{ "--i": i } as React.CSSProperties}>
                {l.label}
              </HashLink>
            ))}
            <a href="#contact" onClick={close} style={{ "--i": LINKS.length } as React.CSSProperties}>Contact</a>
          </nav>

          <div className="mcta" style={{ "--i": LINKS.length + 1 } as React.CSSProperties}>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => {
                close();
                openBooking();
              }}
            >
              <CalendarIcon /> Book a call
            </button>
            <a className="btn btn-line" href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
              <PhoneIcon /> Call
            </a>
          </div>

          <div className="msocial" style={{ "--i": LINKS.length + 2 } as React.CSSProperties}>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagram</a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer"><TikTokIcon />TikTok</a>
          </div>
        </div>
      </div>
    </div>
  );
}
