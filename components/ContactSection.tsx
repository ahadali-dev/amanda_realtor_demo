import { SITE } from "@/lib/site";
import { BookCallButton } from "./BookCallButton";
import { EnquiryForm } from "./EnquiryForm";
import { CalendarIcon, InstagramIcon, MailIcon, PhoneIcon, TikTokIcon } from "./Icons";

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div>
          <div className="eyebrow">Get in touch</div>
          <h2 className="h2">Tell me what you&apos;re looking for.</h2>
          <p className="lead">Send a quick message and I&apos;ll get back to you. Prefer Instagram or TikTok? That works too.</p>
          <div className="ways">
            <a className="way" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              <div className="ic"><InstagramIcon /></div>
              <div><b>Instagram</b><span>{SITE.instagramHandle}</span></div>
            </a>
            <a className="way" href={SITE.tiktok} target="_blank" rel="noopener noreferrer">
              <div className="ic"><TikTokIcon /></div>
              <div><b>TikTok</b><span>{SITE.tiktokHandle}</span></div>
            </a>
            <a className="way" href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
              <div className="ic"><PhoneIcon /></div>
              <div><b>Call or text</b><span>{SITE.phone}</span></div>
            </a>
            <a className="way" href={`mailto:${SITE.email}`}>
              <div className="ic"><MailIcon /></div>
              <div><b>Email</b><span>{SITE.email}</span></div>
            </a>
            <BookCallButton className="way way-btn">
              <div className="ic"><CalendarIcon /></div>
              <div><b>Book a call</b><span>Free 15-minute call, pick a time that suits you</span></div>
            </BookCallButton>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
