import { cn } from "@/lib/utils";

interface QuoteProps {
  /** The words only. The quotation marks are added here. */
  children: string;
  /** Who said it. Omit for the company's own lines. */
  cite?: string;
  /** Set the type size and alignment here, e.g. `text-2xl md:text-3xl text-center`. */
  className?: string;
}

/** A pull quote in the display serif italic, the way a line is set off in print. */
export function Quote({ children, cite, className }: QuoteProps): React.JSX.Element {
  return (
    <figure className={cn("text-2xl md:text-3xl", className)}>
      <blockquote className="font-display leading-snug font-medium text-balance text-gold-bright italic">
        &ldquo;{children}&rdquo;
      </blockquote>
      {cite ? <figcaption className="mt-3 text-sm text-muted-foreground">{cite}</figcaption> : null}
    </figure>
  );
}
