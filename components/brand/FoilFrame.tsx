import { cn } from "@/lib/utils";

const CORNERS = [
  "left-0 top-0",
  "right-0 top-0 -scale-x-100",
  "left-0 bottom-0 -scale-y-100",
  "right-0 bottom-0 -scale-100",
];

function Flourish({ className }: { className: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={cn("absolute m-1.5 size-3.5 text-gold", className)}
    >
      <path d="M2 2 13 13M2 2C7 2.5 10.5 5 11 9.5M2 2C2.5 7 5 10.5 9.5 11" />
    </svg>
  );
}

interface FoilFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The card's border: a heavy foil rule, a hairline inside it, and a small
 * flourish in each inner corner. Put padding on `className`.
 */
export function FoilFrame({ children, className }: FoilFrameProps): React.JSX.Element {
  return (
    <div className="relative border-2 border-foil p-1.5 sm:p-2">
      <div className={cn("relative border border-gold/60", className)}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {CORNERS.map((corner) => (
            <Flourish key={corner} className={corner} />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
