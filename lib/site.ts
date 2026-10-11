/**
 * Central content for the demo site. Everything here is FICTIONAL placeholder
 * content — the business, people, reviews and contact details do not exist.
 */

export const site = {
  name: "Myakka Green",
  legalName: "Myakka Green Lawn & Landscape (fictional)",
  tagline: "Lawn & Landscape",
  phone: "(941) 555-0187",
  phoneHref: "tel:+19415550187",
  email: "hello@myakkagreen.example",
  address: "Placeholder Address, North Port, FL",
  hours: [
    { days: "Mon – Fri", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  url: "https://example.com",
  description:
    "Myakka Green is a fictional demo lawn-care company serving North Port, Florida — weekly mowing, edging, weed control, hedge trimming and seasonal maintenance. Template website with placeholder content.",
};

export const serviceAreas = [
  "North Port",
  "Port Charlotte",
  "Venice",
  "Englewood",
  "Wellen Park",
  "Warm Mineral Springs",
  "Punta Gorda",
  "Rotonda West",
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export type IconName =
  | "mower"
  | "edger"
  | "sprout"
  | "leaf"
  | "hedge"
  | "calendar"
  | "shield"
  | "star"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "up"
  | "quote"
  | "sun"
  | "drop"
  | "award"
  | "users"
  | "heart"
  | "left"
  | "right"
  | "expand"
  | "spark"
  | "truck";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: IconName;
  features: string[];
  frequency: string;
};

export const services: Service[] = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing",
    short: "Crisp, striped cuts at the right height for St. Augustine, Bahia and Zoysia turf.",
    description:
      "Florida grass grows fast from April to October. Our crews mow on a consistent weekly or bi-weekly route, adjust blade height to your grass type, and alternate patterns so your lawn stays thick, healthy and photo-ready.",
    icon: "mower",
    features: ["Sharpened blades every week", "Height set for your turf type", "Clippings blown off hard surfaces", "Alternating stripe patterns"],
    frequency: "Weekly or bi-weekly",
  },
  {
    slug: "edging-trimming",
    title: "Edging & Trimming",
    short: "Razor-straight lines along driveways, sidewalks, beds and lanai cages.",
    description:
      "Clean edges are what make a lawn look professionally maintained. We hard-edge every concrete surface, string-trim around fences, mailboxes and pool cages, and keep bed lines defined.",
    icon: "edger",
    features: ["Hard-edged driveways & walks", "Detailed trimming around obstacles", "Bed-line definition", "Included with every mow"],
    frequency: "Every visit",
  },
  {
    slug: "weed-control",
    title: "Weed Control",
    short: "Targeted treatments for dollarweed, crabgrass and sedge common to Southwest Florida.",
    description:
      "Humid summers and sandy soil invite weeds. We identify what's growing, then apply targeted pre- and post-emergent treatments on a schedule built around Sarasota County fertilizer guidelines.",
    icon: "sprout",
    features: ["Pre- & post-emergent programs", "Spot treatment for sedge", "Bed weeding by hand", "Rainy-season compliant"],
    frequency: "Every 6–8 weeks",
  },
  {
    slug: "yard-cleanup",
    title: "Yard Cleanup",
    short: "Storm debris, palm fronds and overgrowth hauled away in a single visit.",
    description:
      "Whether you're preparing a home for sale, returning for the season, or recovering after a summer storm, our cleanup crews clear debris, cut back overgrowth, refresh beds and leave the property spotless.",
    icon: "leaf",
    features: ["Post-storm debris removal", "Palm frond & seed pod removal", "Overgrowth cut-back", "Haul-away included"],
    frequency: "One-time or seasonal",
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming",
    short: "Sculpted viburnum, ficus and podocarpus hedges with clean, even faces.",
    description:
      "We shape privacy hedges, foundation shrubs and ornamental plantings by hand and with precision trimmers — tapering tops for sunlight, squaring faces, and cleaning up every clipping.",
    icon: "hedge",
    features: ["Privacy & foundation hedges", "Ornamental shaping", "Palm skinning available", "Full clipping cleanup"],
    frequency: "Every 4–8 weeks",
  },
  {
    slug: "seasonal-maintenance",
    title: "Seasonal Maintenance",
    short: "A year-round plan tuned to North Port's wet and dry seasons.",
    description:
      "Our seasonal plans shift with the Gulf Coast calendar: aggressive growth care in the rainy season, irrigation checks and fertilization in spring, and mulch refreshes and pruning for the dry winter months.",
    icon: "calendar",
    features: ["Irrigation checks", "Mulch refresh", "Fertilization scheduling", "Snowbird property watch"],
    frequency: "Year-round plans",
  },
];

