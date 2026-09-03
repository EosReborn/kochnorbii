import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import CookieConsent from "@/components/CookieConsent";

// Self-hosted variable fontok next/font/local-lal: Bricolage Grotesque
// (display) és Instrument Sans (body), magyar ékezetes karakterekhez
// (latin-ext) is. Nincs futásidejű külső kérés a Google Fonts felé.
const bricolage = localFont({
  src: "../fonts/bricolage-grotesque-variable.woff2",
  variable: "--font-bricolage",
  display: "swap",
  weight: "200 800",
});

const instrument = localFont({
  src: "../fonts/instrument-sans-variable.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.jobTitle,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  worksFor: {
    "@type": "Organization",
    name: site.studio.name,
    url: site.studio.url,
  },
  sameAs: [site.social.linkedin, site.social.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="hu"
      className={`${bricolage.variable} ${instrument.variable} h-full`}
    >
      <body className="min-h-full bg-ink text-paper antialiased">
        <a href="#main" className="skip-link">
          Ugrás a tartalomra
        </a>
        {children}
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
