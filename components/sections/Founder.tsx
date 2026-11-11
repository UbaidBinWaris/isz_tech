import { FoilRule } from "@/components/brand/FoilRule";
import { Section } from "@/components/layout/Section";
import { FOUNDER, SITE } from "@/lib/site";

interface Commitment {
  term: string;
  detail: string;
}

const COMMITMENTS: Commitment[] = [
  { term: "Plain language", detail: "Recommendations you can act on without a glossary." },
  { term: "One point of contact", detail: "The person who scopes your project stays on it." },
  { term: "Written handover", detail: "Every job ends with documentation your team keeps." },
];

/** The lower half of the card, unfolded: the founder's nameplate and what working with him means. */
export function Founder(): React.JSX.Element {
  return (
    <Section id="founder" title="Led by its founder" className="border-t border-border/60">
      <div className="grid gap-8 md:grid-cols-12">
        {/* The same lockup as the card: role above, name in the sans. Kept smaller than the section heading. */}
        <div className="md:col-span-5">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">{FOUNDER.role}</p>
          <h3 className="mt-2 text-3xl font-semibold leading-tight text-gold-bright md:text-4xl">
            {FOUNDER.name}
          </h3>
          <FoilRule className="mt-6 max-w-xs" />
        </div>

        {/* One measure for the column, so the list's hairlines end where the paragraph does. */}
        <div className="max-w-2xl md:col-span-7">
          <p className="max-w-prose text-lg leading-relaxed text-foreground">
            {FOUNDER.name} founded {SITE.name} and runs it as CEO. The phone numbers on this page are
            his. When you call, you are talking to the person accountable for the work, from the
            first conversation to the handover.
          </p>

          <dl className="mt-8">
            {COMMITMENTS.map(({ term, detail }) => (
              <div
                key={term}
                className="border-t border-gold/25 py-4 last:pb-0 lg:grid lg:grid-cols-5 lg:gap-6"
              >
                <dt className="font-medium text-foreground lg:col-span-2">{term}</dt>
                <dd className="mt-1 text-muted-foreground lg:col-span-3 lg:mt-0">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
