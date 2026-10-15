import { SITE } from "@/lib/site";
import { BookCallButton } from "./BookCallButton";

export function MobileBar() {
  return (
    <div className="mbar">
      <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Message</a>
      <a href="#contact">Enquire</a>
      <BookCallButton className="p">Book a call</BookCallButton>
    </div>
  );
}
