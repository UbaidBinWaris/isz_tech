/**
 * Single source of truth for everything the page says. Edit wording here.
 * Facts (name, founder, phones, email, the four services) come straight from
 * the business card. Descriptive copy and quotes are draft wording to confirm.
 */

export interface Phone {
  /** Country the dial code belongs to. */
  country: string;
  /** Human-readable, exactly as printed on the card. */
  display: string;
  /** E.164, for `tel:` links. */
  e164: string;
}

export interface Service {
  id: string;
  name: string;
  summary: string;
  includes: string[];
}

export interface ApproachStep {
  name: string;
  detail: string;
}

export interface Commitment {
  term: string;
  detail: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  name: "ISZ Tech Consulting",
  shortName: "ISZ Tech",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iszsolution.com",
  description:
    "ISZ Tech Consulting provides IT consulting, cyber security services, IT support and IT solutions for businesses in Saudi Arabia and the UAE.",
  email: "info@iszsolution.com",
  vcardPath: "/zohaib-idrees.vcf",
} as const;

/** Pull quotes. Rendered inside quotation marks, so do not type the marks here. */
export const QUOTES = {
  hero: "Secure, reliable IT for businesses across Saudi Arabia and the UAE.",
  founder:
    "Good IT is the kind you never have to think about: secure, dependable and ready when you need it.",
  contact: "The best IT partnerships start with a simple conversation.",
} as const;

/** Section headings and the line under each. */
export const SECTIONS = {
  services: {
    title: "Our services",
    lead: "Four core services. Take one on its own, or all four together.",
  },
  approach: {
    title: "How we work",
    lead: "A clear process, from the first conversation to ongoing support.",
  },
  founder: {
    title: "Meet the founder",
  },
  contact: {
    title: "Get in touch",
    lead: "Call or email to discuss what your business needs.",
  },
} as const;

export const FOUNDER = {
  name: "Zohaib Idrees",
  role: "CEO & Founder",
  bio: "Zohaib Idrees is the founder and CEO of ISZ Tech Consulting. He started the company to give businesses in Saudi Arabia and the UAE straightforward IT advice, strong security and dependable support.",
} as const;

export const COMMITMENTS: Commitment[] = [
  { term: "Clear communication", detail: "Straightforward advice in plain language." },
  { term: "One point of contact", detail: "A single person accountable for your project." },
  { term: "Documented handover", detail: "Every project ends with clear documentation for your team." },
];

export const PHONES: Phone[] = [
  { country: "Saudi Arabia", display: "+966 59 635 4725", e164: "+966596354725" },
  { country: "United Arab Emirates", display: "+971 50 786 9791", e164: "+971507869791" },
];

/** The service line exactly as it is printed on the card. */
export const CARD_SERVICE_LINE: string[] = [
  "IT Consultant",
  "Cyber Security Services",
  "IT Support",
  "IT Solutions",
];

export const SERVICES: Service[] = [
  {
    id: "it-consulting",
    name: "IT Consulting",
    summary: "Clear, practical advice on the technology your business needs, and a plan to get there.",
    includes: [
      "IT assessment and audit",
      "Technology roadmap and budgeting",
      "Vendor and licence review",
    ],
  },
  {
    id: "cyber-security",
    name: "Cyber Security Services",
    summary: "Protection for your data, systems and people against modern threats.",
    includes: [
      "Security assessment and testing",
      "Firewall, endpoint and email protection",
      "Backup and incident response planning",
    ],
  },
  {
    id: "it-support",
    name: "IT Support",
    summary: "Fast, dependable help whenever your team needs it.",
    includes: [
      "Remote and on-site helpdesk",
      "Monitoring, patching and maintenance",
      "User and device setup",
    ],
  },
  {
    id: "it-solutions",
    name: "IT Solutions",
    summary: "Networks, servers and cloud systems designed, installed and fully documented.",
    includes: [
      "Network and Wi-Fi design and installation",
      "Cloud and email migration",
      "Servers, storage and backup",
    ],
  },
];

/** A real sequence: each step happens after the one before it. */
export const APPROACH: ApproachStep[] = [
  {
    name: "Assess",
    detail: "We review your current systems and identify the risks, gaps and costs.",
  },
  {
    name: "Plan",
    detail: "You receive a written scope with priorities, timelines and a clear quote.",
  },
  {
    name: "Implement",
    detail: "We carry out the work with minimal disruption and test it before handover.",
  },
  {
    name: "Support",
    detail: "We stay available, with monitoring and maintenance to keep everything running.",
  },
];

export const NAV: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent("Consultation request")}`;
