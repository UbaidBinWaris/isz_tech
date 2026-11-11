import { Quote } from "@/components/brand/Quote";
import { BusinessCard } from "@/components/sections/BusinessCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { QUOTES, SITE } from "@/lib/site";

/** The hero is the business card itself, with one quoted line and the two things to do next. */
export function Hero(): React.JSX.Element {
  return (
    <section id="top" aria-labelledby="hero-title" className="px-6 pt-12 pb-16 md:pb-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <div className="w-full">
          <BusinessCard />
        </div>

        <Quote className="mt-8 max-w-xl text-center">{QUOTES.hero}</Quote>

        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <ButtonLink href="#contact">Request a consultation</ButtonLink>
          <ButtonLink variant="outline" href={SITE.vcardPath} download>
            Save contact card
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
