import Link from "next/link";
import { HashLink } from "./HashLink";
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
            <HashLink href="/#listings">Listings</HashLink>
            <HashLink href="/#sold">Sold</HashLink>
            <HashLink href="/#reviews">Reviews</HashLink>
            <HashLink href="/#area">Cliffside Park</HashLink>
            <HashLink href="/#about">About</HashLink>
          </div>
          <BookCallButton />
        </div>
      </nav>
    </>
  );
}
