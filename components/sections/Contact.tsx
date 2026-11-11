import { FoilFrame } from "@/components/brand/FoilFrame";
import { Quote } from "@/components/brand/Quote";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MAILTO, PHONES, QUOTES, SECTIONS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Hairlines sit between rows only; the frame already closes the top and bottom. */
const ROW = "border-t border-gold/25 py-4 first:border-t-0 first:pt-0 last:pb-0";

const LABEL = "text-sm text-muted-foreground";

const DETAIL_LINK =
  "inline-flex min-h-11 items-center font-sans text-2xl font-medium text-gold-bright underline-offset-4 hover:underline";

const [mailbox, domain] = SITE.email.split("@");

/** The contact lines from the card, on card stock, with the two ways to act on them. */
export function Contact(): React.JSX.Element {
  return (
    <Section
      id="contact"
      title={SECTIONS.contact.title}
      lead={SECTIONS.contact.lead}
      className="border-t border-border/60"
    >
      <div className="max-w-4xl bg-card">
        <FoilFrame className="p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:gap-0">
            <dl className="md:col-span-7 md:pr-8">
              {PHONES.map((phone) => (
                <div key={phone.e164} className={ROW}>
                  <dt className={LABEL}>{phone.country}</dt>
                  <dd>
                    <a href={`tel:${phone.e164}`} className={DETAIL_LINK}>
                      {phone.display}
                    </a>
                  </dd>
                </div>
              ))}
              <div className={ROW}>
                <dt className={LABEL}>Email</dt>
                <dd>
                  {/*
                   * The address is one unbreakable word. As two flex items it wraps after the "@"
                   * when it runs out of room; break-all is the last resort inside each half.
                   */}
                  <a
                    href={`mailto:${SITE.email}`}
                    className={cn(DETAIL_LINK, "flex-wrap break-all")}
                  >
                    <span>{mailbox}@</span>
                    <span>{domain}</span>
                  </a>
                </dd>
              </div>
            </dl>

            <div className="flex flex-col gap-4 border-t border-gold/25 pt-8 md:col-span-5 md:justify-center md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <Quote className="mb-4 text-xl md:text-2xl">{QUOTES.contact}</Quote>
              <ButtonLink href={MAILTO} className="w-full">
                Email {SITE.shortName}
              </ButtonLink>
              <ButtonLink variant="outline" href={SITE.vcardPath} download className="w-full">
                Save contact card
              </ButtonLink>
            </div>
          </div>
        </FoilFrame>
      </div>
    </Section>
  );
}
