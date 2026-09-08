# Status: Neustart Schweden Quiz – Stand 30.08.2026

> **Hinweis für neue Chats/Sessions:** Diese Datei ist die "Single Source of Truth" für den Projektstand. Bitte am Anfang einer neuen Unterhaltung diese Datei lesen (`STATUS.md` im Repo `ulflenz92/neustart-schweden-quiz`), statt den Verlauf erneut zu erklären. Wird am Ende jeder Arbeitssitzung aktualisiert.

## Was bisher gebaut wurde (Quiz-Repo, Branch `claude/schweden-quiz-p5wo0a`)

- **161 Fragen** in 2 Bereichen (Tabs) – Stand 08.09.2026, nach Nutzer-Feedback-Runde:
  - 🧭 **Praktischer Neustart**: 6 Kategorien × 10 Fragen (Sprache, Behörden, Wohnen, Jobsuche, Kultur & Alltag, **Größte Auswanderfehler** [neu]). Großes Quiz: 20 Fragen (vorher 15).
  - 🇸🇪 **Schweden-Wissen**: 10 Kategorien (Zahlen [11 Fragen], Natur, Tiere, Wetter, Alltag, Essen, Traditionen, Geschichte, Vergleich D/S, Wahr-oder-falsch je 10 Fragen). Großes Quiz: 20 Fragen.
