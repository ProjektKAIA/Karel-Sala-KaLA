import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Autoankauf Zirndorf – Sofort Bargeld & kostenlose Abholung",
  description:
    "Autoankauf Zirndorf ✓ Faire Höchstpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Fahrzeuge – auch Unfallwagen & ohne TÜV ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/autoankauf-zirndorf",
  },
};

export default function AutoankaufZirndorf() {
  return (
    <CityPage
      city="Zirndorf"
      region="Landkreis Fürth"
      headline="Autoankauf Zirndorf – Einfach, fair & sofort"
      intro="Autoankauf in Zirndorf gesucht? KaLa Automobile bietet Ihnen faire Preise, sofortige Barzahlung und kostenlose Abholung direkt in Zirndorf."
      distanceInfo="Von unserem Standort in Eckental erreichen wir Zirndorf in ca. 25 Minuten. Eine schnelle Besichtigung ist jederzeit möglich."
      localInfo="Zirndorf im Landkreis Fürth, bekannt durch die Playmobil-FunPark-Nähe, gehört zu unserem festen Einzugsgebiet. Ob in der Zirndorfer Innenstadt, Anwanden, Wintersdorf oder Weinzierlein – wir kommen zu Ihnen und kaufen Ihr Fahrzeug direkt vor Ort."
      zipCodes="90513 Zirndorf, 90522 Oberasbach, 90556 Cadolzburg"
    />
  );
}
