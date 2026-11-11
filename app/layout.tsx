import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

/* The card pairs a foil-stamped serif with a round geometric sans. These are the closest matches. */
const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = `${SITE.name} | IT consulting, cyber security and IT support`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">): React.JSX.Element {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      {/* Browser extensions add classes to <body> before React loads; this keeps that from reading as an error. */}
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-gold-bright"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