- **Content-Qualitätsrunde (08.09.2026):** Nutzer-Tester bemängelten, dass die richtige Antwort oft an Ausführlichkeit/Länge erkennbar war (falsche Antworten oft kurz/absurd, richtige lang/nuanciert). ~40 Fragen systematisch überarbeitet (v. a. Alltag, Traditionen, Vergleich, Wahr/Falsch, Geschichte, Wetter, Tiere, Essen), sodass alle 4 Antwortoptionen ähnlich lang/plausibel sind. Zusätzlich "Pant"-Antwort (Pfandsystem) um Klammerhinweis "(schwedisch: Pant)" ergänzt, da unübersetzt wie ein Tippfehler wirkte – restliche Sprachprüfung ergab keine weiteren Fälle.
- **Ergebnis-CTA (08.09.2026):** Nach **jedem** Quiz-Ergebnis (nicht mehr nur beim großen Quiz ab 80 %) erscheint jetzt ein score-abhängiger Hinweis + "Kostenlos kennenlernen"-Button (Calendly-Link). Ab 80 % zusätzlich ein Sekundärlink zu neustart-schweden.de/angebote.html. Der bestehende Rabattcode-Block (nur großes Quiz, ≥80 %) bleibt unverändert zusätzlich bestehen.
- **Kritischer Fix – Antwortreihenfolge (08.09.2026):** Nutzer entdeckte, dass in der neuen Kategorie "Größte Auswanderfehler" die richtige Antwort *immer* an erster Stelle stand (wer immer Antwort 1 klickte, hatte automatisch 10/10). Bei Prüfung stellte sich heraus: Das Problem betraf praktisch den **gesamten Fragenkatalog** – Verteilung der `correct`-Position über alle 161 Fragen war [64, 79, 17, 1] statt gleichmäßig, weil weder die Fragenreihenfolge noch die Antwortreihenfolge im Code je gemischt wurden. **Lösung (robuster als manuelles Neusortieren der Daten):** Antwortreihenfolge wird jetzt bei jeder Anzeige einer Frage zufällig gemischt (`state.answerOrder` in `js/app.js`, `renderQuestion()`/`selectAnswer()`). Damit ist das Problem strukturell für immer behoben, auch für alle künftigen neuen Fragen – unabhängig davon, an welcher Stelle im Datensatz die richtige Antwort steht. Verifiziert: "immer Position 1 klicken" ergibt jetzt zufällige Werte (1-4 von 10 in Stichproben) statt garantiert 10/10.
- **Schwierigkeitsgrad "Größte Auswanderfehler" erhöht (08.09.2026):** Nutzer bemängelte zusätzlich, dass die richtigen Antworten dort zu eindeutig gegenüber offensichtlich falschen/absurden Ablenkern herausstachen. Alle 10 Fragen umformuliert: alle 4 Antwortoptionen beschreiben jetzt plausible, realistische Fehler zum jeweiligen Thema – man muss wirklich wissen, welcher der typischste/gravierendste ist, statt nur die einzig sinnvolle Option zu erkennen.
- **"Großes Quiz"** pro Bereich: zufällig gemischte Auswahl (15/20 Fragen), mit **Schwierigkeits-Rampe** (leicht → mittel → schwer, alle 140 Fragen getaggt) – nur im großen Quiz, nicht in Einzelkategorien.
- **Fortschritt speichern**: beste Punktzahl je Kategorie/Mega-Quiz via `localStorage`, Badge auf Kategorie-Kacheln.
- **Rabattcode-Funnel**: Bei ≥80 % im großen Quiz erscheint ein E-Mail-Formular; nach Absenden wird sofort der Code **`NEUSTART_SE10`** (10 % auf die Erstberatung) angezeigt (kein Mailversand – Code erscheint direkt auf der Seite). Läuft über Netlify Forms.
- **Kontaktformular** im Footer (Name/E-Mail/Nachricht), ebenfalls Netlify Forms.
- **Bugfix 08.09.2026 (Commit `4a6359b`):** Beide Formulare schlugen fehl, wenn das Quiz über den `/schweden-quiz`-Proxy aufgerufen wurden – `submitNetlifyForm()` postete an relative URL `"/"`, was auf der Homepage-Domain landete statt auf der Quiz-eigenen Netlify-Site. Gefixt: absolute Ziel-URL `https://neustart-schweden-quiz.netlify.app/` + `mode:"no-cors"` (Cross-Origin-Antwort kann eh nicht gelesen werden). Lokal mit Playwright verifiziert: korrekte Request-URL/-Body, Promise löst auf, keine JS-Fehler.
- **Form-Notifications eingerichtet (08.09.2026):** Nutzer hat in Netlify (Site → Forms → Form notifications) eine gemeinsame E-Mail-Benachrichtigung für beide Formulare eingerichtet (an `neustart.schweden@gmail.com`). Separates Einrichten pro Formular ("rabattcode") ließ sich im Netlify-Dashboard aus unklarem Grund nicht abspeichern (vermutlich ein Netlify-eigener UI-Bug) – gemeinsame Benachrichtigung ist als Übergangslösung ausreichend.
- **Open-Graph/Twitter-Card-Tags ergänzt (Commit `925c799`):** Quiz-Seite hatte keinerlei `og:image` etc. – beim Teilen des Links (WhatsApp, iMessage, Facebook) erschien keine Vorschau/kein Logo. Jetzt ergänzt: og:title/description/image + Twitter-Card-Tags.
- **Vorschaubild (Commit `59ae7dc`):** `assets/preview.jpg` zeigt jetzt ein eigens vom Nutzer erstelltes Quiz-Banner (echtes Logo, "Wie gut kennst du Schweden?") statt des anfangs von Claude generierten Platzhalters bzw. des generischen Hauptseiten-Bilds. HTML-Referenzen unverändert (gleicher Dateiname).
- **Branding**: echtes Logo (`logo512.png`) + Favicon, Footer-Links zu Impressum/Datenschutz/Widerrufsrecht.
- **Design**: Navy/Creme/Orange, Fraunces + Inter, an Homepage-Look angelehnt.

## Deployment

- **Quiz**: Netlify-Projekt `neustart-schweden-quiz` (Site-ID `2fb3ce49-56a0-47ec-a985-b9507488eb0f`), verbunden mit GitHub-Repo `ulflenz92/neustart-schweden-quiz` (**Repo ist public** – nötig wegen Ein-Mitwirkender-Limit bei privaten Repos im Netlify-Free-Plan). Auto-Deploy bei jedem Push auf `claude/schweden-quiz-p5wo0a`. Live unter `neustart-schweden-quiz.netlify.app`.
- **Homepage** (`neustart-schweden.de`): eigenes, **nicht** mit GitHub verbundenes Netlify-Projekt `neustart-schweden`, läuft über manuellen ZIP-Upload durch den Nutzer. Kein direkter Schreibzugriff durch Claude.
- **Arbeitsvereinbarung:** Änderungen am Quiz-Repo werden vor dem Push besprochen und bestätigt; Homepage-Änderungen werden als neue ZIP vorbereitet und beschrieben, Nutzer lädt selbst hoch. Keine unangekündigten Live-Änderungen.

