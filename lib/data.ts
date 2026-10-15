// Demo content. Amanda has no public listings yet, so everything below is
// sample data with stock photography. Replace `img` with "/your-photo.jpg"
// (file in /public) to use real photos.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export type Listing = {
  id: string;
  title: string;
  area: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  tag: string;
  img: string;
  hot?: boolean;
  slug: string;
  type: string;
  year: number;
  description: string;
  features: string[];
  gallery: string[];
  openHouse?: string;
};

// Hero tries these in order (a /public/hero.jpg, if present, is tried first).
export const HERO_IMGS = [
  u("1564013799919-ab600027ffc6"),
  u("1600596542815-ffad4c1539a9"),
  u("1512917774080-9991f1c4c750"),
];

const INTERIORS = [
  u("1560448204-e02f11c3d0e2"),
  u("1502672260266-1c1ef2d93688"),
  u("1522708323590-d24dbb6b0267"),
  u("1600585152220-90363fe7e115"),
  u("1600607687939-ce8a6c25118c"),
];

type Raw = Omit<Listing, "slug" | "type" | "year" | "description" | "features" | "gallery" | "openHouse">;

const slugify = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const TYPE_BY_TAG: Record<string, string> = {
  Duplex: "Two-family",
  Investment: "Three-family",
  Luxury: "Condo",
};

function detail(r: Raw, i: number): Listing {
  const multi = r.tag === "Duplex" || r.tag === "Investment";
  const condo = /condo|co-op|penthouse/i.test(r.title);
  const type = TYPE_BY_TAG[r.tag] ?? (condo ? "Condo" : /townhouse/i.test(r.title) ? "Townhouse" : "Single-family");
  const description = multi
    ? `A well-kept ${type.toLowerCase()} in ${r.area}. Live in one unit and rent the others, or hold the whole building as an investment. Ask Amanda for rent rolls, floor plans and showing times.`
    : condo
      ? `A bright ${r.beds}-bedroom home in ${r.area} close to bus routes into Manhattan, shops and restaurants. Move-in ready, with plenty of natural light.`
      : `A comfortable ${r.beds}-bedroom home in ${r.area} with room to spread out. Close to schools, parks and quick routes into New York City. Ask Amanda for the full details and showing times.`;
  const features = [
    ...(multi ? ["Separate utilities", "Rental income potential"] : ["Move-in ready"]),
    condo ? "Elevator building" : "Private outdoor space",
    "Central air",
    "Hardwood floors",
    "Near NYC bus routes",
    ...(r.price > 1000000 ? ["Skyline views"] : ["Updated kitchen"]),
  ];
  return {
    ...r,
    slug: slugify(r.title),
    type,
    year: [1958, 1972, 1985, 1998, 2006, 2015][i % 6],
    description,
    features,
    gallery: [r.img, ...[0, 1, 2].map((k) => INTERIORS[(i + k) % INTERIORS.length])],
    openHouse: r.tag === "Open house" ? "Sat 1–3 PM" : undefined,
  };
}

