const contactCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    title: "Adresse",
    content: (
      <>
        Begonienstraße 1<br />
        90542 Eckental
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    title: "Telefon",
    content: <a href="tel:01784096050" className="text-accent no-underline font-medium hover:underline">0178 4096050</a>,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    ),
    title: "WhatsApp",
    content: (
      <a
        href="https://wa.me/491784096050?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20einen%20Autoverkauf%20an%20Sie.%20K%C3%B6nnten%20Sie%20mir%20bitte%20ein%20Angebot%20machen%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent no-underline font-medium hover:underline"
      >
        Nachricht senden
      </a>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    title: "E-Mail",
    content: (
      <a
        href="mailto:k.sala@kala-automobile.de"
        className="text-accent no-underline font-medium hover:underline"
      >
        k.sala@kala-automobile.de
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-bg-white" id="kontakt">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Kontakt
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] mb-3.5">
          Autoankauf Kontakt – So erreichen Sie Ka<span className="text-accent">La</span> Automobile
        </h2>
        <p className="text-text-secondary text-[1.05rem]">
          Rufen Sie uns an, schreiben Sie per WhatsApp oder E-Mail – wir kaufen Ihr Auto in Nürnberg, Eckental und Umgebung.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {contactCards.map((c) => (
          <div
            key={c.title}
            className="bg-bg-white border border-border rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all hover:border-accent hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-accent-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-accent">
              {c.icon}
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{c.title}</h3>
            <p className="text-text-secondary text-xs sm:text-[0.95rem] break-all sm:break-normal">{c.content}</p>
          </div>
        ))}
      </div>

      {/* Google Maps Embed */}
      <div className="max-w-[1200px] mx-auto mt-8 sm:mt-10 rounded-2xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.5!2d11.238!3d49.567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM0JzAyLjAiTiAxMcKwMTQnMTcuMCJF!5e0!3m2!1sde!2sde!4v1"
          width="100%"
          height="250"
          className="sm:h-[350px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KaLa Automobile Standort – Autoankauf Eckental bei Nürnberg"
        />
      </div>
    </section>
  );
}
