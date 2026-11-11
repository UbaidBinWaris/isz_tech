import { Section } from "@/components/layout/Section";
import { APPROACH } from "@/lib/site";

/**
 * The engagement as a numbered sequence on one rail: across the top from lg up,
 * down the left edge below that.
 */
export function Approach(): React.JSX.Element {
  return (
    <Section
      id="approach"
      title="How an engagement runs"
      lead="The same four steps every time, so you always know what happens next."
      className="border-t border-border/60"
    >
      {/*
        The numerals are decorative, so the order comes from the list itself. role="list" keeps
        the list semantics Safari drops once list-style is none.
      */}
      <ol role="list" className="lg:grid lg:grid-cols-4">
        {APPROACH.map((step, index) => (
          <li key={step.name} className="group flex gap-6 lg:flex-col">
            {/*
              The rail. Each step draws its own segment, and with no gap between steps the segments
              join into a single hairline. Below lg the lead-in (half the numeral's height, less
              half the diamond) puts the diamond level with the middle of the numeral.
            */}
            <div aria-hidden className="flex flex-col items-center lg:flex-row">
              <span className="h-5 w-px bg-gold/40 group-first:invisible lg:hidden" />
              <span className="size-2 shrink-0 rotate-45 bg-gold-bright" />
              <span className="w-px flex-1 bg-gold/40 lg:h-px lg:w-auto" />
            </div>
            <div className="pb-10 group-last:pb-0 lg:pr-8 lg:pb-0">
              {/* Cormorant defaults to old-style figures, where 1 reads as a small I. */}
              <span aria-hidden className="block w-fit font-display text-5xl text-foil lining-nums">
                {index + 1}
              </span>
              <h3 className="mt-2 font-sans text-xl font-medium text-foreground">{step.name}</h3>
              <p className="mt-2 max-w-md text-pretty text-muted-foreground">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
