import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Autoankauf Lauf an der Pegnitz – Sofort Bargeld & kostenlose Abholung",
  description:
    "Autoankauf Lauf an der Pegnitz ✓ Faire Höchstpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Fahrzeuge ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/autoankauf-lauf-an-der-pegnitz",
  },
};

export default function AutoankaufLauf() {
  return (
    <CityPage
      city="Lauf an der Pegnitz"
      region="Nürnberger Land"
      headline="Autoankauf Lauf a.d. Pegnitz – Einfach, fair & sofort"
      intro="Auto in Lauf an der Pegnitz verkaufen? KaLa Automobile kauft Ihr Fahrzeug zu fairen Preisen – mit sofortiger Barzahlung und kostenloser Abholung."
      distanceInfo="Lauf an der Pegnitz liegt in direkter Nachbarschaft zu Eckental – wir sind in ca. 10 Minuten bei Ihnen vor Ort."
      localInfo="Als Kreisstadt des Nürnberger Landes ist Lauf an der Pegnitz eines unserer Kerngebiete. Ob in der Altstadt, in Schönberg, Simonshofen, Heuchling oder Neunhof – wir kommen direkt zu Ihnen. Die kurze Entfernung ermöglicht besonders schnelle Besichtigungstermine, oft noch am selben Tag."
      zipCodes="91207 Lauf an der Pegnitz, 91217 Hersbruck, 91224 Pommelsbrunn"
    />
  );
}
