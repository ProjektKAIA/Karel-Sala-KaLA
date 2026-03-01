import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const K = () => <>KaLa</>;

export const metadata: Metadata = {
  title: "Gebrauchtwagen Eckental – Ankauf & Verkauf | KaLa Automobile",
  description:
    "Gebrauchtwagen Eckental ✓ Faire Ankaufpreise ✓ Sofortige Barzahlung ✓ Kostenlose Abholung & Abmeldung ✓ Alle Marken und Modelle ☎ 0178 4096050",
  alternates: {
    canonical: "https://kala-automobile.de/gebrauchtwagen-eckental",
  },
};

export default function GebrauchtwagenEckental() {
  return (
    <>
      <Navigation />
      <main className="pt-[90px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/5 to-bg py-16 lg:py-24 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] mb-6 text-text-primary">
              Gebrauchtwagen Eckental &ndash; Ankauf zum Höchstpreis
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Sie möchten Ihren Gebrauchtwagen in Eckental verkaufen? <K /> Automobile
              kauft Ihr Fahrzeug zum fairen Preis &ndash; mit sofortiger Barzahlung,
              kostenloser Abholung und Abmeldung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#formular"
                className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold no-underline hover:bg-accent-dark transition-colors text-center"
              >
                Gebrauchtwagen anbieten
              </a>
              <a
                href="tel:01784096050"
                className="border-2 border-accent text-accent px-8 py-3.5 rounded-full font-semibold no-underline hover:bg-accent hover:text-white transition-colors text-center"
              >
                0178 4096050
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20 px-6">
          <div className="max-w-[900px] mx-auto prose prose-sm max-w-none text-text-secondary leading-relaxed space-y-4">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] text-text-primary text-center">
              Gebrauchtwagen in Eckental verkaufen &ndash; schnell und unkompliziert
            </h2>
            <p>
              <strong><K /> Automobile</strong> hat seinen Sitz direkt in{" "}
              <strong>Eckental</strong> und ist damit Ihr Ansprechpartner vor Ort für den{" "}
              <strong>Gebrauchtwagenankauf</strong>. Als lokales Unternehmen in der
              Begonienstraße 1 kennen wir die Region und sind sofort für Sie da.
            </p>
            <p>
              Wir kaufen <strong>alle Gebrauchtwagen</strong> &ndash; unabhängig von Marke,
              Modell, Alter oder Zustand. Ob Ihr Fahrzeug viele Kilometer hat, keinen TÜV
              mehr besitzt oder einen Motorschaden hat: Bei uns erhalten Sie ein faires
              Angebot und <strong>sofortige Barzahlung</strong>.
            </p>

            <h3 className="text-lg font-semibold text-text-primary pt-2">
              Warum Ihren Gebrauchtwagen bei <K /> Automobile verkaufen?
            </h3>
            <ul className="space-y-2">
              <li><strong>Direkt in Eckental</strong> &ndash; kein langer Anfahrtsweg, Besichtigung oft am selben Tag</li>
              <li><strong>Sofortige Barzahlung</strong> oder Echtzeitüberweisung bei Übergabe</li>
              <li><strong>Kostenlose KFZ-Abmeldung</strong> bei der Zulassungsstelle</li>
              <li><strong>Kein Risiko</strong> &ndash; Verkauf ohne Garantie- und Gewährleistungspflicht</li>
              <li><strong>Alle Marken</strong> &ndash; BMW, Audi, VW, Mercedes, Opel, Ford, Toyota und mehr</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-primary pt-2">
              Unsere Reichweite rund um Eckental
            </h3>
            <p>
              Neben Eckental selbst sind wir auch in den Nachbargemeinden aktiv:{" "}
              <strong>Heroldsberg, Kalchreuth, Eschenau, Brand, Forth</strong> und im
              gesamten <strong>Nürnberger Land</strong>. Die kurzen Wege ermöglichen
              eine besonders schnelle Abwicklung.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 px-6 bg-accent/5">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] mb-4">
              Gebrauchtwagen in Eckental verkaufen?
            </h2>
            <p className="text-text-secondary mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot. Wir melden uns
              innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#formular"
                className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold no-underline hover:bg-accent-dark transition-colors"
              >
                Ankauf-Formular
              </a>
              <a
                href="https://wa.me/491784096050?text=Hallo%2C%20ich%20m%C3%B6chte%20meinen%20Gebrauchtwagen%20in%20Eckental%20verkaufen."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-600 px-8 py-3.5 rounded-full font-semibold no-underline hover:bg-green-600 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Weitere Staedte */}
        <section className="py-12 px-6 bg-bg-light">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Autoankauf auch in diesen Städten
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "/", label: "Nürnberg" },
                { href: "/autoankauf-erlangen", label: "Erlangen" },
                { href: "/autoankauf-fuerth", label: "Fürth" },
                { href: "/autoankauf-forchheim", label: "Forchheim" },
                { href: "/autoankauf-herzogenaurach", label: "Herzogenaurach" },
                { href: "/autoankauf-lauf-an-der-pegnitz", label: "Lauf a.d. Pegnitz" },
                { href: "/autoankauf-zirndorf", label: "Zirndorf" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs text-text-muted bg-bg-white border border-border rounded-full px-3 py-1.5 no-underline hover:text-accent hover:border-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
