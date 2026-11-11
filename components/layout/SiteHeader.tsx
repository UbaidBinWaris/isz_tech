import { ShieldMark } from "@/components/brand/ShieldMark";
import { MobileNav } from "@/components/layout/MobileNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NAV, SITE } from "@/lib/site";

/** Sticky top bar: the mark and name on the left, the section links and the contact action on the right. */
export function SiteHeader(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center gap-2 transition-colors duration-150 hover:text-gold-bright"
        >
          <ShieldMark detailed={false} className="h-8 w-auto" />
          <span className="font-display text-xl font-semibold whitespace-nowrap">{SITE.name}</span>
        </a>

        {/* The gaps stay tight until lg: the name, four links and the button only just share a 768px bar. */}
        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex lg:gap-8">
          <ul className="flex items-center gap-4 lg:gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-150 hover:text-gold-bright"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink variant="outline" href="#contact" className="shrink-0 whitespace-nowrap">
            Request a consultation
          </ButtonLink>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
