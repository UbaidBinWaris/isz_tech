import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * This is a one-page site. The home page is served; every other path is sent
 * back to it. (Next.js 16 renamed `middleware.ts` to `proxy.ts`.)
 *
 * The files below are the only other things the home page needs from the
 * server. Add a path here when you add a file the page must load.
 */
const ALLOWED_FILES = new Set([
  "/favicon.ico",
  "/icon.svg",
  "/opengraph-image.jpg",
  "/robots.txt",
  "/sitemap.xml",
  "/zohaib-idrees.vcf",
]);

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || ALLOWED_FILES.has(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // Skip Next.js internals (compiled JS, CSS, fonts, the image optimiser, dev tooling).
  matcher: ["/((?!_next/|__nextjs).*)"],
};
