"use client";

import { useState, type FormEvent } from "react";

const ausstattung = [
  "Klimaanlage",
  "Navigation",
  "Schiebedach",
  "Panoramadach",
  "Standheizung",
  "Sitzheizung",
  "Allrad",
  "Unfallfahrzeug",
];

const inputClass =
  "bg-bg-light border-[1.5px] border-border rounded-[10px] px-4 py-3 text-text-primary font-sans text-[0.95rem] transition-all w-full focus:outline-none focus:border-accent focus:bg-bg-white focus:ring-[3px] focus:ring-accent/10";
const selectClass = `${inputClass} appearance-none cursor-pointer bg-no-repeat bg-[right_16px_center] pr-10`;
const labelClass = "text-[0.85rem] font-medium text-text-secondary mb-1.5";

export default function AnkaufForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-16 lg:py-24 px-6" id="formular">
        <div className="max-w-[800px] mx-auto bg-bg-white border border-border rounded-3xl p-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 className="font-serif text-2xl mb-3">Vielen Dank!</h2>
          <p className="text-text-secondary text-lg mb-6">
            Ihre Anfrage wurde erfolgreich versendet. Wir melden uns
            schnellstmöglich bei Ihnen – in der Regel innerhalb von 24 Stunden.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://wa.me/491784096050"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-6 py-3 rounded-full font-semibold no-underline inline-flex items-center gap-2 hover:bg-[#20bd5a] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Per WhatsApp schreiben
            </a>
            <a
              href="tel:01784096050"
              className="border border-border text-text-primary px-6 py-3 rounded-full font-medium no-underline inline-flex items-center gap-2 hover:border-accent hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Anrufen
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 px-6" id="formular">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></svg>
          Ankauf
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          Fahrzeug jetzt anbieten
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Füllen Sie das Formular aus – wir melden uns schnellstmöglich.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto bg-bg-white border border-border rounded-3xl p-6 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Kontaktdaten */}
            <div className="col-span-full text-base font-semibold text-accent mt-2">
              Kontaktdaten
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Max Mustermann"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                E-Mail <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="max@beispiel.de"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Straße / Hausnr.</label>
              <input
                type="text"
                placeholder="Musterstraße 1"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>PLZ / Ort</label>
              <input
                type="text"
                placeholder="90542 Eckental"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Telefon</label>
              <input
                type="tel"
                placeholder="0178 ..."
                className={inputClass}
              />
            </div>

            {/* Divider */}
            <hr className="col-span-full border-t border-border my-2" />

            {/* Fahrzeugdaten */}
            <div className="col-span-full text-base font-semibold text-accent mt-2">
              Fahrzeugdaten
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Marke <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="z.B. BMW, Audi, VW"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Modell <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="z.B. 3er, A4, Golf"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Erstzulassung</label>
              <input
                type="text"
                placeholder="z.B. 03/2018"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Motorisierung</label>
              <input
                type="text"
                placeholder="z.B. 2.0 TDI, 1.6 TSI"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Leistung (KW) <span className="text-accent">*</span>
              </label>
              <input
                type="number"
                required
                placeholder="z.B. 110"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Kilometerstand <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="z.B. 85.000 km"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Kraftstoffart <span className="text-accent">*</span>
              </label>
              <select required className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>Benzin</option>
                <option>Diesel</option>
                <option>Elektro</option>
                <option>Hybrid</option>
                <option>Autogas (LPG)</option>
                <option>Erdgas (CNG)</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Getriebe <span className="text-accent">*</span>
              </label>
              <select required className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>Schaltgetriebe</option>
                <option>Automatik</option>
                <option>Halbautomatik</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Farbe</label>
              <input
                type="text"
                placeholder="z.B. Schwarz metallic"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                TÜV bis
              </label>
              <input
                type="text"
                placeholder="z.B. 06/2026"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Sommerreifen</label>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>Ja, vorhanden</option>
                <option>Nein</option>
                <option>Auf dem Fahrzeug montiert</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Winterreifen</label>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>Ja, vorhanden</option>
                <option>Nein</option>
                <option>Auf dem Fahrzeug montiert</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Anzahl der Schlüssel</label>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>1</option>
                <option>2</option>
                <option>3 oder mehr</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Scheckheft gepflegt?</label>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>Ja, vollständig</option>
                <option>Ja, teilweise</option>
                <option>Nein</option>
                <option>Digital (Serviceheft)</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Anzahl Vorbesitzer</label>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>
                  - auswählen -
                </option>
                <option>1 (Erstbesitzer)</option>
                <option>2</option>
                <option>3</option>
                <option>4 oder mehr</option>
                <option>Unbekannt</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Verkaufspreis (€) <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Ihre Preisvorstellung"
                className={inputClass}
              />
            </div>

            {/* Divider */}
            <hr className="col-span-full border-t border-border my-2" />

            {/* Mängel */}
            <div className="col-span-full flex flex-col">
              <label className={labelClass}>Bekannte Mängel</label>
              <textarea
                placeholder="z.B. Kratzer an der Beifahrerseite, Klimaanlage defekt ..."
                rows={3}
                className={`${inputClass} resize-vertical min-h-[80px]`}
              />
            </div>

            {/* Divider */}
            <hr className="col-span-full border-t border-border my-2" />

            {/* Ausstattung */}
            <div className="col-span-full text-base font-semibold text-accent mt-2">
              Ausstattung
            </div>
            <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {ausstattung.map((a) => (
                <label
                  key={a}
                  className="flex items-center gap-2.5 cursor-pointer text-sm text-text-secondary"
                >
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] accent-accent cursor-pointer"
                  />
                  {a}
                </label>
              ))}
            </div>

            {/* Divider */}
            <hr className="col-span-full border-t border-border my-2" />

            {/* Sonstiges */}
            <div className="col-span-full flex flex-col">
              <label className={labelClass}>Sonstiges</label>
              <textarea
                placeholder="Weitere Infos zum Fahrzeug ..."
                rows={3}
                className={`${inputClass} resize-vertical min-h-[80px]`}
              />
            </div>

            <div className="col-span-full flex flex-col">
              <label className={labelClass}>Ihre Nachricht</label>
              <textarea
                placeholder="Ihre Nachricht an uns ..."
                rows={3}
                className={`${inputClass} resize-vertical min-h-[80px]`}
              />
            </div>

            {/* Consent */}
            <div className="col-span-full flex items-start gap-2.5 text-[0.85rem] text-text-muted mt-2">
              <input
                type="checkbox"
                required
                className="mt-0.5 accent-accent"
              />
              <span>
                Ich erkläre mich mit der Verarbeitung der eingegebenen Daten
                sowie der{" "}
                <a href="/datenschutz" className="text-accent no-underline hover:underline">
                  Datenschutzerklärung
                </a>{" "}
                einverstanden. <span className="text-accent">*</span>
              </span>
            </div>

            {/* Submit */}
            <div className="col-span-full mt-3">
              <button
                type="submit"
                className="w-full bg-accent text-white py-4.5 rounded-full font-semibold text-[1.05rem] border-none cursor-pointer transition-all shadow-[0_4px_15px_rgba(227,30,45,0.3)] hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(227,30,45,0.35)] flex items-center justify-center gap-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Fahrzeug anbieten
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
