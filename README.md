# neustart-schweden-quiz

Ein interaktives Quiz rund um Schweden – für [neustart-schweden.de](https://neustart-schweden.de/).

## Inhalt

Zwei Bereiche (Tabs) mit insgesamt 140 Fragen (Multiple Choice, mit Erklärung nach jeder Antwort):

**🧭 Praktischer Neustart** (Umzugs-Ratgeber, 5 Kategorien × 8 Fragen)
- 🗣️ Sprache & Kommunikation
- 📄 Behörden & Papierkram
- 🏠 Wohnen & Umzug
- 💼 Jobsuche & Arbeitsleben
- 🇸🇪 Kultur & Alltag

**🇸🇪 Schweden-Wissen** (Fun Facts & Trivia, 10 Kategorien × 10 Fragen)
- 🇸🇪 Schweden in Zahlen
- 🌲 Natur & Landschaft
- 🫎 Tiere Schwedens
- ❄️ Wetter & Extreme
- 🏡 Schwedischer Alltag
- ☕ Essen & Fika
- 🎄 Traditionen & Kuriositäten
- 📜 Geschichte, Erfindungen & Rekorde
- 🇩🇪 Deutschland vs. Schweden
- 🤔 Wahr oder falsch?

## Tech-Stack

Reines HTML/CSS/Vanilla JavaScript, kein Build-Schritt nötig.

```
index.html
css/style.css     Styling (Navy/Creme/Orange-Branding, Fraunces + Inter)
js/data.js        Fragenkatalog (Tracks -> Kategorien -> Fragen)
js/app.js         Quiz-Logik (Tabs, Navigation, Auswertung)
```

## Lokal starten

```bash
python3 -m http.server 8765
```

Danach `http://localhost:8765/` im Browser öffnen.

## Fragen anpassen/erweitern

Alle Inhalte liegen zentral in `js/data.js` in der `QUIZ_TRACKS`-Liste. Neue Fragen, Kategorien oder ganze Tracks können dort einfach ergänzt werden, ohne Logik oder Styling anzufassen.

**Hinweis zu den Fakten im „Schweden-Wissen“-Track:** Zahlen wie Einwohnerzahl, Tierbestände etc. wurden recherchiert und mit Quellen belegt, ändern sich aber im Lauf der Zeit (z. B. Wolfs-/Bärenbestand, Einwohnerzahl). Vor einem Live-Launch empfiehlt sich eine erneute Prüfung der Zahlen.
