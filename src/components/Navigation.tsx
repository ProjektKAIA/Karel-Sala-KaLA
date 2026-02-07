"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#vorteile", label: "Vorteile" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#formular", label: "Ankauf-Formular" },
  { href: "#abmeldung", label: "Abmeldung" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border transition-shadow ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-text-primary no-underline">
            Ka<span className="text-accent">La</span> Automobile
          </a>

          <ul className="hidden lg:flex gap-8 list-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-text-secondary no-underline text-sm font-medium hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#formular"
            className="hidden lg:inline-flex bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm no-underline hover:bg-accent-dark transition-colors"
          >
            Fahrzeug anbieten
          </a>

          <button
            className="lg:hidden bg-transparent border-none text-2xl cursor-pointer text-text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-[70] lg:hidden mobile-menu ${
          mobileOpen ? "open" : ""
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-serif text-xl">
            Ka<span className="text-accent">La</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-text-primary"
            aria-label="Menü schließen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary no-underline py-3 text-base font-medium hover:text-accent transition-colors border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formular"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-accent text-white text-center py-3.5 rounded-full font-semibold no-underline hover:bg-accent-dark transition-colors"
          >
            Fahrzeug anbieten
          </a>
          <a
            href="tel:01784096050"
            className="mt-2 border border-border text-text-primary text-center py-3.5 rounded-full font-medium no-underline hover:border-accent hover:text-accent transition-colors"
          >
            0178 4096050
          </a>
        </div>
      </div>
    </>
  );
}
