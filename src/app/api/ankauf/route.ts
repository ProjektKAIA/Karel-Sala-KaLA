import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MIN_SUBMIT_TIME_MS = 5000; // Mindestens 5 Sekunden zum Ausfüllen

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot-Check: Feld "website" darf nicht ausgefüllt sein
    if (data.website) {
      return NextResponse.json({ success: true }); // Bot bekommt "Erfolg" aber nichts passiert
    }

    // Zeitcheck: Formular muss mindestens 5 Sekunden offen gewesen sein
    if (data._t && Date.now() - Number(data._t) < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json({ success: true }); // Zu schnell = Bot
    }

    const ausstattungList = Array.isArray(data.ausstattung)
      ? data.ausstattung.join(", ")
      : "Keine angegeben";

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#e31e2d;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
          <h1 style="margin:0;font-size:20px">Neue Fahrzeuganfrage</h1>
          <p style="margin:4px 0 0;font-size:14px;opacity:0.9">KaLa Automobile – Ankaufformular</p>
        </div>

        <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;padding:24px">

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Kontaktdaten</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:6px 0;font-weight:bold;width:40%">Name:</td><td>${esc(data.name)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">E-Mail:</td><td><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Straße:</td><td>${esc(data.strasse) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">PLZ / Ort:</td><td>${esc(data.plzOrt) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Telefon:</td><td>${esc(data.telefon) || "–"}</td></tr>
          </table>

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Fahrzeugdaten</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:6px 0;font-weight:bold;width:40%">Marke:</td><td>${esc(data.marke)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Modell:</td><td>${esc(data.modell)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Erstzulassung:</td><td>${esc(data.erstzulassung) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Motorisierung:</td><td>${esc(data.motorisierung) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Leistung:</td><td>${esc(data.leistung)} KW</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Kilometerstand:</td><td>${esc(data.kilometerstand)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Kraftstoff:</td><td>${esc(data.kraftstoff)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Getriebe:</td><td>${esc(data.getriebe)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Farbe:</td><td>${esc(data.farbe) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">TÜV bis:</td><td>${esc(data.tuev) || "–"}</td></tr>
          </table>

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Weitere Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:6px 0;font-weight:bold;width:40%">Sommerreifen:</td><td>${esc(data.sommerreifen) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Winterreifen:</td><td>${esc(data.winterreifen) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Schlüssel:</td><td>${esc(data.schluessel) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Scheckheft:</td><td>${esc(data.scheckheft) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Vorbesitzer:</td><td>${esc(data.vorbesitzer) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold;color:#e31e2d">Verkaufspreis:</td><td style="font-weight:bold;font-size:18px">${esc(data.preis)} €</td></tr>
          </table>

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Ausstattung</h2>
          <p style="margin:8px 0 20px">${ausstattungList || "–"}</p>

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Bekannte Mängel</h2>
          <p style="margin:8px 0 20px;white-space:pre-wrap">${esc(data.maengel) || "Keine angegeben"}</p>

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Sonstiges &amp; Nachricht</h2>
          <p style="margin:8px 0 8px"><strong>Sonstiges:</strong> ${esc(data.sonstiges) || "–"}</p>
          <p style="margin:8px 0 20px"><strong>Nachricht:</strong> ${esc(data.nachricht) || "–"}</p>

          <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
          <p style="font-size:12px;color:#888">Diese Anfrage wurde über das Kontaktformular auf kala-automobile.de gesendet.</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "KaLa Automobile <k.sala@kala-automobile.de>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject: `Neue Fahrzeuganfrage: ${data.marke} ${data.modell} – ${data.name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Email konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    // Bestätigungs-E-Mail an den Kunden
    const kundenHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#e31e2d;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
          <h1 style="margin:0;font-size:20px">Ihre Anfrage bei KaLa Automobile</h1>
          <p style="margin:4px 0 0;font-size:14px;opacity:0.9">Vielen Dank für Ihr Interesse!</p>
        </div>

        <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;padding:24px">
          <p style="font-size:16px;margin:0 0 16px">Hallo ${esc(data.name)},</p>
          <p style="margin:0 0 16px">vielen Dank für Ihre Anfrage zu Ihrem <strong>${esc(data.marke)} ${esc(data.modell)}</strong>. Wir haben Ihre Daten erhalten und werden uns schnellstmöglich bei Ihnen melden – in der Regel innerhalb von 24 Stunden.</p>

          <h2 style="font-size:16px;color:#e31e2d;border-bottom:2px solid #e31e2d;padding-bottom:6px">Zusammenfassung Ihrer Angaben</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:6px 0;font-weight:bold;width:40%">Fahrzeug:</td><td>${esc(data.marke)} ${esc(data.modell)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Erstzulassung:</td><td>${esc(data.erstzulassung) || "–"}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Kilometerstand:</td><td>${esc(data.kilometerstand)}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold">Leistung:</td><td>${esc(data.leistung)} KW</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold;color:#e31e2d">Ihre Preisvorstellung:</td><td style="font-weight:bold">${esc(data.preis)} €</td></tr>
          </table>

          <div style="background:#f9f9f9;border-radius:8px;padding:16px;margin:20px 0">
            <p style="margin:0 0 8px;font-weight:bold">Sie möchten nicht warten?</p>
            <p style="margin:0 0 12px;font-size:14px;color:#555">Kontaktieren Sie uns direkt:</p>
            <a href="https://wa.me/491784096050?text=Hallo%2C%20ich%20habe%20gerade%20eine%20Anfrage%20%C3%BCber%20das%20Formular%20gesendet." style="display:inline-block;background:#25d366;color:#fff;padding:10px 20px;border-radius:20px;text-decoration:none;font-weight:bold;font-size:14px;margin-right:8px">WhatsApp</a>
            <a href="tel:01784096050" style="display:inline-block;background:#e31e2d;color:#fff;padding:10px 20px;border-radius:20px;text-decoration:none;font-weight:bold;font-size:14px">Anrufen: 0178 4096050</a>
          </div>

          <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0"/>
          <p style="font-size:12px;color:#888">Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese Nachricht. Bei Fragen erreichen Sie uns unter <a href="mailto:k.sala@kala-automobile.de">k.sala@kala-automobile.de</a> oder telefonisch unter 0178 4096050.</p>
          <p style="font-size:12px;color:#888">KaLa Automobile · Begonienstraße 1 · 90542 Eckental</p>
        </div>
      </div>
    `;

    const { error: kundenError } = await resend.emails.send({
      from: "KaLa Automobile <k.sala@kala-automobile.de>",
      to: data.email,
      subject: `Ihre Anfrage wurde empfangen – ${data.marke} ${data.modell}`,
      html: kundenHtml,
    });

    if (kundenError) {
      console.error("Kunden-E-Mail Fehler:", kundenError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { success: false, error: "Email konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}

function esc(val: unknown): string {
  if (val == null || val === "") return "";
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