const RAW_LISTINGS: Raw[] = [
  { id: "l1", title: "Skyline-view 2BR Condo", area: "Cliffside Park", price: 589000, beds: 2, baths: 2, sqft: 1120, tag: "New", img: u("1545324418-cc1a3fa10c00") },
  { id: "l2", title: "Renovated Two-Family", area: "Fairview", price: 899000, beds: 5, baths: 3, sqft: 2380, tag: "Duplex", img: u("1583608205776-bfd35f0d9f83") },
  { id: "l3", title: "Sunlit Colonial", area: "Fort Lee", price: 1175000, beds: 4, baths: 3, sqft: 2640, tag: "New", img: u("1570129477492-45c003edd2be"), hot: true },
  { id: "l4", title: "Modern Townhouse", area: "Edgewater", price: 975000, beds: 3, baths: 3, sqft: 1890, tag: "Open house", img: u("1600607687939-ce8a6c25118c") },
  { id: "l5", title: "Bright 1BR Condo", area: "Cliffside Park", price: 389000, beds: 1, baths: 1, sqft: 740, tag: "New", img: u("1522708323590-d24dbb6b0267") },
  { id: "l6", title: "Corner-Lot Single Family", area: "Palisades Park", price: 829000, beds: 4, baths: 2, sqft: 2100, tag: "New", img: u("1600585154340-be6161a56a0c") },
  { id: "l7", title: "Three-Family Investment", area: "North Bergen", price: 1249000, beds: 8, baths: 4, sqft: 3300, tag: "Investment", img: u("1605276374104-dee2a0ed3cd6") },
  { id: "l8", title: "Garden-Level Duplex", area: "Ridgefield", price: 769000, beds: 4, baths: 2, sqft: 1980, tag: "Duplex", img: u("1572120360610-d971b9d7767c") },
  { id: "l9", title: "Hudson-View Penthouse", area: "Edgewater", price: 1395000, beds: 3, baths: 3, sqft: 2050, tag: "Luxury", img: u("1486406146926-c627a92ad1ab") },
  { id: "l10", title: "Updated Ranch", area: "Englewood", price: 705000, beds: 3, baths: 2, sqft: 1640, tag: "New", img: u("1580587771525-78b9dba3b914") },
  { id: "l11", title: "Walk-to-Bus 2BR Co-op", area: "Cliffside Park", price: 449000, beds: 2, baths: 1, sqft: 960, tag: "New", img: u("1600566753190-17f0baa2a6c3") },
  { id: "l12", title: "Brick Two-Family", area: "Union City", price: 859000, beds: 5, baths: 3, sqft: 2250, tag: "Duplex", img: u("1593696140826-c58b021acf8b") },
];

const FEATURED_RAW: Raw = {
  id: "feat",
  title: "Cliffside Park Duplex",
  area: "Cliffside Park",
  price: 1049000,
  beds: 5,
  baths: 3,
  sqft: 2450,
  tag: "Duplex",
  img: u("1568605114967-8130f3a36994"),
};

export const FEATURED: Listing = {
  ...detail(FEATURED_RAW, 0),
  openHouse: "Sat 1–3 PM",
};
export const LISTINGS: Listing[] = RAW_LISTINGS.map((r, i) => detail(r, i + 1));
export const ALL_LISTINGS: Listing[] = [FEATURED, ...LISTINGS];
export const getListing = (slug: string) => ALL_LISTINGS.find((l) => l.slug === slug);

export type SoldHome = {
  id: string;
  area: string;
  type: string;
  img: string;
  listPrice: number;
  soldPrice: number;
  days: number;
};

export const SOLD: SoldHome[] = [
  {
    id: "s1",
    area: "Fort Lee, NJ",
    type: "Condo",
    img: u("1512917774080-9991f1c4c750"),
    listPrice: 519000,
    soldPrice: 541000,
    days: 12,
  },
  {
    id: "s2",
    area: "Cliffside Park, NJ",
    type: "Single-family",
    img: u("1600047509807-ba8f99d2cdde"),
    listPrice: 729000,
    soldPrice: 752000,
    days: 9,
  },
  {
    id: "s3",
    area: "Edgewater, NJ",
    type: "Townhouse",
    img: u("1600573472550-8090b5e0745e"),
    listPrice: 880000,
    soldPrice: 880000,
    days: 21,
  },
];

export type Review = { id: string; quote: string; who: string; role: string; area: string };

// Sample reviews. Replace with Amanda's real client words (Instagram / TikTok).
export const REVIEWS: Review[] = [
  { id: "r1", quote: "Amanda priced our home right and we had offers within the first weekend. She kept us calm the whole way.", who: "Sample client", role: "Seller", area: "Fort Lee" },
  { id: "r2", quote: "She explained every step and found us a place we would never have found on our own. First-time buyers, zero stress.", who: "Sample client", role: "First-time buyer", area: "Edgewater" },
  { id: "r3", quote: "Clear communication, fast replies and a great eye for multi-family. Exactly what an investor wants.", who: "Sample client", role: "Investor", area: "Cliffside Park" },
];

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
