import { cn } from "@/lib/utils";

/** The card's divider: a gold hairline with a diamond at its centre. */
export function FoilRule({ className }: { className?: string }): React.JSX.Element {
  return (
    <div aria-hidden className={cn("flex items-center gap-2", className)}>
      <span className="h-px flex-1 bg-linear-to-r from-gold/10 to-gold" />
      <span className="size-1.5 rotate-45 bg-gold-bright" />
      <span className="h-px flex-1 bg-linear-to-l from-gold/10 to-gold" />
    </div>
  );
}
