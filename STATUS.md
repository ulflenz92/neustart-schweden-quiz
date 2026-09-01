# Status: Neustart Schweden Quiz – Stand 30.08.2026

> **Hinweis für neue Chats/Sessions:** Diese Datei ist die "Single Source of Truth" für den Projektstand. Bitte am Anfang einer neuen Unterhaltung diese Datei lesen (`STATUS.md` im Repo `ulflenz92/neustart-schweden-quiz`), statt den Verlauf erneut zu erklären. Wird am Ende jeder Arbeitssitzung aktualisiert.

## Was bisher gebaut wurde (Quiz-Repo, Branch `claude/schweden-quiz-p5wo0a`)

- **140 Fragen** in 2 Bereichen (Tabs):
  - 🧭 **Praktischer Neustart**: 5 Kategorien × 8 Fragen (Sprache, Behörden, Wohnen, Jobsuche, Kultur)
  - 🇸🇪 **Schweden-Wissen**: 10 Kategorien × 10 Fragen (Zahlen, Natur, Tiere, Wetter, Alltag, Essen, Traditionen, Geschichte, Vergleich D/S, Wahr-oder-falsch)
- **"Großes Quiz"** pro Bereich: zufällig gemischte Auswahl (15/20 Fragen), mit **Schwierigkeits-Rampe** (leicht → mittel → schwer, alle 140 Fragen getaggt) – nur im großen Quiz, nicht in Einzelkategorien.
- **Fortschritt speichern**: beste Punktzahl je Kategorie/Mega-Quiz via `localStorage`, Badge auf Kategorie-Kacheln.
- **Rabattcode-Funnel**: Bei ≥80 % im großen Quiz erscheint ein E-Mail-Formular; nach Absenden wird sofort der Code **`NEUSTART_SE10`** (10 % auf die Erstberatung) angezeigt (kein Mailversand – Code erscheint direkt auf der Seite). Läuft über Netlify Forms.
- **Kontaktformular** im Footer (Name/E-Mail/Nachricht), ebenfalls Netlify Forms.
- **Branding**: echtes Logo (`logo512.png`) + Favicon, Footer-Links zu Impressum/Datenschutz/Widerrufsrecht.
- **Design**: Navy/Creme/Orange, Fraunces + Inter, an Homepage-Look angelehnt.

## Deployment

- **Quiz**: Netlify-Projekt `neustart-schweden-quiz` (Site-ID `2fb3ce49-56a0-47ec-a985-b9507488eb0f`), verbunden mit GitHub-Repo `ulflenz92/neustart-schweden-quiz` (**Repo ist public** – nötig wegen Ein-Mitwirkender-Limit bei privaten Repos im Netlify-Free-Plan). Auto-Deploy bei jedem Push auf `claude/schweden-quiz-p5wo0a`. Live unter `neustart-schweden-quiz.netlify.app`.
- **Homepage** (`neustart-schweden.de`): eigenes, **nicht** mit GitHub verbundenes Netlify-Projekt `neustart-schweden`, läuft über manuellen ZIP-Upload durch den Nutzer. Kein direkter Schreibzugriff durch Claude.
- **Arbeitsvereinbarung:** Änderungen am Quiz-Repo werden vor dem Push besprochen und bestätigt; Homepage-Änderungen werden als neue ZIP vorbereitet und beschrieben, Nutzer lädt selbst hoch. Keine unangekündigten Live-Änderungen.

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

➡️ **Nächster Schritt:** Nutzer lädt die ZIP bei Netlify hoch und prüft das Ergebnis live.

## Weitere offene Themen

- **Footer-Link zum Quiz auf allen Seiten zusätzlich zu Nav+Hamburger?** Tendenz "ja", noch nicht final bestätigt.
- Datenschutz-Ergänzungen sind Entwürfe von Claude, keine Rechtsberatung – Nutzer wollte ggf. gegenchecken.

## Kurzreferenzen

- Repo: `github.com/ulflenz92/neustart-schweden-quiz`, Branch: `claude/schweden-quiz-p5wo0a` (noch nicht in `main` gemerged)
- Quiz live: `neustart-schweden-quiz.netlify.app`
- Homepage live: `neustart-schweden.de` (separates Netlify-Projekt, ZIP-Workflow)
- Rabattcode: `NEUSTART_SE10` (10 % auf Erstberatung, prozentual – passt sich automatisch an, egal welcher Grundpreis)
- Neuer Calendly-Link (Kennenlerngespräch): `calendly.com/ulflenz/kennenlerngespraech`
- Verantwortlicher/Name: **Ulf Lenz** (nicht "Jan")
