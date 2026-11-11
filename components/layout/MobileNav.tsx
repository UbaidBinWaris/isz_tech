"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NAV } from "@/lib/site";

const ICON_PATHS = {
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
} as const;

/** The primary nav below md: a menu button and the panel it opens under the header. */
export function MobileNav(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key !== "Escape") return;
      setOpen(false);
      // Focus may be on a link inside the panel, which is about to be hidden.
      toggleRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function close(): void {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="-mr-2 flex size-11 items-center justify-center rounded-sm text-gold-bright transition-colors duration-150 hover:bg-gold/10"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden
          className="size-6"
        >
          <path d={open ? ICON_PATHS.close : ICON_PATHS.menu} />
        </svg>
      </button>

      {/* Positioned against the sticky <header>, so it spans the viewport directly beneath the bar. */}
      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!open}
        className="absolute inset-x-0 top-full border-y border-border/60 bg-background px-6 pt-2 pb-6"
      >
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className="flex min-h-11 items-center text-base text-foreground transition-colors duration-150 hover:text-gold-bright"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink variant="outline" href="#contact" onClick={close} className="mt-4 w-full">
          Request a consultation
        </ButtonLink>
      </nav>
    </div>
  );
}