### ⚠️ Netlify-Credit-Budget – WICHTIGE STANDING RULE (seit 01.09.2026)

Das Quiz-Repo ist git-verbunden mit Netlify → **jeder `git push` löst automatisch einen echten Production-Deploy aus**, unabhängig davon, wie klein die Änderung ist (auch reine Doku-Commits). Am 01.09.2026 wurde dadurch das komplette monatliche Credit-Kontingent des Netlify-Free-Plans (300 Credits/Monat) aufgebraucht – **Production-Deploys sind praktisch der einzige Verbrauchsposten** (bestätigt über Netlify-Billing-Dashboard: 20 Deploys = 300 von 305,5 verbrauchten Credits; AI-Inference/Agent Runners/Compute lagen bei 0). Das ergibt **~15 Credits pro Deploy** und damit ein effektives Budget von **nur ca. 20 Production-Deploys pro Monat** auf dem Free-Plan.

**Daraus folgende Regeln, die ab sofort gelten:**
1. **Änderungen bündeln, nicht einzeln pushen.** Mehrere Fixes/Anpassungen in einem Arbeitsgang sammeln und dann in einem Commit/Push zusammenfassen, statt nach jeder kleinen Korrektur sofort zu pushen.
2. **`netlify.toml` hat eine Ignore-Regel** (seit Commit `b21032b`): Commits, die *ausschließlich* `STATUS.md` ändern, lösen keinen Deploy aus (`ignore = "git diff --quiet HEAD^ HEAD -- . ':!STATUS.md'"`). Bei reinen Status-Updates trotzdem sparsam bleiben – im Zweifel mit dem nächsten inhaltlichen Push kombinieren statt separat pushen.
3. **Vor jedem Push kurz abwägen:** Lohnt sich ein sofortiger Deploy, oder kann die Änderung noch mit weiteren offenen Punkten gesammelt werden?
4. Der Nutzer bekommt bei jedem Push eine Bestätigung von Claude – das bleibt bestehen, aber die Häufigkeit der Pushes selbst soll bewusst reduziert werden.
5. Kontingent-Reset: Abrechnungszyklus läuft monatlich (aktuell 08.08.–07.09.2026), danach wieder 300 frische Credits. Exakte Uhrzeit des Resets ist nicht einsehbar, nur das Datum.

## Geschäftsentscheidungen (heute final geklärt)

- **Zweistufiger Beratungs-Funnel:**
  1. **Kostenloses 15-Min-Kennenlerngespräch** (neu) – unverbindlich, keine Beratung, nur Kennenlernen/Bedarf klären. Calendly-Link: `calendly.com/ulflenz/kennenlerngespraech` (vom Nutzer bereits fertig eingerichtet: Free-Plan, 24h Vorlauf, 21 Tage im Voraus, 30-Min-Raster mit 15-Min-Puffer funktioniert auch im Free-Plan, max. 4/Tag).
  2. **90-Min-Orientierungsgespräch** – **149 € Einführungspreis bis 31.12.2026** (statt 199 €), wird **nicht mehr direkt bei Calendly gebucht**, sondern nach dem Kennenlerngespräch per E-Mail vereinbart (inkl. Vorkasse/Rechnung – Grund: Empfehlung der Steuerberaterin wegen schlechter Erfahrung mit Zahlungsausfällen bei internationalen Kunden).
