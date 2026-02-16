const steps = [
  {
    num: "1",
    title: "Formular ausfüllen",
    text: "Fahrzeugdaten eintragen und absenden – oder direkt per WhatsApp.",
  },
  {
    num: "2",
    title: "Angebot erhalten",
    text: "Schnelles, faires Angebot per Telefon, WhatsApp oder E-Mail.",
  },
  {
    num: "3",
    title: "Besichtigung",
    text: "Kostenlose Besichtigung bei Ihnen vor Ort.",
  },
  {
    num: "4",
    title: "Barzahlung / Echtzeitüberweisung & Abmeldung",
    text: "Sofortige Bezahlung in Bar oder per Echtzeitüberweisung, Kaufvertrag, Abholung und Abmeldung.",
  },
];

export default function Process() {
  return (
    <section className="py-10 lg:py-24 px-6 bg-bg-white" id="ablauf">
      <div className="text-center max-w-[600px] mx-auto mb-8 lg:mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Ablauf
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          In 4 Schritten zum Verkauf
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Einfacher geht es nicht – vom Formular bis zur Barzahlung oder Echtzeitüberweisung.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div
            key={s.num}
            className="text-center sm:text-center bg-bg-white border border-border rounded-2xl p-5 sm:p-6 lg:p-8 transition-all hover:border-accent hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex sm:block items-center gap-4 sm:gap-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-white shrink-0 sm:mx-auto sm:mb-4">
              {s.num}
            </div>
            <div className="text-left sm:text-center">
              <h3 className="text-[0.95rem] font-semibold mb-1 sm:mb-2">{s.title}</h3>
              <p className="text-text-secondary text-[0.85rem]">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
