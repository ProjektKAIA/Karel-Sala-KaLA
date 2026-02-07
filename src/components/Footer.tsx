export default function Footer() {
  return (
    <footer className="bg-bg-white border-t border-border pt-12 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top: Brand + Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <a href="#" className="font-serif text-xl text-text-primary no-underline">
              Ka<span className="text-accent">La</span> Automobile
            </a>
            <p className="text-text-muted text-sm mt-2 max-w-sm">
              Ihr seriöser Partner für Autoankauf in Nürnberg, Eckental, Erlangen, Fürth und ganz Mittelfranken.
              Faire Höchstpreise, sofortige Barzahlung, kostenlose Abholung und Abmeldung.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-3 text-text-primary">Service</h4>
              <ul className="space-y-2 list-none">
                <li><a href="#formular" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Autoankauf Formular</a></li>
                <li><a href="#ablauf" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Ablauf & Barzahlung</a></li>
                <li><a href="#abmeldung" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">KFZ-Abmeldung</a></li>
                <li><a href="#faq" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Häufige Fragen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 text-text-primary">Kontakt</h4>
              <ul className="space-y-2 list-none">
                <li><a href="tel:01784096050" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">0178 4096050</a></li>
                <li><a href="https://wa.me/491784096050" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">WhatsApp</a></li>
                <li><a href="mailto:k.sala@kala-automobile.de" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">k.sala@kala-automobile.de</a></li>
                <li><span className="text-text-muted text-sm">Begonienstraße 1, 90542 Eckental</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 text-text-primary">Rechtliches</h4>
              <ul className="space-y-2 list-none">
                <li><a href="/impressum" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Areas - SEO */}
        <div className="border-t border-border pt-6 mb-6">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Autoankauf in Ihrer Nähe
          </h4>
          <p className="text-text-muted text-xs leading-relaxed">
            KaLa Automobile – Autoankauf Nürnberg · Autoankauf Eckental · Autoankauf Erlangen · Autoankauf Fürth · Autoankauf Schwabach · Autoankauf Herzogenaurach · Autoankauf Heroldsberg · Autoankauf Lauf an der Pegnitz · Autoankauf Forchheim · Autoankauf Bamberg · Autoankauf Ansbach · Autoankauf Neumarkt · Autoankauf Nürnberger Land · Autoankauf Mittelfranken · Autoankauf Metropolregion Nürnberg · Auto verkaufen Nürnberg · Gebrauchtwagen Ankauf · Unfallwagen Ankauf · PKW Ankauf · KFZ Ankauf · Fahrzeug verkaufen Franken · Auto Barzahlung
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-border space-y-2">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} KaLa Automobile – Karel Sala. Alle
            Rechte vorbehalten. | Begonienstraße 1, 90542 Eckental | Autoankauf Nürnberg & Umgebung
          </p>
          <p className="text-text-muted/60 text-xs">
            Made by{" "}
            <a
              href="https://kaiashapes.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted/80 no-underline hover:text-accent transition-colors"
            >
              KaiaShapes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
