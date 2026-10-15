import { FEATURED, HERO_COLLAGE, HERO_IMG, SOLD, usd } from "@/lib/data";
import { SITE } from "@/lib/site";
import { BookCallButton } from "@/components/BookCallButton";
import { EnquireLink } from "@/components/EnquireLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import {
  ArrowIcon,
  CalendarIcon,
  CheckIcon,
  InstagramIcon,
  MailIcon,
  PinIcon,
  TikTokIcon,
} from "@/components/Icons";
import { ListingsGrid } from "@/components/ListingsGrid";
import { Photo } from "@/components/Photo";
import { SiteProvider } from "@/components/SiteProvider";

export default function Home() {
  return (
    <SiteProvider>
      <div className="pbar" id="top">
        Preview built for Amanda Roman. Listings, prices, sales, reviews and photos are sample content.
      </div>

      <nav className="nav">
        <div className="wrap">
          <a href="#top" className="logo">
            {SITE.name}
            <span>{SITE.tagline}</span>
          </a>
          <div className="links">
            <a href="#listings">Listings</a>
            <a href="#sold">Sold</a>
            <a href="#area">Cliffside Park</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <BookCallButton />
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <Photo src={HERO_IMG} alt="" sizes="100vw" priority className="hero-bg" />
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

          <div className="hero-collage" aria-label="Featured homes">
            <Photo
              src={FEATURED.gallery[0]}
              alt="Featured duplex in Cliffside Park"
              sizes="(max-width: 900px) 0px, 320px"
              className="hc hc-main"
            >
              <span className="hc-chip"><b>{usd(FEATURED.price)}</b>{FEATURED.area}</span>
            </Photo>
            {HERO_COLLAGE.map((h, i) => (
              <Photo
                key={h.label}
                src={h.img}
                alt={`Home in ${h.label}`}
                sizes="(max-width: 900px) 0px, 240px"
                className={`hc hc-${i + 1}`}
              >
                <span className="hc-chip"><b>{usd(h.price)}</b>{h.label}</span>
              </Photo>
            ))}
          </div>
        </div>
      </header>

      {/* PROOF STRIP: no review profiles exist yet, so lead with where Amanda is active */}
      <div className="wrap proof">
        <div className="box">
          <a className="it" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
            <b><InstagramIcon /></b><strong>Instagram</strong><span>{SITE.instagramHandle}</span>
          </a>
          <a className="it" href={SITE.tiktok} target="_blank" rel="noopener noreferrer">
            <b><TikTokIcon /></b><strong>TikTok</strong><span>{SITE.tiktokHandle}</span>
          </a>
          <div className="it">
            <b>15 min</b><strong>Free intro call</strong><span>No obligation</span>
          </div>
          <div className="it">
            <b>Bergen</b><strong>County specialist</strong><span>Cliffside Park &amp; nearby</span>
          </div>
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
                <span className="tag oh">Open house · Sat 1–3 PM</span>
              </Photo>
              <div className="thumbs">
                <Photo src={FEATURED.gallery[1]} alt="Living room" sizes="220px" />
                <Photo src={FEATURED.gallery[2]} alt="Interior" sizes="220px" />
                <Photo src={FEATURED.gallery[3]} alt="Second unit" sizes="220px" className="more-ph" />
              </div>
            </div>
            <div className="info">
              <div className="eyebrow">{FEATURED.area}</div>
              <h3>{FEATURED.title}</h3>
              <div className="loc"><PinIcon />Street address on request</div>
              <div className="price">{usd(FEATURED.price)}</div>
              <div className="specs">
                <div><b>2</b><span>Units</span></div>
                <div><b>5</b><span>Beds</span></div>
                <div><b>3</b><span>Baths</span></div>
                <div><b>2,450</b><span>Sq ft</span></div>
              </div>
              <p className="desc">
                Live in one unit and rent the other, or hold both as an investment. Ask for the full
                details, floor plan and showing times.
              </p>
              <div className="minor">
                <EnquireLink className="btn btn-line" type="buy" message="Hi Amanda, I'd like the floor plan for the Cliffside Park Duplex.">Floor plan</EnquireLink>
                <EnquireLink className="btn btn-line" type="buy" message="Hi Amanda, I'd like the video tour of the Cliffside Park Duplex.">Video tour</EnquireLink>
              </div>
              <EnquireLink className="btn btn-gold main-cta" type="buy" message="Hi Amanda, I'd like to ask about the Cliffside Park Duplex.">
                Ask about this home
              </EnquireLink>
            </div>
          </div>

          <div className="head sub">
            <div><div className="eyebrow">Just listed</div><h2>New listings</h2></div>
            <p>Fresh on the market across Cliffside Park and nearby Bergen County towns.</p>
          </div>
          <ListingsGrid />
        </div>
      </section>

      {/* RECENTLY SOLD + REVIEWS */}
      <section className="sold-sec" id="sold">
        <div className="wrap">
          <div className="head">
            <div><div className="eyebrow">Sold &amp; reviewed</div><h2>Recently sold</h2></div>
            <p>Every closing, with the numbers and a word from the client.</p>
          </div>
          <div className="sgrid">
            {SOLD.map((s) => {
              const pct = ((s.soldPrice - s.listPrice) / s.listPrice) * 100;
              return (
                <article className="scard" key={s.id}>
                  <Photo src={s.img} alt={`Sold home in ${s.area}`} sizes="(max-width: 900px) 100vw, 360px" className="sphoto">
                    <span className="ribbon">Sold</span>
                  </Photo>
                  <div className="sbody">
                    <div className="stitle">
                      <h4>{s.area}</h4>
                      <span>{s.type}</span>
                    </div>
                    <div className="snums">
                      <div><small>Listed</small><b>{usd(s.listPrice)}</b></div>
                      <div><small>Sold</small><b>{usd(s.soldPrice)}</b></div>
                      <div>
                        <small>Result</small>
                        <b className={pct > 0 ? "up" : ""}>{pct > 0 ? `+${pct.toFixed(1)}%` : "At asking"}</b>
                      </div>
                    </div>
                    <div className="sdays">Sold in {s.days} days</div>
                    <figure className="squote">
                      <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                      <blockquote>{s.quote}</blockquote>
                      <figcaption><b>{s.who}</b>{s.role}</figcaption>
                    </figure>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="sold-src">Sample results for this preview. Real sales and client words, shared from Instagram and TikTok, go here.</p>
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
          <Photo src="/amanda.jpg" alt="Amanda Roman" sizes="(max-width: 900px) 100vw, 480px" className="portrait">
            <span className="monogram" aria-hidden="true">AR</span>
          </Photo>
          <div>
            <div className="eyebrow">Meet Amanda</div>
            <h2 className="h2">Local guidance, from first question to closing day.</h2>
            <p>
              A short introduction goes here: how long Amanda has helped buyers and sellers in
              Cliffside Park, what she loves about the area, and the kind of clients she works with.
            </p>
            <div className="points">
              <div><CheckIcon />Knows Cliffside Park and Bergen County</div>
              <div><CheckIcon />Reachable by Instagram, TikTok, email or phone</div>
              <div><CheckIcon />Buyers, sellers and investors</div>
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

      {/* CONTACT */}
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

      <Footer />

      <div className="mbar">
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Message</a>
        <a href="#contact">Enquire</a>
        <BookCallButton className="p">Book a call</BookCallButton>
      </div>
    </SiteProvider>
  );
}
