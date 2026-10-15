import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { FEATURED, HERO_IMGS, REVIEWS, SOLD, usd } from "@/lib/data";
import { PROOF } from "@/lib/site";
import { BookCallButton } from "@/components/BookCallButton";
import { EnquireLink } from "@/components/EnquireLink";
import {
  ArrowIcon,
  CheckIcon,
  PinIcon,
} from "@/components/Icons";
import { ListingsGrid } from "@/components/ListingsGrid";
import { Photo } from "@/components/Photo";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ContactSection } from "@/components/ContactSection";

// Drop a real photo at public/hero.jpg and it is used automatically.
const hasLocalHero = existsSync(path.join(process.cwd(), "public", "hero.jpg"));

export default function Home() {
  const [heroSrc, ...heroFallbacks] = hasLocalHero ? ["/hero.jpg", ...HERO_IMGS] : HERO_IMGS;
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <Photo src={heroSrc} fallbacks={heroFallbacks} alt="" sizes="100vw" priority className="hero-bg" />
        <div className="hero-shade" />
        <div className="wrap hero-grid">
          <div className="hero-inner">
            <div className="eyebrow">Cliffside Park · Bergen County, NJ</div>
            <h1>Find your place in Cliffside Park.</h1>
            <p>
              Buying, selling or investing in a duplex, I&apos;ll guide you through every step and
              answer your questions along the way.
            </p>
            <div className="ctas">
              <a href="#listings" className="btn btn-gold">See listings <ArrowIcon /></a>
              <BookCallButton className="btn btn-ghost">Book a call</BookCallButton>
            </div>
          </div>

          <Link href={`/listings/${FEATURED.slug}`} className="hero-card">
            <Photo src={FEATURED.img} alt={FEATURED.title} sizes="120px" className="hero-card-img" />
            <div>
              <small>Just listed</small>
              <b>{FEATURED.title}</b>
              <span>{usd(FEATURED.price)} · View listing →</span>
            </div>
          </Link>
        </div>
      </header>

      {/* PROOF STRIP: sample numbers live in lib/site.ts */}
      <div className="wrap proof">
        <div className="box">
          <div className="it">
            <b>{PROOF.rating}</b>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <span>Client rating · {PROOF.ratingSource}</span>
          </div>
          <div className="it"><b>{PROOF.sold}</b><span>Homes sold</span></div>
          <div className="it"><b>{PROOF.years}</b><span>Helping NJ families</span></div>
          <div className="it"><b>Bergen</b><span>County specialist</span></div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="svc">
        <div className="wrap grid3">
          <div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg></div>
            <div><h3>Buying</h3><p>Homes and duplexes that fit your budget and plans.</p></div></div>
          <div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></svg></div>
            <div><h3>Selling</h3><p>Know what your home is worth and price it right.</p></div></div>
          <div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
            <div><h3>Investing</h3><p>Multi-family and rental options across Bergen County.</p></div></div>
        </div>
      </section>

      {/* NOW AVAILABLE + NEW LISTINGS */}
      <section id="listings">
        <div className="wrap">
          <div className="head">
            <div><div className="eyebrow">Featured listing</div><h2>Now available</h2></div>
            <p>Like what you see? Ask a question or book a showing. It takes less than a minute.</p>
          </div>

          <div className="feat">
            <div className="gallery">
              <Photo src={FEATURED.gallery[0]} alt="Cliffside Park duplex exterior" sizes="(max-width: 900px) 100vw, 700px" className="main">
                <span className="tag">Duplex</span>
                <span className="tag oh">Open house · {FEATURED.openHouse}</span>
              </Photo>
              <div className="thumbs">
                <Photo src={FEATURED.gallery[1]} alt="Living room" sizes="220px" />
                <Photo src={FEATURED.gallery[2]} alt="Interior" sizes="220px" />
                <Photo src={FEATURED.gallery[3]} alt="Second unit" sizes="220px" className="more-ph" />
              </div>
            </div>
            <div className="info">
              <div className="eyebrow">{FEATURED.area}, NJ</div>
              <h3>{FEATURED.title}</h3>
              <div className="loc"><PinIcon />Street address on request</div>
              <div className="price">{usd(FEATURED.price)}</div>
              <div className="specs">
                <div><b>2</b><span>Units</span></div>
                <div><b>{FEATURED.beds}</b><span>Beds</span></div>
                <div><b>{FEATURED.baths}</b><span>Baths</span></div>
                <div><b>{FEATURED.sqft.toLocaleString("en-US")}</b><span>Sq ft</span></div>
              </div>
              <p className="desc">
                Live in one unit and rent the other, or hold both as an investment. Ask for the full
                details, floor plan and showing times.
              </p>
              <div className="minor">
                <EnquireLink className="btn btn-line" type="buy" message="Hi Amanda, I'd like the floor plan for the Cliffside Park Duplex.">Floor plan</EnquireLink>
                <EnquireLink className="btn btn-line" type="buy" message="Hi Amanda, I'd like the video tour of the Cliffside Park Duplex.">Video tour</EnquireLink>
              </div>
              <Link href={`/listings/${FEATURED.slug}`} className="btn btn-gold main-cta">View full details</Link>
            </div>
          </div>

          <div className="head sub">
            <div><div className="eyebrow">Just listed</div><h2>New listings</h2></div>
            <p>Fresh on the market across Cliffside Park and nearby Bergen County towns.</p>
          </div>
          <ListingsGrid />
        </div>
      </section>

      {/* RECENTLY SOLD */}
      <section className="sold-sec" id="sold">
        <div className="wrap">
          <div className="head">
            <div><div className="eyebrow">Track record</div><h2>Recently sold</h2></div>
            <p>Real results for real clients in Cliffside Park and nearby towns.</p>
          </div>
          <div className="sgrid">
            {SOLD.map((s) => {
              const pct = ((s.soldPrice - s.listPrice) / s.listPrice) * 100;
              return (
                <article className="scard" key={s.id}>
                  <Photo src={s.img} alt={`Sold home in ${s.area}`} sizes="(max-width: 900px) 100vw, 360px" className="sphoto">
                    <span className="tag sold">Sold</span>
                  </Photo>
                  <div className="sbody">
                    <div className="stitle"><h4>{s.area}</h4><span>{s.type}</span></div>
                    <div className="snums">
                      <div><small>Listed</small><b>{usd(s.listPrice)}</b></div>
                      <div><small>Sold</small><b>{usd(s.soldPrice)}</b></div>
                      <div><small>Result</small><b className={pct > 0 ? "up" : ""}>{pct > 0 ? `+${pct.toFixed(1)}%` : "At asking"}</b></div>
                    </div>
                    <div className="sdays">Sold in {s.days} days</div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="sample-note center">Sample results for this preview.</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="wrap">
          <div className="head">
            <div><div className="eyebrow">Client reviews</div><h2>What clients say</h2></div>
            <div className="rating-sum">
              <b>{PROOF.rating}</b>
              <div><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><span>{PROOF.ratingSource}</span></div>
            </div>
          </div>
          <ReviewsCarousel reviews={REVIEWS} />
          <div className="rv-src">Sample reviews for this preview. Real client words, shared on Instagram and TikTok, go here.</div>
        </div>
      </section>

      {/* AREA */}
      <section className="area" id="area">
        <div className="wrap">
          <Photo src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=80" alt="Manhattan skyline" sizes="(max-width: 900px) 100vw, 540px" className="img" />
          <div>
            <div className="eyebrow">Neighbourhood guide</div>
            <h2 className="h2">Living in Cliffside Park</h2>
            <p>
              A walkable borough on the Palisades, with Manhattan skyline views and an easy trip into
              New York City. Here&apos;s what buyers ask about most.
            </p>
            <div className="facts">
              <div><b>Getting to NYC</b>Bus routes into Manhattan, minutes from the George Washington Bridge</div>
              <div><b>Views</b>Hudson River and Manhattan skyline from the Palisades</div>
              <div><b>Nearby towns</b>Fort Lee, Edgewater and Fairview</div>
              <div><b>Homes</b>Condos, single-family homes and multi-family duplexes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <Photo src="/amanda.webp" alt="Amanda Roman" sizes="(max-width: 900px) 100vw, 480px" className="portrait">
            <span className="monogram" aria-hidden="true">AR</span>
          </Photo>
          <div>
            <div className="eyebrow">Meet Amanda</div>
            <h2 className="h2">Local guidance, from first question to closing day.</h2>
            <p>
              Buying or selling a home is more than a transaction. It&apos;s a major life decision.
              As your Realtor®, I&apos;m here to make the process feel seamless, personalized, and
              stress-free. From finding the right property to negotiating the best terms, I&apos;ll be
              by your side every step of the way, making your goals my priority.
            </p>
            <div className="specialties">
              <span>Residential</span><span>Investment</span><span>Luxury</span>
            </div>
            <div className="points">
              <div><CheckIcon />Knows Cliffside Park and Bergen County</div>
              <div><CheckIcon />Reachable by Instagram, TikTok, email or phone</div>
              <div><CheckIcon />Residential, investment and luxury homes</div>
            </div>
            <BookCallButton>Book a call with Amanda</BookCallButton>
          </div>
        </div>
      </section>

      {/* SELLER BAND */}
      <section className="value">
        <div className="wrap">
          <div className="box">
            <div>
              <h3>Thinking of selling?</h3>
              <p>Find out what your Cliffside Park home is worth today. Free, no obligation.</p>
            </div>
            <EnquireLink className="btn btn-gold" type="sell" message="Hi Amanda, I'd like a free home value estimate. My address is: ">
              Get my home value
            </EnquireLink>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
