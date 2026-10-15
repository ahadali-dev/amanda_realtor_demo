import Link from "next/link";
import { usd, type Listing } from "@/lib/data";
import { Photo } from "./Photo";

export function ListingCard({ l, delay = 0 }: { l: Listing; delay?: number }) {
  const href = `/listings/${l.slug}`;
  return (
    <article className="lcard" style={{ animationDelay: `${delay}ms` }}>
      <Link href={href} className="lphoto-link" aria-label={`View ${l.title} in ${l.area}`}>
        <Photo
          src={l.img}
          alt={`${l.title} in ${l.area}, NJ`}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
          className="lphoto"
        >
          <span className="tag">{l.tag}</span>
          {l.hot && <span className="tag oh">Popular</span>}
        </Photo>
      </Link>
      <div className="lbody">
        <div className="lprice">{usd(l.price)}</div>
        <h4><Link href={href}>{l.title}</Link></h4>
        <div className="lloc">{l.area}, NJ</div>
        <div className="lspecs">
          <span><b>{l.beds}</b> bd</span>
          <span><b>{l.baths}</b> ba</span>
          <span><b>{l.sqft.toLocaleString("en-US")}</b> sq ft</span>
        </div>
        <Link href={href} className="btn btn-line lbtn">View details</Link>
      </div>
    </article>
  );
}
