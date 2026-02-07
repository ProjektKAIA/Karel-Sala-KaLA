import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kala-automobile.de"),
  title: {
    default: "KaLa Automobile – Autoankauf Nürnberg & Eckental | Faire Preise & Barzahlung",
    template: "%s | KaLa Automobile",
  },
  description:
    "KaLa Automobile kauft Ihr Auto in Nürnberg, Eckental & Umgebung. Faire Preise, sofortige Barzahlung, kostenlose Abholung & Abmeldung. Ankauf aller Fahrzeuge – auch Unfallwagen. ☎ 0178 4096050",
  keywords: [
    "Autoankauf Nürnberg",
    "Autoankauf Eckental",
    "Auto verkaufen Nürnberg",
    "Auto verkaufen Eckental",
    "Gebrauchtwagen Ankauf",
    "Unfallwagen Ankauf",
    "Autoankauf Erlangen",
    "Autoankauf Fürth",
    "Autoankauf Mittelfranken",
    "KaLa Automobile",
    "Karel Sala",
    "Auto Barzahlung",
    "Fahrzeug verkaufen",
    "PKW Ankauf",
    "Auto Abmeldung",
    "Autoankauf sofort",
    "Autoankauf kostenlose Abholung",
  ],
  authors: [{ name: "KaLa Automobile – Karel Sala" }],
  creator: "KaLa Automobile",
  publisher: "KaLa Automobile",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kala-automobile.de",
    siteName: "KaLa Automobile",
    title: "KaLa Automobile – Autoankauf Nürnberg & Eckental",
    description:
      "Wir kaufen Ihr Auto! Faire Preise, sofortige Barzahlung, kostenlose Abholung & Abmeldung in Nürnberg, Eckental und Umgebung.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KaLa Automobile – Autoankauf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaLa Automobile – Autoankauf Nürnberg & Eckental",
    description:
      "Faire Preise, sofortige Barzahlung, kostenlose Abholung & Abmeldung.",
  },
  alternates: {
    canonical: "https://kala-automobile.de",
  },
  other: {
    "geo.region": "DE-BY",
    "geo.placename": "Eckental",
    "geo.position": "49.567;11.238",
    ICBM: "49.567, 11.238",
    "format-detection": "telephone=yes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "KaLa Automobile",
  alternateName: "Karel Sala Automobile",
  description:
    "Autoankauf in Nürnberg, Eckental und Umgebung. Faire Preise, sofortige Barzahlung, kostenlose Abholung und Abmeldung.",
  url: "https://kala-automobile.de",
  telephone: "+491784096050",
  email: "k.sala@kala-automobile.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Begonienstraße 1",
    addressLocality: "Eckental",
    postalCode: "90542",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.567,
    longitude: 11.238,
  },
  areaServed: [
    { "@type": "City", name: "Nürnberg" },
    { "@type": "City", name: "Eckental" },
    { "@type": "City", name: "Erlangen" },
    { "@type": "City", name: "Fürth" },
    { "@type": "City", name: "Schwabach" },
    { "@type": "AdministrativeArea", name: "Mittelfranken" },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: ["https://wa.me/491784096050"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans bg-bg text-text-primary leading-relaxed antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
