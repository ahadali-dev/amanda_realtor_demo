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
};

export const HERO_IMG = u("1564013799919-ab600027ffc6");
export const HERO_COLLAGE = [
  { img: u("1600596542815-ffad4c1539a9"), label: "Fairview", price: 849000 },
  { img: u("1560448204-e02f11c3d0e2"), label: "Cliffside Park", price: 565000 },
];

export const FEATURED = {
  title: "Cliffside Park Duplex",
  area: "Cliffside Park, NJ",
  price: 1049000,
  gallery: [
    u("1568605114967-8130f3a36994"),
    u("1560448204-e02f11c3d0e2"),
    u("1502672260266-1c1ef2d93688"),
    u("1600585154340-be6161a56a0c"),
  ],
};

export const LISTINGS: Listing[] = [
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

export type SoldHome = {
  id: string;
  area: string;
  type: string;
  img: string;
  listPrice: number;
  soldPrice: number;
  days: number;
  role: string;
  quote: string;
  who: string;
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
    role: "Seller",
    quote: "Sample review: Amanda priced it right and we had offers within the first weekend.",
    who: "Sample client",
  },
  {
    id: "s2",
    area: "Cliffside Park, NJ",
    type: "Single-family",
    img: u("1600047509807-ba8f99d2cdde"),
    listPrice: 729000,
    soldPrice: 752000,
    days: 9,
    role: "Seller",
    quote: "Sample review: Clear communication the whole way. Closed over asking without the stress.",
    who: "Sample client",
  },
  {
    id: "s3",
    area: "Edgewater, NJ",
    type: "Townhouse",
    img: u("1600573472550-8090b5e0745e"),
    listPrice: 880000,
    soldPrice: 880000,
    days: 21,
    role: "First-time buyer",
    quote: "Sample review: She explained every step and found us a place we'd never have found alone.",
    who: "Sample client",
  },
];

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
