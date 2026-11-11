import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FOUNDER, PHONES, SERVICES, SITE } from "@/lib/site";

/* Structured data: tells search engines who the business is, how to reach it and what it offers. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  image: `${SITE.url}/opengraph-image.jpg`,
  email: SITE.email,
  telephone: PHONES.map((phone) => phone.e164),
  areaServed: PHONES.map((phone) => ({ "@type": "Country", name: phone.country })),
  founder: { "@type": "Person", name: FOUNDER.name, jobTitle: FOUNDER.role },
  makesOffer: SERVICES.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.name, description: service.summary },
  })),
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <Approach />
        <Founder />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // "<" is escaped so no string in the data can close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