- **Grund für die Trennung:** Calendly Free erlaubt nur 1 aktives Event gleichzeitig. Bewusste Entscheidung: **bei Calendly Free bleiben**, kein Upgrade, kein Tool-Wechsel (Alternativen wie Zeeg wurden geprüft, aber verworfen – zu viel Umbau für den Start). Auto-Blocking von Doppelbuchungen funktioniert trotzdem automatisch über Kalenderabgleich (Google Calendar), auch wenn der zweite Termin manuell eingetragen wird.
- **Fragebogen (Airtable):** wird von der Website entfernt (Startseite/Angebote-Seite) – passt nicht mehr vor das kostenlose Kennenlerngespräch. Wird künftig nur noch individuell per E-Mail verschickt, als Vorbereitung fürs Orientierungsgespräch. **Umsetzung noch nicht final bestätigt, Vorschlag steht.**
- **Name-Fix nötig:** `ueber-mich.html` hat fehlerhafte Meta-Tags "Jan Schneider" (Template-Rest) – korrekter Name ist **Ulf Lenz**. Muss korrigiert werden.
- **Kalender:** eigener Google-Kalender "Neustart Schweden – Termine" empfohlen (nicht privater Kalender). Infomaniak/kSuite ist die langfristige Infrastruktur-Wahl des Nutzers, aktuell aber noch in Einrichtung (keine funktionierende Domain-E-Mail bisher) – **kein Launch-Blocker**, erstmal mit Google Calendar arbeiten.

## Vorbereitet, aber noch NICHT live (wartet auf Nutzer-Upload)

Neueste Homepage-ZIP: **`NSv13.5-button-fixes.zip`** (an Nutzer geschickt) – Bugfix-Runde nach Live-Review von `NSv13.4`. Enthält `NSv13.4` komplett plus folgende Korrekturen:

**Ausgangslage:** Nutzer hatte `NSv13.4` hochgeladen und live auf dem Handy geprüft – dabei 6 Probleme gefunden (Button "Kostenlos kennenlernen" stand irreführend direkt unter der bezahlten 149-€/90-Min-Beschreibung, Alt-Text-Rest "Ulf Schneider" bei ueber-mich.html, doppelter Hinweistext in angebote.html, "Erster Schritt"-Label nicht mehr korrekt).

**Fix in `NSv13.5` – Zwei-Boxen-Lösung für Orientierungsgespräch (index.html + angebote.html):**
- Neue eigenständige Box "Kostenloses Kennenlerngespräch" (Label "Erster Schritt", Button → Calendly-Link) direkt vor/über der Orientierungsgespräch-Preisbox eingefügt (jeweils 2× auf index.html: Angebot-Sektion + Buchungsbox unten; 1× auf angebote.html)
- Orientierungsgespräch-Box/Karte: Label "Erster Schritt" → **"Zweiter Schritt"**; Button "Kostenlos kennenlernen" → **"Anfragen"**, verlinkt jetzt (konsistent mit den 3 größeren Paketen) direkt zum Airtable-Fragebogen statt zu Calendly; Hinweistexte entsprechend angepasst
- Teaser-CTAs auf `dalarna.html`, `warum-schweden.html`, `waldorf.html`, `ueber-mich.html`: gleicher Fix (Button → "Anfragen" → Fragebogen)
- Doppelten Calendly-Hinweistext in angebote.html-Preisbox bereinigt
- `ueber-mich.html`: Alt-Text `"Ulf Schneider"` → `"Ulf Lenz"` (Bilddatei selbst heißt weiterhin technisch `jan.jpg`, das ist unsichtbar für Besucher und unproblematisch)
- FAQ-Textstelle (angebote.html) an neuen Anfrageweg fürs Orientierungsgespräch angepasst
- "So läuft es ab"-Block (index.html): Section-Tag "Orientierungsgespräch" → **"Kennenlerngespräch"**, Überschrift "Ist ein Gespräch das Richtige für euch?" → **"Lohnt sich ein Kennenlerngespräch für euch?"** – Block dreht sich inhaltlich um die ganze Journey, nicht nur ums bezahlte Gespräch

Alle 10 Seiten erneut automatisiert geprüft: HTTP 200, keine JS-Fehler, keine "199 €"-Reste, keine Fragebogen-Box-Reste, kein "Ulf/Jan Schneider" mehr, Button-Anzahlen visuell + per Screenshot verifiziert.

**Bewusst nicht angefasst:** Der `cta-final`-Block ganz unten auf `angebote.html` bewirbt korrekt nur das kostenlose Gespräch (kein Widerspruch, unverändert gelassen).

### Weitere Runde: `NSv13.6-kennenlernen-first.zip` (nach erneutem Live-Review von NSv13.5)

