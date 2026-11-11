type ClassValue = string | false | null | undefined;

/** Joins class names, dropping falsy entries so conditions can be written inline. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
