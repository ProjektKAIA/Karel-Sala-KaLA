import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von KaLa Automobile – Karel Sala, Begonienstraße 1, 90542 Eckental.",
  robots: { index: true, follow: true },
};

export default function Impressum() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-20 px-6 min-h-screen bg-bg-white">
        <article className="max-w-[800px] mx-auto">
          <h1 className="font-serif text-3xl mb-8">Impressum</h1>

          <div className="space-y-6 text-text-secondary leading-relaxed text-[0.95rem]">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Karel Sala<br />
                KaLa Automobile<br />
                Begonienstraße 1<br />
                90542 Eckental
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a href="tel:01784096050" className="text-accent no-underline hover:underline">
                  0178 4096050
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:k.sala@kala-automobile.de" className="text-accent no-underline hover:underline">
                  k.sala@kala-automobile.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [wird nachgetragen]
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p>
                Berufsbezeichnung: Kfz-Händler<br />
                Zuständige Kammer: IHK Nürnberg für Mittelfranken<br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent no-underline hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p className="mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-2">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </section>

            <p className="text-text-muted text-sm pt-4 border-t border-border">
              Stand: 07.02.2026
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
