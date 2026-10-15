"use client";

import { useState, type FormEvent } from "react";
import { useSite, type EnquiryType } from "./SiteProvider";

const TYPES: { id: EnquiryType; label: string }[] = [
  { id: "buy", label: "Buy" },
  { id: "sell", label: "Sell" },
  { id: "invest", label: "Invest" },
  { id: "rent", label: "Rent" },
];

export function EnquiryForm() {
  const { type, setType, message, setMessage } = useSite();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Demo: no backend yet. Wire this to email / CRM when going live.
    setSent(true);
  };

  if (sent) {
    return (
      <form className="enq">
        <div className="ok">
          <h3>Thank you!</h3>
          <p>Amanda will be in touch shortly.</p>
        </div>
      </form>
    );
  }

  return (
    <form className="enq" onSubmit={onSubmit}>
      <label>I&apos;m looking to</label>
      <div className="chips">
        {TYPES.map((t) => (
          <span key={t.id}>
            <input
              type="radio"
              name="type"
              id={`t-${t.id}`}
              checked={type === t.id}
              onChange={() => setType(t.id)}
            />
            <label htmlFor={`t-${t.id}`}>{t.label}</label>
          </span>
        ))}
      </div>
      <div className="row">
        <div>
          <label htmlFor="n">Name</label>
          <input id="n" name="name" required placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="p">Phone</label>
          <input id="p" name="phone" type="tel" placeholder="(201) 555-0123" autoComplete="tel" />
        </div>
      </div>
      <label htmlFor="e">Email</label>
      <input id="e" name="email" type="email" required placeholder="you@email.com" autoComplete="email" />
      <label htmlFor="when">When are you hoping to move?</label>
      <select id="when" name="when">
        <option>As soon as possible</option>
        <option>In 1–3 months</option>
        <option>In 3–6 months</option>
        <option>Just exploring</option>
      </select>
      <label htmlFor="m">Message</label>
      <textarea
        id="m"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell me a little about what you're looking for"
      />
      <button className="btn btn-gold" type="submit">Send enquiry</button>
      <div className="note">No spam. Your details go straight to Amanda.</div>
    </form>
  );
}
