"use client";

import { useState } from "react";
import { LISTINGS, usd } from "@/lib/data";
import { Photo } from "./Photo";
import { EnquireLink } from "./EnquireLink";

const PAGE = 6;

export function ListingsGrid() {
  const [shown, setShown] = useState(PAGE);
  const visible = LISTINGS.slice(0, shown);
  const remaining = LISTINGS.length - shown;

  return (
    <>
      <div className="lgrid">
        {visible.map((l, i) => (
          <article className="lcard" key={l.id} style={{ animationDelay: `${(i % PAGE) * 60}ms` }}>
            <Photo
              src={l.img}
              alt={`${l.title} in ${l.area}, NJ`}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
              className="lphoto"
            >
              <span className="tag">{l.tag}</span>
              {l.hot && <span className="tag oh">Popular</span>}
            </Photo>
            <div className="lbody">
              <div className="lprice">{usd(l.price)}</div>
              <h4>{l.title}</h4>
              <div className="lloc">{l.area}, NJ</div>
              <div className="lspecs">
                <span><b>{l.beds}</b> bd</span>
                <span><b>{l.baths}</b> ba</span>
                <span><b>{l.sqft.toLocaleString("en-US")}</b> sq ft</span>
              </div>
              <EnquireLink
                className="btn btn-line lbtn"
                type="buy"
                message={`Hi Amanda, I'd like details on the ${l.title} in ${l.area}.`}
              >
                Ask about this home
              </EnquireLink>
            </div>
          </article>
        ))}
      </div>

      <div className="more">
        {remaining > 0 ? (
          <button className="btn btn-gold" onClick={() => setShown((s) => s + PAGE)}>
            Show more listings
            <span className="count">{remaining} more</span>
          </button>
        ) : (
          <button className="btn btn-line" onClick={() => setShown(PAGE)}>
            Show less
          </button>
        )}
        <p className="sample-note">Sample listings shown for this preview.</p>
      </div>
    </>
  );
}
