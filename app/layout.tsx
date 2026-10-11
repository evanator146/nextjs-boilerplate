import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionEffects } from "@/components/MotionEffects";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Myakka Green | Lawn Care & Mowing in North Port, FL (Demo)",
    template: "%s | Myakka Green Lawn & Landscape (Demo)",
  },
  description: site.description,
  keywords: ["North Port lawn care", "lawn mowing North Port FL", "landscaping Port Charlotte", "Venice lawn service", "hedge trimming", "weed control Florida"],
  openGraph: {
    title: "Myakka Green — Your Lawn. Our Craft.",
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: "Myakka Green (Demo)",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0c2a1a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Myakka Green Lawn & Landscape (fictional demo)",
  telephone: "+1-941-555-0187",
  areaServed: ["North Port, FL", "Port Charlotte, FL", "Venice, FL", "Englewood, FL"],
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal-on-scroll styles only when JS is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="sr-only z-[70] rounded-full bg-forest-900 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main" className="page-enter">{children}</main>
        <Footer />
        <MotionEffects />
      </body>
    </html>
  );
}
