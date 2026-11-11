"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** Where the mouse is over the card, as a 0–1 fraction measured from its top-left corner. */
interface PointerPosition {
  x: number;
  y: number;
}

const CENTRE: PointerPosition = { x: 0.5, y: 0.5 };
const MAX_TILT_DEG = 3;

function clampUnit(value: number): number {
  return Math.min(1, Math.max(0, value));
}

interface CardTiltProps {
  children: React.ReactNode;
  /** Classes for the card surface itself: stock colour, shadow, radius, padding. */
  className?: string;
}

/**
 * The one piece of motion on the site. Under a mouse the card leans a few
 * degrees away from the pointer and a glare follows it, like foil catching
 * light. On load a single band of light crosses the card once.
 */
export function CardTilt({ children, className }: CardTiltProps): React.JSX.Element {
  const [pointer, setPointer] = useState<PointerPosition | null>(null);
  const { x, y } = pointer ?? CENTRE;

  const style = {
    "--tilt-x": `${((0.5 - y) * 2 * MAX_TILT_DEG).toFixed(2)}deg`,
    "--tilt-y": `${((x - 0.5) * 2 * MAX_TILT_DEG).toFixed(2)}deg`,
    "--glare-x": `${(x * 100).toFixed(1)}%`,
    "--glare-y": `${(y * 100).toFixed(1)}%`,
  } as React.CSSProperties;

  // Measured against the wrapper, which never rotates, so the reading does not
  // shift as the card itself tilts.
  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>): void {
    if (event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: clampUnit((event.clientX - box.left) / box.width),
      y: clampUnit((event.clientY - box.top) / box.height),
    });
  }

  return (
    <div
      className="perspective-distant"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPointer(null)}
    >
      <div
        style={style}
        className={cn(
          "relative overflow-hidden rotate-x-(--tilt-x) rotate-y-(--tilt-y) transition-transform duration-150 ease-out motion-reduce:transform-none",
          className,
        )}
      >
        {children}

        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-radial-[circle_20rem_at_var(--glare-x)_var(--glare-y)] from-gold-bright/15 to-transparent transition-opacity duration-150 ease-out motion-reduce:hidden",
            pointer ? "opacity-100" : "opacity-0",
          )}
        />

        {/*
         * `animate-sheen` travels in multiples of this box's own width, so the box
         * is wide enough to start and finish clear of the card (including the tall
         * phone layout, where the skew reaches further). The light itself is only
         * the middle fifth of it.
         */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-y-1/4 left-0 w-3/5 animate-sheen bg-linear-to-r from-transparent from-40% via-gold-bright/25 to-transparent to-60% motion-reduce:hidden"
        />
      </div>
    </div>
  );
}
