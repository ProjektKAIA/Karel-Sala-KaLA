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
    default:
      "KaLa Automobile – Autoankauf Nürnberg, Eckental, Erlangen & Fürth | Sofort Bargeld & kostenlose Abholung",
    template: "%s | KaLa Automobile – Autoankauf Nürnberg",
  },
  description:
    "Autoankauf Nürnberg, Eckental, Erlangen, Fürth & Mittelfranken ✓ Faire Höchstpreise ✓ Sofortige Barzahlung oder Echtzeitüberweisung ✓ Kostenlose Abholung & Abmeldung ✓ Ankauf aller Fahrzeuge – auch Unfallwagen & ohne TÜV ☎ 0178 4096050",
  keywords: [
    "Autoankauf Nürnberg",
    "Autoankauf Eckental",
    "Autoankauf Erlangen",
    "Autoankauf Fürth",
    "Autoankauf Schwabach",
    "Autoankauf Herzogenaurach",
    "Autoankauf Heroldsberg",
    "Autoankauf Lauf an der Pegnitz",
    "Autoankauf Mittelfranken",
    "Autoankauf Nürnberger Land",
    "Autoankauf Metropolregion Nürnberg",
    "Autoankauf Franken",
    "Autoankauf Bayern",
    "Auto verkaufen Nürnberg",
    "Auto verkaufen Eckental",
    "Auto verkaufen Erlangen",
    "Auto verkaufen Fürth",
    "Gebrauchtwagen Ankauf Nürnberg",
    "KFZ Ankauf Nürnberg",
    "PKW Ankauf Nürnberg",
    "Unfallwagen Ankauf Nürnberg",
    "Unfallwagen verkaufen Nürnberg",
    "Auto mit Motorschaden verkaufen Nürnberg",
    "Auto ohne TÜV verkaufen Nürnberg",
    "Autoankauf sofort Bargeld",
    "Autoankauf kostenlose Abholung",
    "Autoankauf mit Abmeldung",
    "Auto Barzahlung Nürnberg",
    "Fahrzeug verkaufen Nürnberg",
    "KaLa Automobile",
    "Karel Sala",
    "Auto Abmeldung Eckental",
    "Autoankauf Raum Nürnberg",
    "Autoankauf Großraum Nürnberg",
    "Autoankauf Nürnberg und Umgebung",
    "Was ist mein Auto wert Nürnberg",
    "Fahrzeugbewertung Nürnberg kostenlos",
    "Auto schnell verkaufen Nürnberg",
    "Diesel Ankauf Nürnberg",
    "Firmenwagen Ankauf Nürnberg",
    "Transporter Ankauf Nürnberg",
    "Autoankauf Landkreis Erlangen-Höchstadt",
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
    title:
      "KaLa Automobile – Autoankauf Nürnberg, Eckental, Erlangen & Fürth | Sofort Bargeld",
    description:
      "Wir kaufen Ihr Auto zum Höchstpreis! Sofortige Barzahlung oder Echtzeitüberweisung, kostenlose Abholung & Abmeldung in Nürnberg, Eckental, Erlangen, Fürth und ganz Mittelfranken. Auch Unfallwagen & Fahrzeuge ohne TÜV.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KaLa Automobile – Autoankauf Nürnberg Eckental Erlangen Fürth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KaLa Automobile – Autoankauf Nürnberg & Eckental | Sofort Bargeld",
    description:
      "Faire Höchstpreise, sofortige Barzahlung oder Echtzeitüberweisung, kostenlose Abholung & Abmeldung. Ankauf aller Fahrzeuge in Nürnberg und Umgebung.",
  },
  alternates: {
    canonical: "https://kala-automobile.de",
    languages: {
      "de-DE": "https://kala-automobile.de",
    },
  },
  other: {
    "geo.region": "DE-BY",
    "geo.placename": "Eckental, Nürnberg, Erlangen, Fürth",
    "geo.position": "49.567;11.238",
    ICBM: "49.567, 11.238",
    "format-detection": "telephone=yes",
    "dc.title": "KaLa Automobile – Autoankauf Nürnberg & Eckental",
    "dc.creator": "Karel Sala",
    "dc.language": "de",
    "dc.coverage": "Nürnberg, Eckental, Erlangen, Fürth, Mittelfranken, Bayern, Deutschland",
    "revisit-after": "7 days",
    "content-language": "de",
  },
};

