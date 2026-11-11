/**
 * Single source of truth for everything the page says.
 * Facts (name, founder, phones, email, the four services) come straight from
 * the business card. Descriptive copy is draft wording to be confirmed.
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

export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  name: "ISZ Tech Consulting",
  shortName: "ISZ Tech",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iszsolution.com",
  tagline:
    "IT consulting, cyber security, support and solutions for businesses in Saudi Arabia and the UAE.",
  description:
    "ISZ Tech Consulting provides IT consulting, cyber security services, IT support and IT solutions for businesses in Saudi Arabia and the UAE.",
  email: "info@iszsolution.com",
  vcardPath: "/zohaib-idrees.vcf",
} as const;

export const FOUNDER = {
  name: "Zohaib Idrees",
  role: "CEO & Founder",
  initials: "ZI",
} as const;

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
    summary:
      "A clear plan for your technology: what to keep, what to replace, and what it will cost.",
    includes: [
      "Audit of your current systems",
      "Roadmap and budget for the next 12 months",
      "Review of vendors and licences",
    ],
  },
  {
    id: "cyber-security",
    name: "Cyber Security Services",
    summary: "Find the weak points before someone else does, then close them.",
    includes: [
      "Security assessment and testing",
      "Firewall, endpoint and email protection",
      "Backup and incident response planning",
    ],
  },
  {
    id: "it-support",
    name: "IT Support",
    summary:
      "Someone who answers when things stop working, and the upkeep that stops it happening twice.",
    includes: [
      "Remote and on-site helpdesk",
      "Monitoring, patching and maintenance",
      "Setup for new staff and devices",
    ],
  },
  {
    id: "it-solutions",
    name: "IT Solutions",
    summary:
      "Networks, servers, cloud and software installed properly and handed over documented.",
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
    detail: "We look at what you run today and where it is costing you time, money or risk.",
  },
  {
    name: "Plan",
    detail: "You get a written scope with priorities, timelines and a fixed quote.",
  },
  {
    name: "Implement",
    detail: "We do the work around your business hours and test it before handover.",
  },
  {
    name: "Support",
    detail: "We stay on call, with monitoring and maintenance to keep it running.",
  },
];

export const NAV: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent("Consultation request")}`;
