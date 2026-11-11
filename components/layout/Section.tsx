import { cn } from "@/lib/utils";

interface SectionProps {
  /** Anchor target for the nav. Also namespaces the heading id. */
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
}

/** Shared section shell: same gutters, same measure, same heading treatment everywhere. */
export function Section({ id, title, lead, children, className }: SectionProps): React.JSX.Element {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className={cn("px-6 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-2xl">
          <h2
            id={headingId}
            className="font-display text-4xl font-semibold leading-tight text-foil md:text-5xl"
          >
            {title}
          </h2>
          {lead ? <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lead}</p> : null}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
