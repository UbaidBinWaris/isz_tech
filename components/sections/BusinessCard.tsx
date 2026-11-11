import { FoilFrame } from "@/components/brand/FoilFrame";
import { FoilRule } from "@/components/brand/FoilRule";
import { ShieldMark } from "@/components/brand/ShieldMark";
import { CardTilt } from "@/components/sections/CardTilt";
import { CARD_SERVICE_LINE, FOUNDER, MAILTO, PHONES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Below md the service line is set in two rows. This is the first item of the second row. */
const SECOND_ROW_START = Math.ceil(CARD_SERVICE_LINE.length / 2);

/* 44px tall for a finger; under a mouse the lines close up to the card's tighter setting. */
const CONTACT_LINK =
  "inline-flex min-h-11 items-center text-gold-bright underline-offset-4 hover:underline pointer-fine:min-h-8";

/** The printed business card, rebuilt as live HTML. Holds the page's only h1. */
export function BusinessCard(): React.JSX.Element {
  return (
    <CardTilt className="rounded-sm bg-card p-2 shadow-2xl shadow-black/80 inset-shadow-2xs inset-shadow-foreground/10 sm:p-4 md:p-6">
      <FoilFrame className="px-2 py-8 text-center sm:px-8">
        <ShieldMark className="mx-auto h-24 w-auto sm:h-32" />

        {/* Capped below sm so the name always breaks as "ISZ Tech / Consulting" rather than nearly touching the frame. */}
        <h1
          id="hero-title"
          className="mx-auto mt-2 max-w-64 font-display text-4xl font-semibold leading-tight text-foil sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {SITE.name}
        </h1>

        <FoilRule className="mx-auto mt-4 w-4/5 max-w-md lg:max-w-lg" />

        {/*
         * One row from md, as printed. Below that the ::after pseudo-element is a
         * full-width flex item ordered between the two halves, which forces the
         * break without adding an element to the list.
         * From lg the type steps up to the printed proportions: the service line
         * runs as wide as the wordmark, and the founder block carries more weight.
         */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-gold-bright after:order-1 after:h-0 after:basis-full after:content-[''] sm:text-base md:after:hidden lg:text-xl">
          {CARD_SERVICE_LINE.map((service, index) => (
            <li
              key={service}
              className={cn(
                "flex items-center whitespace-nowrap",
                index >= SECOND_ROW_START && "order-2",
              )}
            >
              {index > 0 ? (
                <span
                  aria-hidden
                  className={cn(
                    "mx-2 size-1 shrink-0 rounded-full bg-gold",
                    index === SECOND_ROW_START && "hidden md:block",
                  )}
                />
              ) : null}
              {service}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 w-fit text-left sm:mt-10">
          <p className="text-xs font-medium uppercase tracking-widest text-gold sm:text-sm">
            {FOUNDER.role}
          </p>
          <p className="mt-1 text-3xl font-semibold leading-tight text-gold-bright sm:mt-2 sm:text-4xl lg:text-5xl">
            {FOUNDER.name}
          </p>
          <address className="mt-1 text-base font-medium not-italic text-gold sm:text-lg lg:text-2xl">
            <ul>
              {PHONES.map((phone) => (
                <li key={phone.e164}>
                  Phone:{" "}
                  <a href={`tel:${phone.e164}`} className={CONTACT_LINK}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                Email:{" "}
                <a href={MAILTO} className={CONTACT_LINK}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </address>
        </div>
      </FoilFrame>
    </CardTilt>
  );
}