Nutzer hatte NSv13.5 geprüft und 2 weitere Punkte gefunden:
1. Der Calendly-Hinweistext ("kostenpflichtiger Vertrag entsteht dadurch noch nicht...") stand noch bei Buttons, die **ausschließlich** zum kostenlosen Kennenlerngespräch führen – dort unnötig/verwirrend, da eh kein Vertrag entstehen kann. **Entfernt** in `angebote.html` (cta-final-Block) und `faq.html` (dort auch entdeckt, war beim letzten Durchgang übersehen worden).
2. Die Teaser-CTA-Boxen (`dalarna.html`, `warum-schweden.html`, `waldorf.html`, `ueber-mich.html`, `faq.html`) warben inhaltlich (Überschrift/Text/Checkliste) weiterhin hauptsächlich fürs bezahlte 90-Min-Orientierungsgespräch, obwohl der Button schon auf "Anfragen" stand – passte nicht zur Grundregel "Kennenlerngespräch = zentraler Einstieg". **Umgebaut:** Text/Checkliste jetzt aufs kostenlose 15-Min-Kennenlerngespräch ausgerichtet, Haupt-Button wieder "Kostenlos kennenlernen" → Calendly, zusätzlich kleiner Text-Link darunter ("Ihr wisst schon genug? → Direkt Orientierungsgespräch anfragen") → Fragebogen für Besucher, die schon weiter sind.

`index.html`- und `angebote.html`-Angebot-Sektionen (die Zwei-Boxen-Lösung mit Erster-/Zweiter-Schritt) sind davon nicht betroffen – dort war die Balance schon korrekt.

Alle 10 Seiten erneut automatisiert geprüft (HTTP 200, keine JS-Fehler) + Screenshots der neuen Boxen visuell kontrolliert.

➡️ **Nächster Schritt:** Nutzer lädt die ZIP bei Netlify hoch und prüft das Ergebnis live.

### Kritischer Bugfix: `NSv13.7-quiz-link-fix.zip` (Quiz-Link komplett kaputt)

Nach Upload von NSv13.6 gemeldet: Das Quiz unter `/schweden-quiz` lud **komplett ohne CSS/JS** (nackter Browser-Standard-Look, "0/0"-Anzeige, keine Funktion).

**Ursache:** Nav-Link zeigte auf `https://neustart-schweden.de/schweden-quiz` **ohne** abschließenden Schrägstrich. Das Quiz referenziert CSS/JS relativ (`css/style.css`, `js/app.js`). Ohne Slash am Ende löst der Browser das fälschlich zu `neustart-schweden.de/css/style.css` auf (Pfad ohne `/schweden-quiz/`-Präfix) – 404, da die `_redirects`-Regel nur `/schweden-quiz/*` (mit Slash) abfängt.

**Fix:**
- Alle 20 Nav-Link-Stellen (Desktop-Nav + Hamburger, je 10 Seiten) auf `.../schweden-quiz/` (mit Slash) korrigiert
- `_redirects` um zusätzliche Sicherheitsnetz-Regel ergänzt: `/schweden-quiz` (ohne Slash) → 301-Redirect auf `/schweden-quiz/`, erst dann der Proxy zum Quiz. Greift jetzt auch bei alten Links/Lesezeichen ohne Slash.

Automatisiert verifiziert: Nav-Link-href jetzt korrekt mit Slash, keine Stelle ohne Slash mehr übrig.

➡️ **Nächster Schritt:** Nutzer lädt `NSv13.7-quiz-link-fix.zip` hoch und prüft, ob das Quiz jetzt korrekt mit Styling lädt.

### Weitere Runde: `NSv13.8-hamburger-fragebogen-fix.zip` (vor dem Hochladen von NSv13.7 gemeldet)

Nutzer bemerkte vor dem Upload: Im **Hamburger-Menü** stand auf allen 10 Seiten noch der Link "📋 Erst Fragebogen ausfüllen" (Airtable-Link, direkt vor "Kostenlos kennenlernen"). Das war eine andere Stelle als die bereits in NSv13.4 entfernte Fragebogen-**Box** – wurde beim ersten Entfernungsdurchgang übersehen.

