export default function Abmeldung() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-bg-white" id="abmeldung">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            Service
          </div>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
            Abmeldung? <span className="text-accent">Übernehmen wir.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            Sie müssen sich um nichts kümmern. Bei jedem Ankauf übernehmen wir
            die komplette Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle –
            kostenfrei und ohne Aufwand für Sie.
          </p>
          <ul className="space-y-4">
            {[
              "Komplette Abmeldung bei der Zulassungsstelle",
              "Keine zusätzlichen Kosten für Sie",
              "Nachweis der Abmeldung per E-Mail oder Post",
              "Sie sparen sich den Gang zur Behörde",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-secondary">
                <div className="w-6 h-6 bg-accent-bg rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e31e2d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-bg-light rounded-3xl p-8 lg:p-10 border border-border">
          <h3 className="text-xl font-semibold mb-6">So funktioniert es</h3>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Fahrzeug verkaufen",
                text: "Verkaufen Sie Ihr Fahrzeug ganz normal über uns.",
              },
              {
                step: "2",
                title: "Unterlagen übergeben",
                text: "Fahrzeugschein und -brief übergeben Sie bei der Besichtigung.",
              },
              {
                step: "3",
                title: "Wir erledigen den Rest",
                text: "Abmeldung, Abholung, Barzahlung – alles aus einer Hand.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{s.title}</h4>
                  <p className="text-text-secondary text-sm">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
