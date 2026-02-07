import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von KaLa Automobile – Informationen zum Umgang mit Ihren personenbezogenen Daten.",
  robots: { index: true, follow: true },
};

export default function Datenschutz() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-20 px-6 min-h-screen bg-bg-white">
        <article className="max-w-[800px] mx-auto">
          <h1 className="font-serif text-3xl mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6 text-text-secondary leading-relaxed text-[0.95rem]">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Karel Sala<br />
                Ka<span className="text-accent">La</span> Automobile<br />
                Begonienstraße 1<br />
                90542 Eckental<br />
                Telefon:{" "}
                <a href="tel:01784096050" className="text-accent no-underline hover:underline">
                  0178 4096050
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:k.sala@kala-automobile.de" className="text-accent no-underline hover:underline">
                  k.sala@kala-automobile.de
                </a>
              </p>
            </section>

            {/* 2. Allgemeines */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung. Die Nutzung unserer Website ist in
                der Regel ohne Angabe personenbezogener Daten möglich.
              </p>
              <p className="mt-2">
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
              </p>
            </section>

            {/* 3. Datenerfassung auf dieser Website */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                3. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-semibold text-text-primary mt-4 mb-1">
                a) Server-Log-Dateien
              </h3>
              <p>
                Der Provider dieser Seiten erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art.
                6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur
                Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
                gestattet.
              </p>

              <h3 className="font-semibold text-text-primary mt-4 mb-1">
                b) Kontaktformular / Ankauf-Formular
              </h3>
              <p>
                Wenn Sie uns per Kontaktformular oder Ankauf-Formular Anfragen
                zukommen lassen, werden Ihre Angaben aus dem Formular
                einschließlich der von Ihnen dort angegebenen Kontaktdaten und
                Fahrzeugdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung der in das Formular eingegebenen Daten erfolgt
                ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO). Sie können diese Einwilligung jederzeit
                widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
                uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p className="mt-2">
                Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns,
                bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
                Speicherung widerrufen oder der Zweck für die Datenspeicherung
                entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
                Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="font-semibold text-text-primary mt-4 mb-1">
                c) Anfrage per E-Mail, Telefon oder WhatsApp
              </h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren,
                wird Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Telefonnummer, E-Mail-Adresse,
                Fahrzeugdaten) zum Zwecke der Bearbeitung Ihres Anliegens bei
                uns gespeichert und verarbeitet.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der effektiven Bearbeitung der an uns gerichteten
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="mt-2">
                <strong>Hinweis zu WhatsApp:</strong> Bei der Nutzung von
                WhatsApp werden Daten an die Meta Platforms Ireland Limited
                (ehemals Facebook Ireland Limited) übertragen. Weitere
                Informationen finden Sie in der Datenschutzerklärung von
                WhatsApp:{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent no-underline hover:underline"
                >
                  https://www.whatsapp.com/legal/privacy-policy
                </a>
                . Die Nutzung von WhatsApp zur Kontaktaufnahme erfolgt auf Ihre
                freiwillige Initiative hin.
              </p>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                4. Cookies
              </h2>
              <p>
                Unsere Website verwendet zum Teil sogenannte Cookies. Cookies
                richten auf Ihrem Rechner keinen Schaden an und enthalten keine
                Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
                effektiver und sicherer zu machen. Cookies sind kleine
                Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr
                Browser speichert.
              </p>
              <p className="mt-2">
                Die meisten der von uns verwendeten Cookies sind sogenannte
                „Session-Cookies". Sie werden nach Ende Ihres Besuchs
                automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
                gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es
                uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="mt-2">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben, die Annahme von Cookies für bestimmte Fälle oder
                generell ausschließen sowie das automatische Löschen der Cookies
                beim Schließen des Browsers aktivieren. Bei der Deaktivierung
                von Cookies kann die Funktionalität dieser Website eingeschränkt
                sein.
              </p>
              <p className="mt-2">
                Die Speicherung von technisch notwendigen Cookies erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
                hat ein berechtigtes Interesse an der Speicherung von Cookies
                zur technisch fehlerfreien und optimierten Bereitstellung seiner
                Dienste.
              </p>
            </section>

            {/* 5. Google Maps */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                5. Google Maps
              </h2>
              <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
                Google Ireland Limited („Google"), Gordon House, Barrow Street,
                Dublin 4, Irland.
              </p>
              <p className="mt-2">
                Zur Nutzung der Funktionen von Google Maps ist es notwendig,
                Ihre IP-Adresse zu speichern. Diese Informationen werden in der
                Regel an einen Server von Google in den USA übertragen und dort
                gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
                diese Datenübertragung. Die Nutzung von Google Maps erfolgt im
                Interesse einer ansprechenden Darstellung unserer
                Online-Angebote und an einer leichten Auffindbarkeit der von uns
                auf der Website angegebenen Orte. Dies stellt ein berechtigtes
                Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p className="mt-2">
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
                Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent no-underline hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </section>

            {/* 6. Google Fonts */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                6. Schriftarten (Google Fonts)
              </h2>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                sogenannte Google Fonts. Die Google Fonts werden lokal auf
                unserem Server gehostet und es findet keine Verbindung zu
                Servern von Google statt. Dadurch werden keine Daten an Google
                übertragen.
              </p>
            </section>

            {/* 7. Ihre Rechte */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                7. Ihre Rechte als betroffene Person
              </h2>
              <p>
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO) – Sie
                  können Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO) – Sie
                  können die Berichtigung unrichtiger oder die Vervollständigung
                  Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung</strong> (Art. 17 DSGVO) – Sie
                  können die Löschung Ihrer bei uns gespeicherten
                  personenbezogenen Daten verlangen, soweit die Verarbeitung
                  nicht zur Ausübung des Rechts auf freie Meinungsäußerung und
                  Information, zur Erfüllung einer rechtlichen Verpflichtung
                  oder aus Gründen des öffentlichen Interesses erforderlich ist.
                </li>
                <li>
                  <strong>Recht auf Einschränkung der Verarbeitung</strong>{" "}
                  (Art. 18 DSGVO) – Sie können die Einschränkung der
                  Verarbeitung Ihrer personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20
                  DSGVO) – Sie können verlangen, dass wir Ihnen Ihre
                  personenbezogenen Daten in einem strukturierten, gängigen und
                  maschinenlesbaren Format übermitteln.
                </li>
                <li>
                  <strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO) – Sie
                  können der Verarbeitung Ihrer personenbezogenen Daten
                  jederzeit widersprechen.
                </li>
                <li>
                  <strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7
                  Abs. 3 DSGVO) – Sie können Ihre einmal erteilte Einwilligung
                  jederzeit gegenüber uns widerrufen.
                </li>
                <li>
                  <strong>Beschwerderecht bei einer Aufsichtsbehörde</strong>{" "}
                  (Art. 77 DSGVO) – Sie können sich bei einer
                  Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                  personenbezogenen Daten durch uns beschweren. Zuständige
                  Aufsichtsbehörde ist das Bayerische Landesamt für
                  Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
                </li>
              </ul>
            </section>

            {/* 8. SSL/TLS */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                8. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
                die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile.
              </p>
              <p className="mt-2">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
            </section>

            {/* 9. Datenspeicherung */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                9. Speicherdauer
              </h2>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben
                (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                Löschung nach Fortfall dieser Gründe.
              </p>
            </section>

            {/* 10. Änderungen */}
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                10. Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt
                dann die neue Datenschutzerklärung.
              </p>
            </section>

            <p className="text-text-muted text-sm pt-4 border-t border-border">
              Stand: 07.02.2026
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
