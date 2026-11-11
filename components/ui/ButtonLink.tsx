import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 text-sm font-medium tracking-wide transition-[filter,background-color,border-color,color] duration-150";

const VARIANTS: Record<Variant, string> = {
  /* One per view: the filled foil button is the primary action. */
  primary: "bg-foil text-primary-foreground hover:brightness-110",
  outline: "border border-gold/60 text-gold-bright hover:border-gold-bright hover:bg-gold/10",
  ghost: "px-2 text-foreground underline-offset-4 hover:text-gold-bright hover:underline",
};

interface ButtonLinkProps extends ComponentProps<"a"> {
  variant?: Variant;
}

/** A link that looks like a button. Every action on this page navigates, so there is no <button> twin. */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps): React.JSX.Element {
  return <a className={cn(BASE, VARIANTS[variant], className)} {...props} />;
}
