import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_LISTINGS, getListing, usd } from "@/lib/data";
import { SITE } from "@/lib/site";
import { BookCallButton } from "@/components/BookCallButton";
import { ContactSection } from "@/components/ContactSection";
import { EnquireLink } from "@/components/EnquireLink";
import { CheckIcon, InstagramIcon, PinIcon } from "@/components/Icons";
import { ListingCard } from "@/components/ListingCard";
import { ListingGallery } from "@/components/ListingGallery";

export function generateStaticParams() {
  return ALL_LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/listings/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = getListing(slug);
  if (!l) return {};
  return {
    title: `${l.title}, ${l.area} NJ | Amanda Roman`,
    description: `${l.beds} bed, ${l.baths} bath ${l.type.toLowerCase()} in ${l.area}, NJ for ${usd(l.price)}.`,
  };
}

export default async function ListingPage({ params }: PageProps<"/listings/[slug]">) {
  const { slug } = await params;
  const l = getListing(slug);
  if (!l) notFound();

  const similar = ALL_LISTINGS.filter((x) => x.slug !== l.slug)
    .sort((a, b) => Math.abs(a.price - l.price) - Math.abs(b.price - l.price))
    .slice(0, 3);

  const facts: [string, string][] = [
    ["Property type", l.type],
    ["Bedrooms", String(l.beds)],
    ["Bathrooms", String(l.baths)],
    ["Living area", `${l.sqft.toLocaleString("en-US")} sq ft`],
    ["Year built", String(l.year)],
    ["Price per sq ft", usd(Math.round(l.price / l.sqft))],
  ];

  return (
    <>
      <section className="detail">
        <div className="wrap">
          <Link href="/#listings" className="back">← All listings</Link>

          <div className="dgrid">
            <div className="dleft">
              <ListingGallery
                images={l.gallery}
                title={l.title}
                badges={
                  <>
                    <span className="tag">{l.tag}</span>
                    {l.openHouse && <span className="tag oh">Open house · {l.openHouse}</span>}
                  </>
                }
              />

              <div className="dhead">
                <div className="eyebrow">{l.area}, NJ</div>
                <h1>{l.title}</h1>
                <div className="loc"><PinIcon />Street address on request</div>
              </div>

              <div className="specs dspecs">
                <div><b>{l.beds}</b><span>Beds</span></div>
                <div><b>{l.baths}</b><span>Baths</span></div>
                <div><b>{l.sqft.toLocaleString("en-US")}</b><span>Sq ft</span></div>
                <div><b>{l.year}</b><span>Built</span></div>
              </div>

              <h2 className="dh2">About this home</h2>
              <p className="dtext">{l.description}</p>

              <h2 className="dh2">Features</h2>
              <ul className="dfeat">
                {l.features.map((f) => (
                  <li key={f}><CheckIcon />{f}</li>
                ))}
              </ul>

              <h2 className="dh2">Property details</h2>
              <dl className="dfacts">
                {facts.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <p className="sample-note">Sample listing for this preview.</p>
            </div>

            <aside className="dside">
              <div className="dcard">
                <div className="dprice">{usd(l.price)}</div>
                <div className="dsub">{l.type} · {l.area}, NJ</div>
                <BookCallButton className="btn btn-gold dbtn">Book a showing call</BookCallButton>
                <EnquireLink
                  className="btn btn-line dbtn"
                  type="buy"
                  message={`Hi Amanda, I'd like details on the ${l.title} in ${l.area}.`}
                >
                  Ask about this home
                </EnquireLink>
                <a className="btn btn-line dbtn" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon /> Message on Instagram
                </a>
                <div className="dagent">
                  <span className="dav">AR</span>
                  <div><b>{SITE.name}</b><span>{SITE.tagline}</span></div>
                </div>
              </div>
            </aside>
          </div>

          <div className="head sub">
            <div><div className="eyebrow">You might also like</div><h2>Similar listings</h2></div>
          </div>
          <div className="lgrid">
            {similar.map((s) => (
              <ListingCard key={s.slug} l={s} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
