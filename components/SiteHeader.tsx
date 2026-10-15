import Link from "next/link";
import { SITE } from "@/lib/site";
import { BookCallButton } from "./BookCallButton";

export function SiteHeader() {
  return (
    <>
      <div className="pbar" id="top">
        Preview built for Amanda Roman. Listings, prices, sales, ratings, reviews and photos are sample content.
      </div>
      <nav className="nav">
        <div className="wrap">
          <Link href="/" className="logo">
            {SITE.name}
            <span>{SITE.tagline}</span>
          </Link>
          <div className="links">
            <Link href="/#listings">Listings</Link>
            <Link href="/#sold">Sold</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#area">Cliffside Park</Link>
            <Link href="/#about">About</Link>
          </div>
          <BookCallButton />
        </div>
      </nav>
    </>
  );
}
