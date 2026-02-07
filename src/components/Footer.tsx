export default function Footer() {
  return (
    <footer className="bg-bg-white border-t border-border py-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a href="#" className="font-serif text-xl text-text-primary no-underline">
              Ka<span className="text-accent">La</span> Automobile
            </a>
            <span className="text-text-muted text-sm">
              Ankauf von Autos aller Art
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="/impressum"
              className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="tel:01784096050"
              className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
            >
              0178 4096050
            </a>
          </div>
        </div>
        <div className="text-center mt-6 pt-6 border-t border-border">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} KaLa Automobile – Karel Sala. Alle
            Rechte vorbehalten. | Begonienstraße 1, 90542 Eckental
          </p>
        </div>
      </div>
    </footer>
  );
}