**Fix:** Link-Zeile + die jetzt ungenutzte zugehörige CSS-Regel (`.mobile-menu .fragebogen-link`) auf allen 10 Seiten entfernt. Enthält zusätzlich den Quiz-Link-Fix aus NSv13.7 (kumulativ). Automatisiert verifiziert: keine Fragebogen-Reste mehr, keine JS-Fehler, HTTP 200 überall.

➡️ **Nächster Schritt:** Nutzer lädt `NSv13.8-hamburger-fragebogen-fix.zip` hoch (aktuellste Version, ersetzt NSv13.7).

### Notfall-Fix: `NSv13.9-redirect-loop-fix.zip` (NSv13.7/13.8 verursachten ERR_TOO_MANY_REDIRECTS!)

Nach Upload von NSv13.8: **Komplette Redirect-Schleife**, Seite gar nicht mehr erreichbar (`ERR_TOO_MANY_REDIRECTS`). Ursache: die in NSv13.7 zusätzlich eingebaute Sicherheitsnetz-Regel in `_redirects` (`/schweden-quiz` → 301 → `/schweden-quiz/`). Netlify behandelt `/schweden-quiz` und `/schweden-quiz/` bei der Regel-Prüfung offenbar als gleich, wodurch die 301-Weiterleitung sich selbst endlos wiederholte.

**Fix:** Diese 301-Regel wieder entfernt, `_redirects` zurück auf die einfache 2-Regel-Struktur (Original-Setup, jeweils direkter 200-Proxy für `/schweden-quiz` und `/schweden-quiz/*`, keine zusätzliche Weiterleitung mehr). Der eigentliche Quiz-Link-Fix (Schrägstrich in allen 20 Nav-Link-Stellen) bleibt bestehen und reicht allein aus, da alle Nav-Links jetzt korrekt auf `.../schweden-quiz/` zeigen.

**Lehre:** Keine zusätzlichen "Sicherheitsnetz"-Redirect-Regeln mehr ohne triftigen Grund einbauen – erhöht das Risiko unerwarteter Netlify-spezifischer Matching-Eigenheiten (Trailing-Slash-Normalisierung) unnötig.

➡️ **Nächster Schritt:** Nutzer lädt `NSv13.9-redirect-loop-fix.zip` hoch (aktuellste Version, ersetzt NSv13.7 und NSv13.8).

## Weitere offene Themen

- **Footer-Link zum Quiz auf allen Seiten zusätzlich zu Nav+Hamburger?** Tendenz "ja", noch nicht final bestätigt.
- Datenschutz-Ergänzungen sind Entwürfe von Claude, keine Rechtsberatung – Nutzer wollte ggf. gegenchecken.
- **Echter E-Mail-Versand für Rabattcode/Lead-Magnet (bewusst zurückgestellt, 08.09.2026):** Externes Feedback empfahl, den Rabattcode/eine künftige Checkliste ("Die 5 größten Fehler beim Auswandern") tatsächlich per E-Mail zu verschicken statt sofort auf der Seite anzuzeigen – bessere Lead-Qualität (echte E-Mail-Adressen) + Statistik. Aktuell existiert dafür kein Versand-Mechanismus (Netlify Forms sammelt nur ein, verschickt nichts an Absender). Bräuchte einen E-Mail-Dienst (z. B. Resend/Brevo, kostenlose Kontingente vorhanden) + kleine serverseitige Funktion. **Nutzer-Entscheidung:** als eigenständiges Folgeprojekt behandeln, nicht mit der aktuellen Content-/CTA-Runde vermischt. Noch nicht begonnen.

## Kurzreferenzen

- Repo: `github.com/ulflenz92/neustart-schweden-quiz`, Branch: `claude/schweden-quiz-p5wo0a` (noch nicht in `main` gemerged)
- Quiz live: `neustart-schweden-quiz.netlify.app`
- Homepage live: `neustart-schweden.de` (separates Netlify-Projekt, ZIP-Workflow)
- Rabattcode: `NEUSTART_SE10` (10 % auf Erstberatung, prozentual – passt sich automatisch an, egal welcher Grundpreis)
- Neuer Calendly-Link (Kennenlerngespräch): `calendly.com/ulflenz/kennenlerngespraech`
- Verantwortlicher/Name: **Ulf Lenz** (nicht "Jan")
