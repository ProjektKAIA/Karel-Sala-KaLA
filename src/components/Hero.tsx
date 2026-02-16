"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import KaLa from "./KaLa";

const galleryImages = [
  "/00ab41f1-dd38-4c34-ae21-e6b22bb44813.webp",
  "/02897cdd-57bf-44bf-9f26-f10eee16c6a0.webp",
  "/2909d8e6-3a1c-4f29-82b7-0ade44070609.webp",
  "/6394ba97-1b6a-4971-8f93-24492f3d0e24.webp",
  "/653b3439-2a90-4951-95f5-a8efb7893c5a.webp",
  "/7aa0bf54-c09b-4b5c-be40-e2f476c62d7c.webp",
  "/7e105dd5-a171-4a77-9ace-8cb46094277d.webp",
  "/85ac686b-9bd1-40e6-ad94-49dee6ef75d4.webp",
  "/aeeba9c4-78ae-470f-9879-c7149287460c.webp",
  "/ec8f75ba-8112-46f4-9dfb-0f53a33e84d3.webp",
  "/ff78650c-5910-43a2-b31f-b142a4405e2f.webp",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[80px] sm:pt-[120px] pb-12 sm:pb-20 px-4 sm:px-6 bg-bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full relative z-10">

        {/* ── Desktop: 2-column side-by-side ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
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
              sofortige Barzahlung oder Echtzeitüberweisung vor Ort, kostenlose Abholung und Abmeldung –
              auch Unfallwagen und Fahrzeuge ohne TÜV.
            </p>
            <div className="flex gap-3.5">
              <a
                href="#formular"
                className="bg-accent text-white px-9 py-4 rounded-full font-semibold text-base no-underline transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_4px_15px_rgba(227,30,45,0.3)] hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(227,30,45,0.35)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Jetzt Fahrzeug anbieten
              </a>
              <a
                href="tel:01784096050"
                className="bg-bg-white text-text-primary px-9 py-4 rounded-full font-medium text-base no-underline transition-all border border-border inline-flex items-center justify-center gap-2.5 hover:border-accent hover:text-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                0178 4096050
              </a>
            </div>
          </div>

          <div>
            <HeroGallery />
            <HeroStats />
          </div>
        </div>

        {/* ── Mobile: reordered – Title → Photo → CTA → Subtext ── */}
        <div className="lg:hidden flex flex-col gap-5">
          {/* 1. Title */}
          <h1 className="font-serif text-[clamp(2rem,7vw,2.8rem)] leading-[1.15] text-center">
            Autoankauf Nürnberg & Eckental –{" "}
            <span className="text-accent">Einfach, fair & sofort.</span>
          </h1>

          {/* 2. Photo Gallery */}
          <div>
            <HeroGallery />
            <HeroStats />
          </div>

          {/* 3. CTA Buttons */}
          <div className="flex gap-3 flex-col sm:flex-row">
            <a
              href="#formular"
              className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold text-[0.95rem] no-underline transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_4px_15px_rgba(227,30,45,0.3)] hover:bg-accent-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Jetzt Fahrzeug anbieten
            </a>
            <a
              href="tel:01784096050"
              className="bg-bg-white text-text-primary px-8 py-3.5 rounded-full font-medium text-[0.95rem] no-underline transition-all border border-border inline-flex items-center justify-center gap-2.5 hover:border-accent hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              0178 4096050
            </a>
          </div>

          {/* 4. Subtext */}
          <p className="text-[0.95rem] text-text-secondary leading-relaxed text-center">
            <KaLa /> Automobile kauft Fahrzeuge aller Art in Nürnberg, Eckental,
            Erlangen, Fürth und ganz Mittelfranken. Kostenlose Besichtigung,
            sofortige Barzahlung oder Echtzeitüberweisung vor Ort, kostenlose Abholung und Abmeldung –
            auch Unfallwagen und Fahrzeuge ohne TÜV.
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroGallery() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[480px]">
        {galleryImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Fahrzeug ${i + 1} – KaLa Automobile Autoankauf`}
            fill
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Prev/Next Arrows */}
      <button
        onClick={prev}
        aria-label="Vorheriges Bild"
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        onClick={next}
        aria-label="Nächstes Bild"
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Bild ${i + 1} anzeigen`}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all cursor-pointer ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <div className="flex gap-6 sm:gap-8 justify-center mt-4 sm:mt-5">
      <div className="text-center">
        <span className="text-xl sm:text-2xl font-bold text-text-primary block">500+</span>
        <span className="text-[0.65rem] sm:text-xs text-text-secondary uppercase tracking-wider">Angekauft</span>
      </div>
      <div className="text-center">
        <span className="text-xl sm:text-2xl font-bold text-text-primary block">24h</span>
        <span className="text-[0.65rem] sm:text-xs text-text-secondary uppercase tracking-wider">Antwort</span>
      </div>
      <div className="text-center">
        <span className="text-xl sm:text-2xl font-bold text-text-primary block">Sofort</span>
        <span className="text-[0.65rem] sm:text-xs text-text-secondary uppercase tracking-wider">Bar / Echtzeit</span>
      </div>
    </div>
  );
}
