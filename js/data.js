// Fragenkatalog für das Neustart-Schweden-Quiz.
// Jede Kategorie hat eine id, einen Titel, ein Emoji, eine Kurzbeschreibung
// und eine Liste von Fragen. Jede Frage hat 4 Antwortoptionen, den Index
// der richtigen Antwort sowie eine kurze Erklärung, die nach der Antwort
// angezeigt wird.

const QUIZ_CATEGORIES = [
  {
    id: "sprache",
    title: "Sprache & Kommunikation",
    emoji: "🗣️",
    description: "Erste Schwedischkenntnisse und typische Redewendungen.",
    questions: [
      {
        question: "Was bedeutet das schwedische Wort „Hej“?",
        answers: ["Tschüss", "Hallo", "Danke", "Bitte"],
        correct: 1,
        explanation: "„Hej“ ist die gängigste und lockerste Begrüßung in Schweden – passt fast immer, egal ob im Büro oder im Supermarkt."
      },
      {
        question: "Wie sagt man auf Schwedisch „Danke“?",
        answers: ["Tack", "Snälla", "Förlåt", "Varsågod"],
        correct: 0,
        explanation: "„Tack“ heißt „Danke“. Ein doppeltes „Tack tack“ hört man oft, um die Dankbarkeit zu unterstreichen."
      },
      {
        question: "Was bedeutet „Jag förstår inte“?",
        answers: ["Ich verstehe nicht", "Ich weiß es nicht", "Ich mag es nicht", "Ich habe keine Zeit"],
        correct: 0,
        explanation: "„Jag förstår inte“ heißt „Ich verstehe nicht“ – ein nützlicher Satz für den Anfang."
      },
      {
        question: "Welche Sprache wird in Schweden neben Schwedisch offiziell als Minderheitensprache anerkannt?",
        answers: ["Finnisch", "Dänisch", "Isländisch", "Estnisch"],
        correct: 0,
        explanation: "Finnisch ist eine von fünf offiziell anerkannten Minderheitensprachen in Schweden, u. a. wegen der finnischsprachigen Minderheit im Norden."
      },
      {
        question: "Wie hoch ist der Anteil der Schwed:innen, die gut Englisch sprechen, ungefähr?",
        answers: ["etwa 20 %", "etwa 50 %", "über 85 %", "unter 10 %"],
        correct: 2,
        explanation: "Schweden gehört zu den Ländern mit dem höchsten Englisch-Niveau weltweit – über 85 % kommunizieren gut auf Englisch."
      },
      {
        question: "Was heißt „Var ligger toaletten?“ auf Deutsch?",
        answers: ["Wo ist die Toilette?", "Wo ist der Bahnhof?", "Wie spät ist es?", "Was kostet das?"],
        correct: 0,
        explanation: "Eine sehr praktische Frage für den Alltag: „Var ligger toaletten?“ = „Wo ist die Toilette?“"
      },
      {
        question: "Welches Wort wird im schwedischen Alltag inflationär für „genau richtig, nicht zu viel, nicht zu wenig“ benutzt?",
        answers: ["Lagom", "Fika", "Mysigt", "Skål"],
        correct: 0,
        explanation: "„Lagom“ ist ein sehr schwedisches Konzept und beschreibt ein ausgewogenes Maß – weder zu viel noch zu wenig."
      },
      {
        question: "Wie sagt man „Entschuldigung“ auf Schwedisch?",
        answers: ["Förlåt", "Tack", "Hej då", "Kanske"],
        correct: 0,
        explanation: "„Förlåt“ bedeutet „Entschuldigung“ bzw. „Verzeihung“."
      }
    ]
  },
  {
    id: "behoerden",
    title: "Behörden & Papierkram",
    emoji: "📄",
    description: "Personnummer, Migrationsverket, Skatteverket & Co.",
    questions: [
      {
        question: "Welche Behörde ist für die Erteilung von Aufenthaltstiteln zuständig?",
        answers: ["Skatteverket", "Migrationsverket", "Försäkringskassan", "Arbetsförmedlingen"],
        correct: 1,
        explanation: "Das Migrationsverket (schwedische Migrationsbehörde) bearbeitet Anträge auf Aufenthalts- und Arbeitserlaubnis."
      },
      {
        question: "Was ist ein „personnummer“?",
        answers: ["Eine Telefonnummer", "Eine persönliche Identifikationsnummer", "Eine Steuererklärung", "Ein Führerschein"],
        correct: 1,
        explanation: "Das Personnummer ist die zentrale persönliche ID-Nummer in Schweden – man braucht sie für fast alles: Bankkonto, Mietvertrag, Arztbesuche."
      },
      {
        question: "Bei welcher Behörde meldet man seinen Wohnsitz an (Folkbokföring)?",
        answers: ["Skatteverket", "Kommunen direkt", "Polisen", "Bostadsförmedlingen"],
        correct: 0,
        explanation: "Die Anmeldung des Wohnsitzes (Folkbokföring) läuft über das Skatteverket, die schwedische Steuerbehörde."
      },
      {
        question: "Wofür ist die „Försäkringskassan“ zuständig?",
        answers: ["Autoversicherungen", "Sozialversicherung, z. B. Elterngeld & Krankengeld", "Wohnungsvermittlung", "Visa-Anträge"],
        correct: 1,
        explanation: "Die Försäkringskassan verwaltet Sozialleistungen wie Elterngeld (föräldrapenning) und Krankengeld."
      },
      {
        question: "Was bekommt man erst nach der Folkbokföring in der Regel automatisch zugeschickt?",
        answers: ["Ein Auto", "Eine Personnummer-Karte vom Skatteverket", "Einen Arbeitsvertrag", "Ein Bankkonto"],
        correct: 1,
        explanation: "Nach der Anmeldung beim Skatteverket wird das Personnummer vergeben, das für viele weitere Behördengänge nötig ist."
      },
      {
        question: "Was ist ein „samordningsnummer“?",
        answers: ["Ein zweites Personnummer für Paare", "Eine vorläufige Koordinationsnummer für Personen ohne Wohnsitzanmeldung", "Eine Steuernummer für Unternehmen", "Eine Handynummer"],
        correct: 1,
        explanation: "Das Koordinationsnummer (samordningsnummer) wird z. B. an Personen vergeben, die noch nicht folkbokförd sind, aber z. B. schon arbeiten."
      },
      {
        question: "Welche App/Dienst nutzen viele in Schweden für die digitale Identifikation bei Behörden und Banken?",
        answers: ["BankID", "PayPal", "WhatsApp", "Swish only"],
        correct: 0,
        explanation: "BankID ist die zentrale digitale Identitätslösung in Schweden und wird für Behördengänge, Banking und viele Online-Dienste genutzt."
      },
      {
        question: "Wie lange dauert die Bearbeitung eines Aufenthaltstitels beim Migrationsverket typischerweise – grob eingeschätzt?",
        answers: ["Wenige Tage", "Meist mehrere Monate", "Immer über 3 Jahre", "Genau 24 Stunden"],
        correct: 1,
        explanation: "Bearbeitungszeiten variieren stark je nach Fall, liegen aber häufig im Bereich mehrerer Monate – Geduld und vollständige Unterlagen helfen."
      }
    ]
  },
  {
    id: "wohnen",
    title: "Wohnen & Umzug",
    emoji: "🏠",
    description: "Wohnungssuche, Mietrecht und Umzugs-Basics.",
    questions: [
      {
        question: "Was ist eine „bostadskö“?",
        answers: ["Ein Möbelhaus", "Eine Wohnungswarteschlange", "Ein Umzugsunternehmen", "Eine Art Mietvertrag"],
        correct: 1,
        explanation: "In vielen schwedischen Städten sammelt man über Jahre „kö-Punkte“ (Wartezeit) in einer bostadskö, um an begehrte Mietwohnungen zu kommen."
      },
      {
        question: "Was bedeutet „hyresrätt“?",
        answers: ["Eigentumswohnung", "Mietwohnung mit direktem Mietvertrag", "Genossenschaftswohnung", "Ferienwohnung"],
        correct: 1,
        explanation: "Hyresrätt bezeichnet eine klassische Mietwohnung im Gegensatz zur bostadsrätt (genossenschaftlich) oder Eigentum."
      },
      {
        question: "Was ist eine „bostadsrätt“?",
        answers: ["Eine Ferienwohnung", "Ein genossenschaftliches Wohnrecht, das man kaufen kann", "Ein Untermietvertrag", "Ein staatliches Wohnprogramm"],
        correct: 1,
        explanation: "Bei einer bostadsrätt kauft man das Nutzungsrecht an einer Wohnung über eine Genossenschaft – ähnlich einer Eigentumswohnung, aber rechtlich anders."
      },
      {
        question: "Was ist beim Wohnungsmarkt in Großstädten wie Stockholm eine typische Herausforderung für Neuankömmlinge?",
        answers: ["Zu viele leere Wohnungen", "Lange Wartezeiten und viel Konkurrenz um Mietwohnungen", "Verbot für Ausländer", "Sehr niedrige Mieten"],
        correct: 1,
        explanation: "Besonders in Stockholm, Göteborg und Malmö ist der Wohnungsmarkt angespannt – frühzeitige Suche und mehrere Kanäle nutzen hilft."
      },
      {
        question: "Was ist „andrahandsuthyrning“?",
        answers: ["Zweitwohnsitz im Ausland", "Untervermietung einer Wohnung", "Ein Immobilienmakler", "Eine Art Hypothek"],
        correct: 1,
        explanation: "Andrahandsuthyrning bedeutet Untermiete – eine häufige Option, um schneller an eine Wohnung zu kommen, meist zeitlich befristet."
      },
      {
        question: "Welche Unterlage brauchen Vermieter:innen in Schweden häufig, bevor sie einen Mietvertrag abschließen?",
        answers: ["Reisepasskopie reicht meist aus", "Nachweis über Einkommen/Anstellung", "Nur die Telefonnummer", "Gar keine Unterlagen"],
        correct: 1,
        explanation: "Ein Einkommens- oder Anstellungsnachweis wird häufig verlangt, um die Zahlungsfähigkeit zu prüfen."
      },
      {
        question: "Was ist beim Einzug in eine schwedische Mietwohnung üblich?",
        answers: ["Eine Mietkaution ist gesetzlich vorgeschrieben", "Man zahlt meist keine Kaution, dafür läuft es über Bonitätsprüfung", "Man muss die Wohnung kaufen", "Möbel müssen selbst gekauft werden, die Wohnung ist immer leer"],
        correct: 1,
        explanation: "Anders als in Deutschland ist eine Kaution in Schweden unüblich; Vermieter verlassen sich stärker auf Bonitäts- und Einkommensnachweise."
      },
      {
        question: "Was bedeutet „möblerat“ in einer Wohnungsanzeige?",
        answers: ["Unmöbliert", "Möbliert", "Nur für Studierende", "Nur Kurzzeitmiete"],
        correct: 1,
        explanation: "„Möblerat“ heißt „möbliert“ – praktisch für den Start, wenn man noch keine eigenen Möbel hat."
      }
    ]
  },
  {
    id: "jobsuche",
    title: "Jobsuche & Arbeitsleben",
    emoji: "💼",
    description: "Bewerbung, Arbeitskultur und wichtige Institutionen.",
    questions: [
      {
        question: "Welche Behörde unterstützt bei der Jobsuche und vermittelt Arbeitslosengeld-Themen?",
        answers: ["Arbetsförmedlingen", "Migrationsverket", "Skatteverket", "Bolagsverket"],
        correct: 0,
        explanation: "Die Arbetsförmedlingen ist die staatliche Arbeitsvermittlung in Schweden."
      },
      {
        question: "Was ist „fika“ im schwedischen Arbeitsalltag?",
        answers: ["Eine Teambesprechung", "Eine gemeinsame Kaffeepause", "Ein Bewerbungsgespräch", "Eine Überstundenregelung"],
        correct: 1,
        explanation: "Fika ist eine feste, oft tägliche Kaffee-/Pausenkultur und ein wichtiger sozialer Bestandteil des Arbeitsalltags."
      },
      {
        question: "Wie wird Führung in schwedischen Unternehmen häufig beschrieben?",
        answers: ["Sehr hierarchisch und autoritär", "Eher flach mit viel Konsensorientierung", "Ausschließlich per Anweisung von oben", "Ohne jegliche Meetings"],
        correct: 1,
        explanation: "Schwedische Arbeitskultur gilt als vergleichsweise flach, mit viel Wert auf Konsens und Eigenverantwortung."
      },
      {
        question: "Was ist ein „personligt brev“ bei einer Bewerbung?",
        answers: ["Ein Empfehlungsschreiben des alten Arbeitgebers", "Ein persönliches Anschreiben", "Ein Arbeitsvertrag", "Eine Gehaltsabrechnung"],
        correct: 1,
        explanation: "Das personligt brev entspricht dem klassischen Anschreiben/Motivationsschreiben in der Bewerbung."
      },
      {
        question: "Wie viele Tage bezahlten Mindesturlaub haben Arbeitnehmer:innen in Schweden gesetzlich pro Jahr?",
        answers: ["20 Tage", "25 Tage", "15 Tage", "30 Tage"],
        correct: 1,
        explanation: "Gesetzlich stehen Arbeitnehmer:innen in Schweden mindestens 25 bezahlte Urlaubstage pro Jahr zu."
      },
      {
        question: "Was bedeutet „kollektivavtal“?",
        answers: ["Ein individueller Arbeitsvertrag", "Ein Tarifvertrag zwischen Gewerkschaft und Arbeitgeberverband", "Eine Betriebsordnung", "Ein Praktikumsvertrag"],
        correct: 1,
        explanation: "Kollektivavtal sind Tarifverträge, die Löhne und Arbeitsbedingungen für viele Branchen regeln – sehr verbreitet in Schweden."
      },
      {
        question: "Welche Plattform wird häufig für die Jobsuche in Schweden genutzt?",
        answers: ["Nur Zeitungsanzeigen", "Arbetsförmedlingen.se und LinkedIn", "Ausschließlich persönliche Vorstellung ohne Bewerbung", "Nur Behördenbriefe"],
        correct: 1,
        explanation: "Arbetsförmedlingen.se ist die zentrale offizielle Jobbörse, ergänzt durch LinkedIn und branchenspezifische Portale."
      },
      {
        question: "Wie wichtig sind Deutschkenntnisse für die meisten Jobs in Schweden typischerweise?",
        answers: ["Zwingend erforderlich für fast jeden Job", "Meist nicht relevant, Englisch reicht oft, Schwedisch hilft langfristig", "Wichtiger als Schwedischkenntnisse", "Komplett irrelevant, nur Schwedisch zählt"],
        correct: 1,
        explanation: "Für viele Jobs, besonders international ausgerichtete, reicht Englisch anfangs aus – Schwedischkenntnisse verbessern aber langfristig die Chancen deutlich."
      }
    ]
  },
  {
    id: "kultur",
    title: "Kultur & Alltag",
    emoji: "🇸🇪",
    description: "Traditionen, Alltagsregeln und typisch schwedische Konzepte.",
    questions: [
      {
        question: "Was erlaubt das „Allemansrätten“ (Jedermannsrecht)?",
        answers: ["Freien Zugang zu Wäldern und Natur, auch auf Privatgrund, mit Rücksichtnahme", "Kostenlosen öffentlichen Nahverkehr", "Freien Eintritt in alle Museen", "Kostenlose Jagd überall"],
        correct: 0,
        explanation: "Das Allemansrätten erlaubt es, sich frei in der Natur zu bewegen und z. B. zu zelten oder Beeren zu sammeln – solange man rücksichtsvoll ist."
      },
      {
        question: "Wo kauft man in Schweden Alkohol mit mehr als 3,5 % Vol.?",
        answers: ["Im normalen Supermarkt jederzeit", "Nur im staatlichen Systembolaget", "Nur online aus dem Ausland", "Gar nicht erlaubt"],
        correct: 1,
        explanation: "Stärkere alkoholische Getränke gibt es nur im staatlichen Systembolaget, das begrenzte Öffnungszeiten hat."
      },
      {
        question: "Was wird traditionell zu Mittsommer (Midsommar) gemacht?",
        answers: ["Weihnachtsbaum schmücken", "Um eine Mittsommerstange tanzen und feiern", "Osterfeuer entzünden", "Silvesterfeuerwerk"],
        correct: 1,
        explanation: "Midsommar ist eines der wichtigsten schwedischen Feste – mit Tanz um die Mittsommerstange, Blumenkränzen und gemeinsamem Essen."
      },
      {
        question: "Was bedeutet „Skål“?",
        answers: ["Guten Appetit", "Prost", "Auf Wiedersehen", "Willkommen"],
        correct: 1,
        explanation: "„Skål“ ist der schwedische Trinkspruch, vergleichbar mit „Prost“."
      },
      {
        question: "Welches Recycling-/Pfandsystem ist in Schweden sehr verbreitet?",
        answers: ["Pant für Dosen und Flaschen", "Es gibt kein Pfandsystem", "Nur für Glasflaschen", "Nur für Plastiktüten"],
        correct: 0,
        explanation: "„Pant“ ist das Pfandsystem für Dosen und Flaschen – Rückgabeautomaten findet man in fast jedem Supermarkt."
      },
      {
        question: "Wie wichtig ist Pünktlichkeit im schwedischen Alltag typischerweise?",
        answers: ["Eher unwichtig, man kommt meist spät", "Sehr wichtig, Pünktlichkeit gilt als Respekt", "Nur bei Behördenterminen relevant", "Komplett irrelevant"],
        correct: 1,
        explanation: "Pünktlichkeit wird in Schweden generell großgeschrieben – privat wie beruflich."
      },
      {
        question: "Was ist typisch für den „Kanelbulle“?",
        answers: ["Ein herzhaftes Fischgericht", "Eine Zimtschnecke, oft bei der Fika gegessen", "Ein alkoholisches Getränk", "Eine Wintersportart"],
        correct: 1,
        explanation: "Die Kanelbulle (Zimtschnecke) ist ein Klassiker der schwedischen Fika-Kultur – am 4. Oktober gibt es sogar einen eigenen „Kanelbullens dag“."
      },
      {
        question: "Was bedeutet „mysigt“?",
        answers: ["Anstrengend", "Gemütlich/kuschelig", "Laut", "Kompliziert"],
        correct: 1,
        explanation: "„Mysigt“ beschreibt eine gemütliche, angenehme Atmosphäre – ein zentrales Gefühl in der schwedischen Alltagskultur."
      }
    ]
  }
];