/* ───── Structured Data: AutoDealer (Primary) ───── */
const autoDealer = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": "https://kala-automobile.de/#organization",
  name: "KaLa Automobile",
  legalName: "KaLa Automobile – Karel Sala",
  alternateName: ["Karel Sala Automobile", "KaLA", "Kala Automobile Eckental"],
  description:
    "Autoankauf in Nürnberg, Eckental, Erlangen, Fürth und Mittelfranken. Wir kaufen Ihr Auto zum Höchstpreis – sofortige Barzahlung oder Echtzeitüberweisung, kostenlose Abholung und Abmeldung. Ankauf aller Fahrzeuge: Gebrauchtwagen, Unfallwagen, Fahrzeuge ohne TÜV, mit Motorschaden oder hohem Kilometerstand.",
  url: "https://kala-automobile.de",
  telephone: "+491784096050",
  email: "k.sala@kala-automobile.de",
  image: "https://kala-automobile.de/og-image.jpg",
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
    { "@type": "City", name: "Herzogenaurach" },
    { "@type": "City", name: "Heroldsberg" },
    { "@type": "City", name: "Lauf an der Pegnitz" },
    { "@type": "City", name: "Forchheim" },
    { "@type": "City", name: "Bamberg" },
    { "@type": "City", name: "Ansbach" },
    { "@type": "City", name: "Neumarkt in der Oberpfalz" },
    { "@type": "AdministrativeArea", name: "Mittelfranken" },
    { "@type": "AdministrativeArea", name: "Nürnberger Land" },
    { "@type": "AdministrativeArea", name: "Landkreis Erlangen-Höchstadt" },
    { "@type": "AdministrativeArea", name: "Metropolregion Nürnberg" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Bargeld, Barzahlung, Echtzeitüberweisung, Überweisung",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Autoankauf",
        description:
          "Ankauf von Gebrauchtwagen, Unfallwagen, Fahrzeugen ohne TÜV, mit Motorschaden oder Getriebeschaden in Nürnberg, Eckental und Umgebung.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "KFZ-Abmeldung",
        description:
          "Kostenlose Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle nach dem Ankauf.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fahrzeugabholung",
        description:
          "Kostenlose Abholung Ihres Fahrzeugs – auch wenn es nicht mehr fahrbereit ist.",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Markus T." },
      reviewBody:
        "Super unkompliziert und fair. Innerhalb von 24 Stunden hatte ich ein Angebot und zwei Tage später war das Auto abgeholt. Barzahlung wie versprochen!",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sandra K." },
      reviewBody:
        "Mein Auto war nicht mehr fahrbereit und wurde trotzdem abgeholt. Schnelle Kommunikation und ein fairer Preis. Kann ich nur weiterempfehlen.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Andreas W." },
      reviewBody:
        "Endlich ein Autohändler, der hält was er verspricht. Alles transparent, keine versteckten Kosten und die Abwicklung ging blitzschnell.",
    },
  ],
  sameAs: ["https://wa.me/491784096050"],
};

/* ───── Structured Data: WebSite ───── */
const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KaLa Automobile",
  alternateName: "KaLA Autoankauf Nürnberg",
  url: "https://kala-automobile.de",
  inLanguage: "de-DE",
};

/* ───── Structured Data: FAQPage ───── */
const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist die Besichtigung beim Autoankauf wirklich kostenlos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, absolut. Die Besichtigung, Abholung und alle Dokumente sind komplett kostenfrei. Es entstehen keine Folgekosten. KaLa Automobile bietet in Nürnberg, Eckental und Umgebung eine 100% kostenlose Fahrzeugbewertung an.",
      },
    },
    {
      "@type": "Question",
      name: "Kaufen Sie auch Unfallfahrzeuge und Autos ohne TÜV in Nürnberg an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir kaufen Autos aller Art – auch Unfallfahrzeuge, Fahrzeuge ohne TÜV, mit Motorschaden oder Getriebeschaden. Die Abholung ist in Nürnberg, Erlangen, Fürth, Eckental und ganz Mittelfranken inklusive.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell erhalte ich ein Angebot für mein Auto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel innerhalb von 24 Stunden nach Eingang Ihrer Anfrage. Kontaktieren Sie uns per Telefon, WhatsApp oder Formular für eine schnelle Fahrzeugbewertung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie läuft die Bezahlung beim Autoankauf ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sie erhalten Ihr Geld sofort in Bar oder per Echtzeitüberweisung bei Übergabe des Fahrzeugs. Dazu erhalten Sie einen gesetzlichen Kaufvertrag. Die Bezahlung erfolgt direkt vor Ort – in Nürnberg, Eckental oder wo immer Sie sich befinden.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Gewährleistungspflichten für mich als Verkäufer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Sie verkaufen ohne Garantie- und Gewährleistungspflicht. Das gesamte Risiko liegt bei KaLa Automobile.",
      },
    },
    {
      "@type": "Question",
      name: "Werden meine Daten an Dritte weitergegeben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Wir arbeiten ohne Zwischenhändler und geben keine Daten an Dritte weiter. Ihre Daten bleiben ausschließlich bei KaLa Automobile.",
      },
    },
    {
      "@type": "Question",
      name: "Übernehmen Sie die Abmeldung meines Fahrzeugs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir kümmern uns um die komplette Abmeldung bei der Zulassungsstelle – kostenfrei und ohne Aufwand für Sie. Sie erhalten einen Nachweis der Abmeldung per E-Mail oder Post.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich KaLa Automobile auch per WhatsApp erreichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja! Sie können uns jederzeit per WhatsApp unter 0178 4096050 kontaktieren. Fotos vom Fahrzeug können Sie uns direkt zusenden für eine schnelle Bewertung.",
      },
    },
    {
      "@type": "Question",
      name: "In welchen Städten bietet KaLa Automobile Autoankauf an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KaLa Automobile kauft Fahrzeuge in Nürnberg, Eckental, Erlangen, Fürth, Schwabach, Herzogenaurach, Heroldsberg, Lauf an der Pegnitz, Forchheim, Bamberg und der gesamten Metropolregion Nürnberg an. Kostenlose Abholung in ganz Mittelfranken.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Fahrzeuge kauft KaLa Automobile an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir kaufen alle Fahrzeuge: Gebrauchtwagen, Unfallfahrzeuge, Autos ohne TÜV, mit Motorschaden, Getriebeschaden, hohem Kilometerstand, Diesel, Benziner, Elektro, Hybrid, Transporter und Firmenwagen. Alle Marken und Modelle.",
      },
    },
  ],
};

/* ───── Structured Data: BreadcrumbList ───── */
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://kala-automobile.de",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="alternate" hrefLang="de-DE" href="https://kala-automobile.de" />
        <link rel="alternate" hrefLang="x-default" href="https://kala-automobile.de" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealer) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
