import { useId } from "react";

const SHIELD =
  "M60 4C47 13 30 17 9 16V70C9 100 30 122 60 136C90 122 111 100 111 70V16C90 17 73 13 60 4Z";

/** Scales the shield outline about its centre without thinning the stroke. */
function inset(scale: number): string {
  return `translate(60 70) scale(${scale}) translate(-60 -70)`;
}

interface ShieldMarkProps {
  className?: string;
  /** Draw the circuit cube inside the shield. Turn off below roughly 40px. */
  detailed?: boolean;
  /** Accessible name. Omit when the mark sits next to the company name. */
  title?: string;
}

/**
 * The ISZ shield, redrawn from the business card: a foil outer shield, a hairline
 * inner shield, and a circuit-traced cube at the centre.
 */
export function ShieldMark({
  className,
  detailed = true,
  title,
}: ShieldMarkProps): React.JSX.Element {
  const gradientId = useId();
  const stroke = `url(#${gradientId})`;

  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="120" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--gold-bright)" />
          <stop offset="0.45" stopColor="var(--gold)" />
          <stop offset="0.7" stopColor="var(--gold-bright)" />
          <stop offset="1" stopColor="var(--gold-deep)" />
        </linearGradient>
      </defs>

      <g stroke={stroke} strokeLinejoin="round" strokeLinecap="round">
        <path d={SHIELD} strokeWidth="7" />
        <path d={SHIELD} strokeWidth="1.5" transform={inset(0.8)} vectorEffect="non-scaling-stroke" />
        <path d={SHIELD} strokeWidth="2.5" transform={inset(0.56)} vectorEffect="non-scaling-stroke" />

        {detailed ? (
          <g strokeWidth="1.6">
            {/* Cube outline and its three inner edges */}
            <path d="M60 43 80.8 55V79L60 91 39.2 79V55Z" />
            <path d="M39.2 55 60 67 80.800 55M60 67V91" />
            {/* Top face: the diamond eye */}
            <path d="M60 49 70.4 55 60 61 49.6 55Z" />
            {/* Side faces: circuit traces */}
            <path d="M44.400 62V78M49.6 61.500V82M54.800 68V87" />
            <path d="M75.600 62V78M70.4 61.500V82M65.200 68V87" />
          </g>
        ) : (
          <path d="M60 50 75.6 59V77L60 86 44.4 77V59ZM44.4 59 60 68 75.6 59M60 68V86" strokeWidth="3" />
        )}
      </g>
    </svg>
  );
}