export const stats = [
  { value: 1200, suffix: "+", label: "Lawns maintained" },
  { value: 12, suffix: " yrs", label: "Serving the Gulf Coast" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 4.9, suffix: "★", label: "Average rating", decimals: 1 },
];

export const reasons = [
  { icon: "users" as IconName, title: "Same crew, every visit", text: "You get a dedicated route crew who learns your property — not a rotating cast of strangers." },
  { icon: "clock" as IconName, title: "On-time, on-schedule", text: "Text reminders the day before and a photo when we're done. No more wondering if we showed up." },
  { icon: "shield" as IconName, title: "Fully insured crews", text: "Uniformed, background-checked technicians with commercial-grade equipment." },
  { icon: "sun" as IconName, title: "Built for Florida turf", text: "We know St. Augustine, Bahia and Zoysia — and how they behave in July heat and August storms." },
];

export const reviews = [
  {
    name: "Danielle R.",
    area: "North Port · Heron Creek",
    text: "Our lawn finally looks like the ones in the magazines. The crew is polite, the edges are perfect, and they send a photo after every visit.",
  },
  {
    name: "Marcus T.",
    area: "Wellen Park",
    text: "We switched after our old company kept skipping weeks during the rainy season. These guys haven't missed once. The stripes are a nice bonus.",
  },
  {
    name: "Linda & Ray P.",
    area: "Venice",
    text: "We're up north half the year and they keep an eye on everything. Came home to a better-looking yard than when we left.",
  },
  {
    name: "Carlos M.",
    area: "Port Charlotte",
    text: "After the last storm they had our yard cleared in a day. Honest pricing, clear communication — exactly what you want.",
  },
  {
    name: "Jenna W.",
    area: "North Port · Bobcat Trail",
    text: "The weed control program actually worked. The dollarweed is gone and the St. Augustine is thicker than it's ever been.",
  },
];

export const team = [
  { name: "Daniel Reyes", role: "Founder & Operations", initials: "DR", bio: "Started with one mower and a pickup in 2014. Still walks every new property personally." },
  { name: "Alyssa Moore", role: "Client Care Manager", initials: "AM", bio: "Keeps routes on time and makes sure every call gets a same-day answer." },
  { name: "Tomás Herrera", role: "Lead Crew Supervisor", initials: "TH", bio: "Ten years of Florida turf experience and a serious eye for clean edges." },
  { name: "Grace Kim", role: "Turf Health Specialist", initials: "GK", bio: "Designs our weed control and fertilization programs around local guidelines." },
];

export const values = [
  { icon: "heart" as IconName, title: "Pride in the details", text: "We judge our work by the edges, the cleanup and the stripes — the things most crews skip." },
  { icon: "check" as IconName, title: "Do what we say", text: "Clear quotes, scheduled visits and no surprise fees. Reliability is the whole job." },
  { icon: "drop" as IconName, title: "Respect the watershed", text: "We follow local fertilizer guidelines to protect the Myakkahatchee Creek and Gulf waters." },
  { icon: "users" as IconName, title: "Neighbors first", text: "We live here too. Every lawn we cut is on a street we drive down." },
];
