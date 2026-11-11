import { Section } from "@/components/layout/Section";
import { SERVICES } from "@/lib/site";

/** The four services as a ruled ledger: the name on the left, what it covers on the right. */
export function Services(): React.JSX.Element {
  return (
    <Section
      id="services"
      title="What we do"
      lead="Four services, the same four printed on our card. Take one, or all of them together."
    >
      {/* role="list" keeps the list semantics Safari drops once list-style is none. */}
      <ul role="list" className="border-b border-gold/25">
        {SERVICES.map((service) => (
          <li
            key={service.id}
            id={service.id}
            className="grid gap-y-4 border-t border-gold/25 py-8 md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-10"
          >
            <h3 className="font-display text-2xl leading-tight font-semibold text-balance text-gold-bright md:col-span-4 md:text-3xl">
              {service.name}
            </h3>
            <div className="md:col-span-8">
              <p className="max-w-xl text-lg text-pretty text-foreground">{service.summary}</p>
              <ul role="list" className="mt-4 flex flex-col gap-2 text-muted-foreground">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    {/* One line tall, so the diamond stays on the first line if an item wraps. */}
                    <span aria-hidden className="flex h-lh shrink-0 items-center">
                      <span className="size-1.5 rotate-45 bg-gold" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
