# Status: Neustart Schweden Quiz – Stand 29.08.2026

## Was bisher gebaut wurde (Quiz-Repo, Branch `claude/schweden-quiz-p5wo0a`)

- **140 Fragen** in 2 Bereichen (Tabs):
  - 🧭 **Praktischer Neustart**: 5 Kategorien × 8 Fragen (Sprache, Behörden, Wohnen, Jobsuche, Kultur)
  - 🇸🇪 **Schweden-Wissen**: 10 Kategorien × 10 Fragen (Zahlen, Natur, Tiere, Wetter, Alltag, Essen, Traditionen, Geschichte, Vergleich D/S, Wahr-oder-falsch)
- **"Großes Quiz"** pro Bereich: zufällig gemischte Auswahl (15/20 Fragen), mit **Schwierigkeits-Rampe** (leicht → mittel → schwer, alle 140 Fragen dafür getaggt) – nur im großen Quiz, nicht in den Einzelkategorien.
- **Fortschritt speichern**: beste Punktzahl je Kategorie/Mega-Quiz via `localStorage`, angezeigt als Badge auf den Kategorie-Kacheln.
- **Rabattcode-Funnel**: Bei ≥80 % im großen Quiz erscheint ein E-Mail-Formular; nach Absenden wird sofort der Code **`NEUSTART_SE10`** (10 % auf die Erstberatung) angezeigt (kein Mailversand – Text wurde entsprechend korrigiert). Läuft über Netlify Forms.
- **Kontaktformular** im Footer (Name/E-Mail/Nachricht), ebenfalls Netlify Forms.
- **Branding**: echtes Logo (`logo512.png` von der Homepage) + Favicon eingebaut, Footer-Links zu Impressum/Datenschutz/Widerrufsrecht (verlinken auf die Homepage-Seiten).
- **Design**: Navy/Creme/Orange, Fraunces + Inter, an Homepage-Look angelehnt.

## Deployment

- **Quiz**: eigenes Netlify-Projekt `neustart-schweden-quiz` (Site-ID `2fb3ce49-56a0-47ec-a985-b9507488eb0f`), verbunden mit GitHub-Repo `ulflenz92/neustart-schweden-quiz` (**Repo ist public** – nötig wegen Ein-Mitwirkender-Limit bei privaten Repos im Free-Plan). Auto-Deploy bei jedem Push auf `claude/schweden-quiz-p5wo0a`. Aktuell live unter `neustart-schweden-quiz.netlify.app`.
- **Homepage** (`neustart-schweden.de`): eigenes, **nicht** mit GitHub verbundenes Netlify-Projekt `neustart-schweden`, läuft über manuellen ZIP-Upload durch den Nutzer. Ich habe **keinen** direkten Zugriff/Schreibrecht darauf.
- **Arbeitsvereinbarung**: Änderungen am Quiz-Repo werden vor dem Push besprochen und bestätigt; Änderungen an der Homepage werden als neue ZIP vorbereitet und beschrieben, der Nutzer lädt selbst hoch. Keine unangekündigten Live-Änderungen.

## Vorbereitet, aber noch NICHT live (wartet auf Nutzer-Upload)

Eine aktualisierte Homepage-ZIP (`NSv13.3-mit-quiz-link.zip`) wurde an den Nutzer geschickt, enthält:
- Neuer Menüpunkt "🇸🇪 Schweden-Quiz" in Desktop-Nav **und** Hamburger-Menü auf **allen 10 HTML-Seiten**
- `_redirects`-Datei, die `/schweden-quiz` unsichtbar an `neustart-schweden-quiz.netlify.app` weiterreicht (Proxy, kein Redirect – URL bleibt `neustart-schweden.de/schweden-quiz`)
- Neuer Abschnitt "2.6 Schweden-Quiz (Netlify Forms)" in `datenschutz.html` (Datenverarbeitung durch die Quiz-Formulare), plus Ergänzung zum localStorage-Fortschritt

➡️ **Nächster Schritt für den Nutzer:** ZIP prüfen und bei Netlify (Projekt `neustart-schweden`) hochladen.

## Offene Themen / noch zu klären

1. **Footer-Link zum Quiz auf allen Unterseiten?** Aktuell nur in Nav + Hamburger. Nutzer tendiert zu "ja, auch im Footer", war aber noch nicht final entschieden.
2. **Preisstruktur-Überarbeitung** (besprochen, noch nicht umgesetzt):
   - Neues **kostenloses 15-Min-Kennenlerngespräch** (Entwurfstext für Calendly-Beschreibung bereits vorgeschlagen, wartet auf Freigabe)
   - Bestehendes 90-Min-Orientierungsgespräch: Vorschlag, den Preis auf **149 € als "Einführungspreis bis 31.12.2026"** zu senken (statt 199 €) – auf allen 7 betroffenen Seiten (index, angebote, dalarna, faq, ueber-mich, waldorf, warum-schweden). Nutzer war einverstanden mit der Idee, **Umsetzung aber noch nicht freigegeben.**
   - Wichtig: Der Quiz-Rabattcode ist **prozentual** (10 %), nicht auf einen festen Euro-Betrag hartcodiert – rechnet sich also automatisch vom jeweils aktuellen Preis, keine Anpassung im Quiz-Code nötig, egal wie sich der Grundpreis ändert.
3. **Buchungstool-Frage (noch offen, aktuell größte Baustelle):**
   - Calendly Free erlaubt nur **ein aktives Event gleichzeitig** – blockiert den Plan, Kennenlerngespräch + Orientierungsgespräch parallel selbst buchbar zu machen.
   - Option A (empfohlen, kein Umbau nötig): Nur Kennenlerngespräch über Calendly buchbar, Orientierungsgespräch danach manuell vereinbaren.
   - Option B: Calendly auf "Standard" upgraden (~10–12 €/Monat) für zwei parallele Events.
   - Option C: Wechsel zu einem Tool mit großzügigerem Free-Plan, z. B. **Zeeg** (2 Buchungsseiten kostenlos, Daten in Deutschland, DSGVO-nativ) als aktuell vielversprechendste Alternative; auch meetergo/Brevo als Optionen genannt.
   - **Nutzer prüft/überlegt aktuell, noch keine Entscheidung.** Sobald eine Entscheidung steht: bei Option A/B nur Preistext + ggf. neuer Calendly-Link nötig; bei Option C müssen zusätzlich alle Calendly-Links auf 7 Seiten ausgetauscht werden (Stellen sind bereits bekannt/dokumentiert).
4. Kein Handlungsbedarf, nur zur Erinnerung: Datenschutzerklärungs-Ergänzung (Punkt oben) ist ein Entwurf von mir, keine Rechtsberatung – Nutzer wollte das ggf. noch gegenchecken.

## Kurzreferenzen

- Repo: `github.com/ulflenz92/neustart-schweden-quiz`, Arbeits-Branch: `claude/schweden-quiz-p5wo0a` (noch nicht in `main` gemerged)
- Quiz live: `neustart-schweden-quiz.netlify.app`
- Homepage live: `neustart-schweden.de` (separates Netlify-Projekt, ZIP-Workflow)
- Rabattcode: `NEUSTART_SE10` (10 % auf Erstberatung)
