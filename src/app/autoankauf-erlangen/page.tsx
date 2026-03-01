import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Autoankauf Erlangen – Sofort Bargeld & kostenlose Abholung",
  description:
    "Autoankauf Erlangen ✓ Faire Höchstpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Fahrzeuge – auch Unfallwagen & ohne TÜV ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/autoankauf-erlangen",
  },
};

export default function AutoankaufErlangen() {
  return (
    <CityPage
      city="Erlangen"
      region="Mittelfranken"
      headline="Autoankauf Erlangen – Einfach, fair & sofort"
      intro="Autoankauf in Erlangen gesucht? KaLa Automobile bietet Ihnen faire Höchstpreise mit sofortiger Barzahlung und kostenloser Abholung in ganz Erlangen."
      distanceInfo="Von Eckental nach Erlangen sind es nur ca. 15 Minuten – wir sind schnell bei Ihnen für eine kostenlose Fahrzeugbewertung vor Ort."
      localInfo="Erlangen als Universitätsstadt und Siemens-Standort hat einen lebhaften Automarkt. Egal ob Sie in der Erlanger Innenstadt, Büchenbach, Bruck, Alterlangen, Tennenlohe oder Eltersdorf wohnen – wir kaufen Ihr Fahrzeug direkt bei Ihnen. Besonders für Studenten und Berufstätige bieten wir einen schnellen und unkomplizierten Autoverkauf."
      zipCodes="91052, 91054, 91056, 91058 Erlangen"
    />
  );
}
