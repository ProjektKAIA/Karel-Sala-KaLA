const benefits = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: "Keine Datenweitergabe",
    text: "Ihre Daten bleiben bei uns. Wir arbeiten ohne Zwischenhändler oder Vermittler.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: "Sofortige Bearbeitung",
    text: "Zeit ist kostbar – deshalb bearbeiten wir Ihr Angebot sofort nach Eingang.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "Kaufvertrag inklusive",
    text: "Ein gesetzlicher Kaufvertrag ist selbstverständlich und Grundbestandteil unserer Arbeit.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>,
    title: "Kostenlose Besichtigung",
    text: "Zeitnahe Besichtigungstermine – selbstverständlich immer kostenfrei.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    title: "Abholung inklusive",
    text: "Wir holen Ihr Fahrzeug ab, auch wenn es nicht mehr fahrbereit ist.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    title: "Sofortige Barzahlung",
    text: "Ihr Geld erhalten Sie sofort und in Bar – inklusive Kaufvertrag.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Keine Risiken",
    text: "Verkauf ohne Garantie- und Gewährleistungspflicht für Sie.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    title: "Keine Folgekosten",
    text: "Besichtigung, Abholung und alle Dokumente – absolut kostenfrei.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 lg:py-24 px-6" id="vorteile">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Vorteile
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          Warum KaLa Automobile?
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Transparenter und sicherer Autoankauf – ohne Risiken für Sie.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-bg-white border border-border rounded-2xl p-7 transition-all hover:border-accent hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          >
            <div className="w-11 h-11 bg-accent-bg rounded-xl flex items-center justify-center text-accent mb-4">
              {b.icon}
            </div>
            <h3 className="text-base font-semibold mb-2">{b.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
