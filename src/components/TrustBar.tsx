const items = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "Seriöser Ankauf",
    sub: "Fair & transparent",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ),
    title: "Bar / Überweisung",
    sub: "Sofort bei Übergabe",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
    title: "Abholung gratis",
    sub: "Auch bei Defekt",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
    ),
    title: "Abmeldung inklusive",
    sub: "Wir erledigen das",
  },
];

export default function TrustBar() {
  return (
    <div className="bg-bg-light border-t border-b border-border py-5 sm:py-7 px-6">
      {/* Mobile: 2-column grid in 2 rows | Desktop: single row flex */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:justify-center sm:gap-8 lg:gap-12 sm:flex-wrap">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent-bg rounded-[10px] flex items-center justify-center text-accent shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="text-[0.8rem] sm:text-sm font-semibold text-text-primary">{item.title}</div>
              <div className="text-[0.7rem] sm:text-xs text-text-muted">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
