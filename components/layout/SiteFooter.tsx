import { ShieldMark } from "@/components/brand/ShieldMark";
import { NAV, SITE } from "@/lib/site";

/** Closes the page: the mark, the section links again, and the rights line. */
export function SiteFooter(): React.JSX.Element {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <ShieldMark detailed={false} className="h-8 w-auto shrink-0" />
            <span className="font-display text-xl font-semibold text-foreground">{SITE.name}</span>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-gold-bright"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          &copy; {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
