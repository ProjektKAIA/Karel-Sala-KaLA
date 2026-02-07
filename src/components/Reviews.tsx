const reviews = [
  {
    stars: 5,
    text: "Super unkompliziert und fair. Innerhalb von 24 Stunden hatte ich ein Angebot und zwei Tage später war das Auto abgeholt. Barzahlung wie versprochen!",
    name: "Markus T.",
    location: "Nürnberg",
    initial: "M",
  },
  {
    stars: 5,
    text: "Mein Auto war nicht mehr fahrbereit und wurde trotzdem abgeholt. Schnelle Kommunikation und ein fairer Preis. Kann ich nur weiterempfehlen.",
    name: "Sandra K.",
    location: "Erlangen",
    initial: "S",
  },
  {
    stars: 5,
    text: "Endlich ein Autohändler, der hält was er verspricht. Alles transparent, keine versteckten Kosten und die Abwicklung ging blitzschnell.",
    name: "Andreas W.",
    location: "Eckental",
    initial: "A",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-bg-white" id="bewertungen">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
          Kundenstimmen
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          Das sagen unsere Kunden
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Echte Erfahrungen von zufriedenen Verkäufern.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-bg-white border border-border rounded-2xl p-7"
          >
            <div className="text-amber-400 text-sm mb-3.5 tracking-widest">
              {"★".repeat(r.stars)}
            </div>
            <p className="text-text-secondary text-[0.95rem] leading-relaxed mb-5 italic">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-bg text-accent rounded-full flex items-center justify-center font-bold text-sm">
                {r.initial}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-text-muted">{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
