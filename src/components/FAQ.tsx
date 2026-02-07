"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Ist die Besichtigung wirklich kostenlos?",
    a: "Ja, absolut. Die Besichtigung, Abholung und alle Dokumente sind komplett kostenfrei. Es entstehen keine Folgekosten.",
  },
  {
    q: "Kaufen Sie auch Unfallfahrzeuge?",
    a: "Ja, wir kaufen Autos aller Art – auch Unfallfahrzeuge oder nicht fahrbare Fahrzeuge. Abholung inklusive.",
  },
  {
    q: "Wie schnell erhalte ich ein Angebot?",
    a: "In der Regel innerhalb von 24 Stunden nach Eingang Ihrer Anfrage.",
  },
  {
    q: "Wie läuft die Bezahlung ab?",
    a: "Sie erhalten Ihr Geld sofort in Bar bei Übergabe. Dazu gibt es einen gesetzlichen Kaufvertrag.",
  },
  {
    q: "Gibt es Gewährleistungspflichten für mich?",
    a: "Nein. Sie verkaufen ohne Garantie- und Gewährleistungspflicht. Das Risiko liegt bei uns.",
  },
  {
    q: "Werden meine Daten weitergegeben?",
    a: "Nein. Wir arbeiten ohne Zwischenhändler und geben keine Daten an Dritte weiter.",
  },
  {
    q: "Übernehmen Sie die Abmeldung meines Fahrzeugs?",
    a: "Ja, wir kümmern uns um die komplette Abmeldung bei der Zulassungsstelle – kostenfrei und ohne Aufwand für Sie. Sie erhalten einen Nachweis der Abmeldung.",
  },
  {
    q: "Kann ich Sie auch per WhatsApp erreichen?",
    a: "Ja! Sie können uns jederzeit per WhatsApp unter 0178 4096050 kontaktieren. Fotos vom Fahrzeug können Sie uns direkt zusenden.",
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
          Häufig gestellte Fragen
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Antworten auf die wichtigsten Fragen rund um den Autoankauf.
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
