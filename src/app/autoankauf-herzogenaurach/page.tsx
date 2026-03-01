import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Autoankauf Herzogenaurach – Sofort Bargeld & kostenlose Abholung",
  description:
    "Autoankauf Herzogenaurach ✓ Faire Höchstpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Fahrzeuge – auch Unfallwagen & ohne TÜV ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/autoankauf-herzogenaurach",
  },
};

export default function AutoankaufHerzogenaurach() {
  return (
    <CityPage
      city="Herzogenaurach"
      region="Landkreis Erlangen-Höchstadt"
      headline="Autoankauf Herzogenaurach – Einfach, fair & sofort"
      intro="Autoankauf in Herzogenaurach: KaLa Automobile bietet faire Höchstpreise, sofortige Barzahlung und kostenlose Abholung direkt bei Ihnen in Herzogenaurach."
      distanceInfo="Von Eckental nach Herzogenaurach sind es nur ca. 20 Minuten. Wir kommen gerne zu Ihnen für eine kostenlose Bewertung Ihres Fahrzeugs."
      localInfo="Herzogenaurach, bekannt als Heimat von adidas und Puma, ist für uns ein wichtiges Einzugsgebiet im Landkreis Erlangen-Höchstadt. Ob in der Innenstadt, in Niederndorf, Hammerbach oder den umliegenden Gemeinden wie Weisendorf und Heßdorf – wir kaufen Ihr Auto schnell und unkompliziert."
      zipCodes="91074 Herzogenaurach, 91085 Weisendorf, 91093 Heßdorf"
    />
  );
}
