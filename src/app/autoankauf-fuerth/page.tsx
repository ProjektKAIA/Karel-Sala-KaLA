import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Autoankauf Fürth – Sofort Bargeld & kostenlose Abholung",
  description:
    "Autoankauf Fürth ✓ Faire Höchstpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Fahrzeuge – auch Unfallwagen & ohne TÜV ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/autoankauf-fuerth",
  },
};

export default function AutoankaufFuerth() {
  return (
    <CityPage
      city="Fürth"
      region="Mittelfranken"
      headline="Autoankauf Fürth – Einfach, fair & sofort"
      intro="Auto in Fürth verkaufen? KaLa Automobile kauft Ihr Fahrzeug zum fairen Preis – sofortige Barzahlung und kostenlose Abholung in Fürth und Umgebung."
      distanceInfo="Fürth liegt nur ca. 20 Minuten von unserem Standort in Eckental entfernt. Schnelle Besichtigungstermine und Abholung sind garantiert."
      localInfo="Fürth als Nachbarstadt von Nürnberg bietet mit seinen Stadtteilen wie Poppenreuth, Stadeln, Vach, Unterfarrnbach und der Südstadt ein grosses Einzugsgebiet für unseren Autoankauf-Service. Wir sind regelmässig in Fürth unterwegs und können Ihr Fahrzeug oft noch am selben Tag besichtigen."
      zipCodes="90762, 90763, 90765, 90766, 90768 Fürth"
    />
  );
}
