"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SITE } from "@/lib/site";

export type EnquiryType = "buy" | "sell" | "invest" | "rent";

type Ctx = {
  openBooking: () => void;
  enquire: (message: string, type?: EnquiryType) => void;
  type: EnquiryType;
  setType: (t: EnquiryType) => void;
  message: string;
  setMessage: (m: string) => void;
};

const SiteContext = createContext<Ctx | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}

const SLOTS = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export function SiteProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [type, setType] = useState<EnquiryType>("buy");
  const [message, setMessage] = useState("");

  const ctx: Ctx = {
    openBooking: () => dialogRef.current?.showModal(),
    enquire: (m, t) => {
      setMessage(m);
      if (t) setType(t);
    },
    type,
    setType,
    message,
    setMessage,
  };

  const close = () => dialogRef.current?.close();

  return (
    <SiteContext.Provider value={ctx}>
      {children}
      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="book-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="modal-card">
          <button className="modal-x" onClick={close} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="eyebrow">Free 15-minute call</div>
          <h3 id="book-title">Book a call with Amanda</h3>

          {SITE.calendlyUrl ? (
            <iframe
              className="modal-embed"
              title="Book a call with Amanda"
              src={`${SITE.calendlyUrl}?hide_gdpr_banner=1`}
            />
          ) : (
            <>
              <div className="demo-note">
                <b>Demo preview.</b> On the live site, Amanda&apos;s Calendly
                scheduler opens right here, so visitors pick a time and book
                without leaving the page.
              </div>
              <div className="cal" aria-hidden="true">
                <div className="cal-head">
                  <span>Select a day</span>
                  <span className="cal-brand">Calendly</span>
                </div>
                <div className="cal-days">
                  {DAYS.map((d, i) => (
                    <div key={d} className={i === 1 ? "on" : ""}>
                      <small>{d}</small>
                    </div>
                  ))}
                </div>
                <div className="cal-slots">
                  {SLOTS.map((s, i) => (
                    <div key={s} className={i === 2 ? "on" : ""}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <button className="btn btn-line modal-close" onClick={close}>
            Close preview
          </button>
        </div>
      </dialog>
    </SiteContext.Provider>
  );
}
