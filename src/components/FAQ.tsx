"use client";

import { type ReactNode, useState } from "react";

const K = () => <>Ka<span className="text-accent">La</span></>;

const faqs: { q: ReactNode; a: ReactNode }[] = [
  {
    q: "Ist die Besichtigung beim Autoankauf wirklich kostenlos?",
    a: <>Ja, absolut. Die Besichtigung, Abholung und alle Dokumente sind komplett kostenfrei. Es entstehen keine Folgekosten. <K /> Automobile bietet in Nürnberg, Eckental und Umgebung eine 100% kostenlose Fahrzeugbewertung an.</>,
  },
  {
    q: "Kaufen Sie auch Unfallfahrzeuge und Autos ohne TÜV in Nürnberg an?",
    a: "Ja, wir kaufen Autos aller Art – auch Unfallfahrzeuge, Fahrzeuge ohne TÜV, mit Motorschaden oder Getriebeschaden. Die Abholung ist in Nürnberg, Erlangen, Fürth, Eckental und ganz Mittelfranken inklusive.",
  },
  {
    q: "Wie schnell erhalte ich ein Angebot für mein Auto?",
    a: "In der Regel innerhalb von 24 Stunden nach Eingang Ihrer Anfrage. Kontaktieren Sie uns per Telefon, WhatsApp oder Formular für eine schnelle Fahrzeugbewertung.",
  },
  {
    q: "Wie läuft die Barzahlung beim Autoankauf ab?",
    a: "Sie erhalten Ihr Geld sofort in Bar bei Übergabe des Fahrzeugs. Dazu erhalten Sie einen gesetzlichen Kaufvertrag. Die Bezahlung erfolgt direkt vor Ort – in Nürnberg, Eckental oder wo immer Sie sich befinden.",
  },
  {
    q: "Gibt es Gewährleistungspflichten für mich als Verkäufer?",
    a: <>Nein. Sie verkaufen ohne Garantie- und Gewährleistungspflicht. Das gesamte Risiko liegt bei <K /> Automobile.</>,
  },
  {
    q: "Werden meine Daten an Dritte weitergegeben?",
    a: <>Nein. Wir arbeiten ohne Zwischenhändler und geben keine Daten an Dritte weiter. Ihre Daten bleiben ausschließlich bei <K /> Automobile.</>,
  },
  {
    q: "Übernehmen Sie die Abmeldung meines Fahrzeugs?",
    a: "Ja, wir kümmern uns um die komplette Abmeldung bei der Zulassungsstelle – kostenfrei und ohne Aufwand für Sie. Sie erhalten einen Nachweis der Abmeldung per E-Mail oder Post.",
  },
  {
    q: <>Kann ich <K /> Automobile auch per WhatsApp erreichen?</>,
    a: "Ja! Sie können uns jederzeit per WhatsApp unter 0178 4096050 kontaktieren. Fotos vom Fahrzeug können Sie uns direkt zusenden für eine schnelle Bewertung.",
  },
  {
    q: <>In welchen Städten bietet <K /> Automobile Autoankauf an?</>,
    a: <><K /> Automobile kauft Fahrzeuge in Nürnberg, Eckental, Erlangen, Fürth, Schwabach, Herzogenaurach, Heroldsberg, Lauf an der Pegnitz, Forchheim, Bamberg und der gesamten Metropolregion Nürnberg an. Kostenlose Abholung in ganz Mittelfranken.</>,
  },
  {
    q: <>Welche Fahrzeuge kauft <K /> Automobile an?</>,
    a: "Wir kaufen alle Fahrzeuge: Gebrauchtwagen, Unfallfahrzeuge, Autos ohne TÜV, mit Motorschaden, Getriebeschaden, hohem Kilometerstand, Diesel, Benziner, Elektro, Hybrid, Transporter und Firmenwagen. Alle Marken und Modelle.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-6" id="faq">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          FAQ
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          Häufig gestellte Fragen zum Autoankauf
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Antworten auf die wichtigsten Fragen rund um den Autoankauf in Nürnberg, Eckental und Umgebung.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto space-y-2.5">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-border rounded-2xl bg-bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full px-6 py-5 bg-transparent border-none text-text-primary font-sans text-base font-medium text-left cursor-pointer flex justify-between items-center transition-colors hover:text-accent"
            >
              {faq.q}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-accent shrink-0 ml-4 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`faq-answer ${open === i ? "open" : ""}`}>
              <div className="px-6 pb-5 text-text-secondary text-[0.95rem] leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
