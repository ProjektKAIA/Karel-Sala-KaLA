import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Autoankauf Forchheim – Sofort Bargeld & kostenlose Abholung",
  description:
    "Autoankauf Forchheim ✓ Faire Höchstpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Fahrzeuge – auch Unfallwagen & ohne TÜV ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/autoankauf-forchheim",
  },
};

export default function AutoankaufForchheim() {
  return (
    <CityPage
      city="Forchheim"
      region="Oberfranken"
      headline="Autoankauf Forchheim – Einfach, fair & sofort"
      intro="Sie möchten Ihr Auto in Forchheim verkaufen? KaLa Automobile kauft Ihr Fahrzeug zum Höchstpreis – mit sofortiger Barzahlung und kostenloser Abholung direkt in Forchheim."
      distanceInfo="Von unserem Standort in Eckental sind wir in nur ca. 25 Minuten bei Ihnen in Forchheim. Eine schnelle Besichtigung und Abholung ist jederzeit möglich."
      localInfo="Forchheim als Große Kreisstadt am Tor zur Fränkischen Schweiz ist für uns ein wichtiges Einzugsgebiet. Ob Sie in der Forchheimer Innenstadt, in Reuth, Burk, Buckenhofen oder den umliegenden Ortsteilen wohnen – wir kommen zu Ihnen und kaufen Ihr Auto direkt vor Ort."
      zipCodes="91301 Forchheim, 91330 Eggolsheim, 91336 Heroldsbach, 91352 Hallerndorf"
    />
  );
}
