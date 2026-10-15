import Link from "next/link";
import { HashLink } from "./HashLink";
import { SERVICE_AREAS, SITE } from "@/lib/site";
import { BookCallButton } from "./BookCallButton";
import { InstagramIcon, TikTokIcon, MailIcon, PhoneIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="f-cta">
          <div>
            <h3>Ready when you are.</h3>
            <p>Buying, selling or investing, let&apos;s talk it through.</p>
          </div>
          <BookCallButton>Book a free call</BookCallButton>
        </div>

        <div className="f-grid">
          <div className="f-brand">
            <Link href="/" className="logo">
              {SITE.name}
              <span>{SITE.tagline}</span>
            </Link>
            <p>
              Local guidance for buyers, sellers and investors across
              Cliffside Park and Bergen County, New Jersey.
            </p>
            <div className="f-social">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Explore">
            <h4>Explore</h4>
            <HashLink href="/#listings">New listings</HashLink>
            <HashLink href="/#sold">Recently sold</HashLink>
            <HashLink href="/#reviews">Reviews</HashLink>
            <HashLink href="/#area">Cliffside Park</HashLink>
            <HashLink href="/#about">About Amanda</HashLink>
            <a href="#contact">Contact</a>
          </nav>

          <nav aria-label="Services">
            <h4>Services</h4>
            <a href="#contact">Buying a home</a>
            <a href="#contact">Selling your home</a>
            <a href="#contact">Investing in multi-family</a>
            <a href="#contact">Home value estimate</a>
          </nav>

          <div>
            <h4>Get in touch</h4>
            <a href={`mailto:${SITE.email}`} className="f-line"><MailIcon />{SITE.email}</a>
            <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="f-line"><PhoneIcon />{SITE.phone}</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="f-line"><InstagramIcon />{SITE.instagramHandle}</a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="f-line"><TikTokIcon />{SITE.tiktokHandle}</a>
          </div>
        </div>

        <div className="f-areas">
          <b>Areas served:</b> {SERVICE_AREAS.join(" · ")} and nearby Bergen County
        </div>

        <div className="f-bottom">
          <div>© 2026 {SITE.name}, Realtor®{SITE.brokerage ? ` · ${SITE.brokerage}` : ""}</div>
          <div className="f-legal">
            <span className="eho" title="Equal Housing Opportunity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-7 9 7M5 10v10h14V10M8 14h8M8 17h8" /></svg>
              Equal Housing Opportunity
            </span>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
