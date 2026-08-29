# neustart-schweden-quiz

Ein interaktives Quiz rund um den Neustart in Schweden – für [neustart-schweden.de](https://neustart-schweden.de/).

## Inhalt

Fünf Kategorien mit je 8 Fragen (Multiple Choice, mit Erklärung nach jeder Antwort):

- 🗣️ Sprache & Kommunikation
- 📄 Behörden & Papierkram
- 🏠 Wohnen & Umzug
- 💼 Jobsuche & Arbeitsleben
- 🇸🇪 Kultur & Alltag

## Tech-Stack

Reines HTML/CSS/Vanilla JavaScript, kein Build-Schritt nötig.

```
index.html
css/style.css     Styling
js/data.js        Fragenkatalog (Kategorien & Fragen)
js/app.js         Quiz-Logik (Navigation, Auswertung)
```

## Lokal starten

```bash
python3 -m http.server 8765
```

Danach `http://localhost:8765/` im Browser öffnen.

## Fragen anpassen/erweitern

Alle Inhalte liegen zentral in `js/data.js` in der `QUIZ_CATEGORIES`-Liste. Neue Fragen oder Kategorien können dort einfach ergänzt werden, ohne Logik oder Styling anzufassen.
