import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const K = () => <>KaLa</>;

interface CityPageProps {
  city: string;
  region: string;
  headline: string;
  intro: string;
  distanceInfo: string;
  localInfo: string;
  zipCodes?: string;
}

export default function CityPage({
  city,
  region,
  headline,
  intro,
  distanceInfo,
  localInfo,
  zipCodes,
}: CityPageProps) {
  return (
    <>
      <Navigation />
      <main className="pt-[90px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/5 to-bg py-16 lg:py-24 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] mb-6 text-text-primary">
              {headline}
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#formular"
                className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold no-underline hover:bg-accent-dark transition-colors text-center"
              >
                Fahrzeug jetzt anbieten
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

        {/* Vorteile */}
        <section className="py-16 lg:py-20 px-6">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] mb-8 text-center">
              Autoankauf {city} &ndash; Ihre Vorteile
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Sofortige Barzahlung", desc: `Bei Abholung in ${city} erhalten Sie Ihr Geld sofort in Bar oder per Echtzeitüberweisung.` },
                { title: "Kostenlose Abholung", desc: `Wir holen Ihr Fahrzeug direkt in ${city} und ${region} ab – komplett kostenfrei.` },
                { title: "Alle Fahrzeuge", desc: "Gebrauchtwagen, Unfallwagen, ohne TÜV, Motorschaden, Getriebeschaden – wir kaufen alles." },
                { title: "Abmeldung inklusive", desc: "Wir übernehmen die KFZ-Abmeldung bei der Zulassungsstelle – kostenlos für Sie." },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-bg-white border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold text-text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 lg:py-20 px-6 bg-bg-light">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] mb-8 text-center">
              In 4 Schritten zum Autoverkauf in {city}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Anfrage senden", desc: "Kontaktieren Sie uns per Telefon, WhatsApp oder Formular mit den Daten Ihres Fahrzeugs." },
                { step: "2", title: "Angebot erhalten", desc: "Innerhalb von 24 Stunden erhalten Sie ein faires Angebot für Ihr Auto." },
                { step: "3", title: "Abholung", desc: `Wir kommen direkt zu Ihnen nach ${city} und holen das Fahrzeug ab.` },
                { step: "4", title: "Sofort Geld", desc: "Sie erhalten Barzahlung oder Echtzeitüberweisung bei Übergabe." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1 text-sm">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 lg:py-20 px-6">
          <div className="max-w-[900px] mx-auto prose prose-sm max-w-none text-text-secondary leading-relaxed space-y-4">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] text-text-primary text-center">
              Autoankauf {city} &ndash; Fair, schnell und seriös
            </h2>
            <p>
              <strong><K /> Automobile</strong> ist Ihr lokaler Ansprechpartner für den{" "}
              <strong>Autoankauf in {city}</strong> und {region}. {distanceInfo}
            </p>
            <p>{localInfo}</p>
            <p>
              Wir kaufen <strong>alle Fahrzeugtypen</strong> in {city} an:{" "}
              <strong>Gebrauchtwagen, Unfallfahrzeuge, Autos ohne TÜV</strong>,
              Fahrzeuge mit <strong>Motorschaden oder Getriebeschaden</strong>,
              <strong> Diesel, Benziner, Elektro- und Hybridfahrzeuge</strong>,
              sowie <strong>Transporter und Firmenwagen</strong>. Egal ob BMW, Audi,
              Mercedes, VW, Opel, Ford oder jede andere Marke.
            </p>
            {zipCodes && (
              <p className="text-text-muted text-xs">
                Unser Service in {city} deckt folgende Postleitzahlen ab: {zipCodes}
              </p>
            )}

            <h3 className="text-lg font-semibold text-text-primary pt-2">
              Warum <K /> Automobile für den Autoankauf in {city}?
            </h3>
            <p>
              Als seriöser Autohändler aus Eckental arbeiten wir <strong>ohne
              Zwischenhändler oder Vermittler</strong>. Ihre Daten werden nicht an
              Dritte weitergegeben. Sie verkaufen <strong>ohne Garantie- und
              Gewährleistungspflicht</strong> – keinerlei Risiko oder Folgekosten
              für Sie. Dazu erhalten Sie einen <strong>gesetzlichen Kaufvertrag</strong> und
              auf Wunsch die <strong>komplette KFZ-Abmeldung</strong>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 px-6 bg-accent/5">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] mb-4">
              Auto in {city} verkaufen?
            </h2>
            <p className="text-text-secondary mb-8">
              Kontaktieren Sie uns jetzt für ein kostenloses und unverbindliches
              Angebot. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#formular"
                className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold no-underline hover:bg-accent-dark transition-colors"
              >
                Ankauf-Formular
              </a>
              <a
                href="https://wa.me/491784096050?text=Hallo%2C%20ich%20m%C3%B6chte%20mein%20Auto%20in%20{city}%20verkaufen."
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
                { href: "/", label: "Eckental" },
                { href: "/autoankauf-erlangen", label: "Erlangen" },
                { href: "/autoankauf-fuerth", label: "Fürth" },
                { href: "/autoankauf-forchheim", label: "Forchheim" },
                { href: "/autoankauf-herzogenaurach", label: "Herzogenaurach" },
                { href: "/autoankauf-lauf-an-der-pegnitz", label: "Lauf a.d. Pegnitz" },
                { href: "/autoankauf-zirndorf", label: "Zirndorf" },
                { href: "/gebrauchtwagen-eckental", label: "Gebrauchtwagen Eckental" },
              ]
                .filter((l) => l.label !== city)
                .map((l) => (
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
