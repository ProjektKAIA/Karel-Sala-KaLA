"use client";

import { useState } from "react";
import {
  Car,
  HandCoins,
  Rocket,
  FileSignature,
  ScanSearch,
  CarFront,
  LockKeyhole,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BenefitItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const benefits: BenefitItem[] = [
  { title: "Sofortige Barzahlung", text: "Ihr Geld sofort in Bar oder per Echtzeitüberweisung bei Übergabe – inklusive Kaufvertrag.", icon: HandCoins },
  { title: "Sofortige Bearbeitung", text: "Ihr Angebot wird sofort nach Eingang bearbeitet.", icon: Rocket },
  { title: "Kaufvertrag inklusive", text: "Gesetzlicher Kaufvertrag ist Grundbestandteil unserer Arbeit.", icon: FileSignature },
  { title: "Kostenlose Besichtigung", text: "Zeitnahe Termine – selbstverständlich immer kostenfrei.", icon: ScanSearch },
  { title: "Abholung inklusive", text: "Wir holen Ihr Fahrzeug ab – auch wenn es nicht fahrbereit ist.", icon: CarFront },
  { title: "Keine Datenweitergabe", text: "Ihre Daten bleiben bei uns. Ohne Zwischenhändler.", icon: LockKeyhole },
  { title: "Keine Risiken", text: "Verkauf ohne Garantie- und Gewährleistungspflicht.", icon: BadgeCheck },
  { title: "Keine Folgekosten", text: "Besichtigung, Abholung und Dokumente – kostenfrei.", icon: Sparkles },
];

/* Pre-calculate circular positions (8 items, 45° apart, starting from top) */
const RADIUS = 38;
const LINE_START = 14;
const LINE_END = 30;

/* Vertical offset so the figure walks ON the line (feet on the line, not body through it) */
const figureOffset: { x: number; y: number }[] = [
  { x: 0, y: 0 },      // 0: vertical   – centered is fine
  { x: -1, y: -1 },     // 1: diagonal
  { x: 0, y: -2.2 },    // 2: horizontal – shift up so feet are on the line
  { x: -1, y: 1 },      // 3: diagonal
  { x: 0, y: 0 },       // 4: vertical   – centered is fine
  { x: 1, y: 1 },       // 5: diagonal
  { x: 0, y: -2.2 },    // 6: horizontal – shift up so feet are on the line
  { x: 1, y: -1 },      // 7: diagonal
];

/* Tooltip always on the outside of the circle */
const tooltipClass: string[] = [
  "bottom-full mb-2 left-1/2 -translate-x-1/2",   // 0: top       → above
  "bottom-full mb-2 left-0",                        // 1: top-right → above-right
  "left-full ml-3 top-1/2 -translate-y-1/2",        // 2: right     → right
  "top-full mt-2 left-0",                            // 3: bot-right → below-right
  "top-full mt-2 left-1/2 -translate-x-1/2",        // 4: bottom    → below
  "top-full mt-2 right-0",                           // 5: bot-left  → below-left
  "right-full mr-3 top-1/2 -translate-y-1/2",       // 6: left      → left
  "bottom-full mb-2 right-0",                        // 7: top-left  → above-left
];

const positions = benefits.map((_, i) => {
  const deg = i * 45 - 90;
  const rad = deg * (Math.PI / 180);
  return {
    left: `${50 + RADIUS * Math.cos(rad)}%`,
    top: `${50 + RADIUS * Math.sin(rad)}%`,
    x1: 50 + LINE_START * Math.cos(rad),
    y1: 50 + LINE_START * Math.sin(rad),
    x2: 50 + LINE_END * Math.cos(rad),
    y2: 50 + LINE_END * Math.sin(rad),
  };
});

export default function Benefits() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-10 lg:py-24 px-6" id="vorteile">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Vorteile
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          KaLa Automobile
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Transparenter und sicherer Autoankauf in Nürnberg, Eckental, Erlangen und Fürth – ohne Risiken für Sie.
        </p>
      </div>

      {/* ── Desktop: Circular layout ── */}
      <div className="hidden lg:block max-w-[750px] mx-auto">
        <div className="relative aspect-square">

          {/* SVG overlay: connector lines + walking figure */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {/* Connector lines */}
            {positions.map((p, i) => (
              <line
                key={i}
                x1={p.x1}
                y1={p.y1}
                x2={p.x2}
                y2={p.y2}
                stroke="currentColor"
                className={hovered === i ? "text-accent/30" : "text-accent/15"}
                strokeWidth={hovered === i ? "0.4" : "0.3"}
                strokeDasharray="1.2 1.2"
                style={{ transition: "all 0.3s" }}
              />
            ))}

            {/* Walking stick figure */}
            {hovered !== null && (
              <g key={hovered} className="walk-figure">
                <g transform={`translate(${figureOffset[hovered].x}, ${figureOffset[hovered].y})`}>
                  <animateMotion
                    dur="2.8s"
                    repeatCount="indefinite"
                    keyPoints="0;1;0"
                    keyTimes="0;0.5;1"
                    calcMode="linear"
                    path={`M${positions[hovered].x1},${positions[hovered].y1} L${positions[hovered].x2},${positions[hovered].y2}`}
                  />
                  {/* Head */}
                  <circle cx="0" cy="-1.2" r="0.6" fill="currentColor" />
                  {/* Body */}
                  <line x1="0" y1="-0.6" x2="0" y2="1" stroke="currentColor" strokeWidth="0.35" strokeLinecap="round" />
                  {/* Left leg */}
                  <line x1="0" y1="1" x2="-0.5" y2="2.2" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round">
                    <animate attributeName="x2" values="-0.5;0.5;-0.5" dur="0.45s" repeatCount="indefinite" />
                  </line>
                  {/* Right leg */}
                  <line x1="0" y1="1" x2="0.5" y2="2.2" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round">
                    <animate attributeName="x2" values="0.5;-0.5;0.5" dur="0.45s" repeatCount="indefinite" />
                  </line>
                  {/* Left arm */}
                  <line x1="0" y1="-0.1" x2="-0.6" y2="0.6" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round">
                    <animate attributeName="x2" values="-0.6;0.3;-0.6" dur="0.45s" repeatCount="indefinite" />
                  </line>
                  {/* Right arm */}
                  <line x1="0" y1="-0.1" x2="0.6" y2="0.6" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round">
                    <animate attributeName="x2" values="0.6;-0.3;0.6" dur="0.45s" repeatCount="indefinite" />
                  </line>
                </g>
              </g>
            )}
          </svg>

          {/* Outer decorative ring (slow spin) */}
          <div className="absolute left-1/2 top-1/2 w-[34%] h-[34%] rounded-full" style={{ marginLeft: "-17%", marginTop: "-17%" }}>
            <div className="w-full h-full rounded-full border-2 border-dashed border-accent/12 animate-[spin_50s_linear_infinite]" />
          </div>

          {/* Center car circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] h-[26%] rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-[0_20px_60px_rgba(227,30,45,0.3)] z-10">
            <Car className="w-[40%] h-[40%] text-white" strokeWidth={1.5} />
          </div>

          {/* "Ihr Auto" label */}
          <span className="absolute left-1/2 -translate-x-1/2 z-10 bg-bg-white border border-border text-text-primary text-sm font-semibold px-5 py-2 rounded-full shadow-sm" style={{ top: "64%" }}>
            Ihr Auto
          </span>

          {/* Benefit items in circle */}
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 hover:z-30 group"
              style={{ left: positions[i].left, top: positions[i].top }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered((prev) => (prev === i ? null : i))}
            >
              <div className="relative flex flex-col items-center gap-3 cursor-default">
                <div className="w-[72px] h-[72px] rounded-full bg-bg-white border-2 border-border flex items-center justify-center text-accent shadow-sm group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(227,30,45,0.25)] transition-all duration-300">
                  <b.icon className="w-8 h-8" strokeWidth={1.6} />
                </div>
                <span className="text-[0.9rem] font-semibold text-text-primary text-center leading-tight max-w-[140px] group-hover:text-accent transition-colors">
                  {b.title}
                </span>
                {/* Tooltip with description – positioned outside the circle */}
                <div className={`absolute w-[210px] bg-bg-white border border-border rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-40 ${tooltipClass[i]}`}>
                  <p className="text-text-secondary text-[0.85rem] leading-relaxed text-center">
                    {b.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile / Tablet: Vertical Roadmap ── */}
      <div className="lg:hidden max-w-[500px] mx-auto">
        <div className="relative">
          {/* Vertical dashed road line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-accent/20 -translate-x-1/2" />

          {/* Car at the top of the road */}
          <div className="relative flex justify-center mb-6 z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-[0_8px_30px_rgba(227,30,45,0.25)]">
              <Car className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Benefit stations alternating left/right */}
          <div className="flex flex-col gap-4">
            {benefits.map((b, i) => (
              <RoadmapItem key={b.title} {...b} index={i} />
            ))}
          </div>

          {/* Road end marker */}
          <div className="relative flex justify-center mt-6 z-10">
            <div className="w-3 h-3 rounded-full bg-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile roadmap item ── */
function RoadmapItem({ title, text, icon: Icon, index }: BenefitItem & { index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Card */}
      <div className={`w-[calc(50%-24px)] ${isLeft ? "text-right" : "text-left"}`}>
        <div className="bg-bg-white border border-border rounded-xl p-3 shadow-sm">
          <h3 className="text-[0.82rem] font-semibold mb-0.5">{title}</h3>
          <p className="text-text-secondary text-[0.72rem] leading-snug">{text}</p>
        </div>
      </div>

      {/* Center icon on the road */}
      <div className="relative z-10 shrink-0 w-12 flex justify-center">
        <div className="w-10 h-10 rounded-full bg-bg-white border-2 border-accent flex items-center justify-center text-accent shadow-sm">
          <Icon className="w-4 h-4" strokeWidth={2} />
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="w-[calc(50%-24px)]" />
    </div>
  );
}
