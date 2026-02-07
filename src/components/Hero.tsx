import Image from "next/image";
import KaLa from "./KaLa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-20 px-6 bg-bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent-bg text-accent-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Faire Preise – Schnelle Abwicklung
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,3.8rem)] leading-[1.15] mb-5">
            Autoankauf Nürnberg & Eckental –{" "}
            <span className="text-accent">Einfach, fair & sofort.</span>
          </h1>
          <p className="text-lg text-text-secondary mb-9 max-w-[520px] leading-relaxed">
            <KaLa /> Automobile kauft Fahrzeuge aller Art in Nürnberg, Eckental,
            Erlangen, Fürth und ganz Mittelfranken. Kostenlose Besichtigung,
            sofortige Barzahlung vor Ort, kostenlose Abholung und Abmeldung –
            auch Unfallwagen und Fahrzeuge ohne TÜV.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#formular"
              className="bg-accent text-white px-9 py-4 rounded-full font-semibold text-base no-underline transition-all inline-flex items-center gap-2.5 shadow-[0_4px_15px_rgba(227,30,45,0.3)] hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(227,30,45,0.35)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Jetzt Fahrzeug anbieten
            </a>
            <a
              href="tel:01784096050"
              className="bg-bg-white text-text-primary px-9 py-4 rounded-full font-medium text-base no-underline transition-all border border-border inline-flex items-center gap-2.5 hover:border-accent hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              0178 4096050
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <Image
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
            alt="Autoankauf Nürnberg Eckental Erlangen Fürth – KaLa Automobile kauft Ihr Fahrzeug sofort"
            width={800}
            height={480}
            className="w-full h-[320px] lg:h-[480px] object-cover block"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 px-7 pb-6 pt-16 bg-gradient-to-t from-black/70 to-transparent flex gap-8 items-end">
            <div className="text-center">
              <span className="text-[1.6rem] font-bold text-white block">500+</span>
              <span className="text-xs text-white/75 uppercase tracking-wider">Angekauft</span>
            </div>
            <div className="text-center">
              <span className="text-[1.6rem] font-bold text-white block">24h</span>
              <span className="text-xs text-white/75 uppercase tracking-wider">Antwort</span>
            </div>
            <div className="text-center">
              <span className="text-[1.6rem] font-bold text-white block">Bar</span>
              <span className="text-xs text-white/75 uppercase tracking-wider">Sofort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
