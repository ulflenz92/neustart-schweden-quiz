// Fragenkatalog für das Neustart-Schweden-Quiz.
// Die Fragen sind in zwei Tracks gruppiert (praktischer Ratgeber vs.
// Schweden-Wissen/Trivia), jeder Track enthält Kategorien mit id, Titel,
// Emoji, Kurzbeschreibung und einer Fragenliste. Jede Frage hat 4
// Antwortoptionen, den Index der richtigen Antwort sowie eine kurze
// Erklärung, die nach der Antwort angezeigt wird.

const QUIZ_TRACKS = [
  {
    id: "praktisch",
    title: "Praktischer Neustart",
    emoji: "🧭",
    description: "Behörden, Wohnen, Jobsuche & Sprache für den Umzug.",
    mixCount: 15,
    categories: [
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
    ]
  },
  {
    id: "wissen",
    title: "Schweden-Wissen",
    emoji: "🇸🇪",
    description: "Fun Facts, Zahlen, Natur, Tiere und Geschichte.",
    mixCount: 20,
    categories: [
      {
        id: "zahlen",
        title: "Schweden in Zahlen",
        emoji: "🇸🇪",
        description: "Fläche, Einwohner, Seen und andere Kennzahlen.",
        questions: [
          {
            question: "Wie viele Seen hat Schweden ungefähr?",
            answers: ["ca. 10.000", "ca. 100.000", "ca. 500.000", "ca. 1 Million"],
            correct: 1,
            explanation: "Je nach Zählmethode schwankt die Zahl, aber „ca. 100.000 Seen“ ist der gängigste Richtwert – darunter 23 Seen mit mehr als 100 km² Fläche."
          },
          {
            question: "Wie viele Inseln hat Schweden insgesamt (inkl. kleinster Felsinseln)?",
            answers: ["etwa 10.000", "etwa 50.000", "über 260.000", "über 1 Million"],
            correct: 2,
            explanation: "Offiziell zählt die Statistikbehörde SCB 267.570 Inseln – davon sind nur etwa 1.000 dauerhaft bewohnt."
          },
          {
            question: "In welche Richtung fließen die meisten großen schwedischen Flüsse?",
            answers: [
              "Von den Fjällen im Nordwesten Richtung Ostsee/Bottnischer Meerbusen im Südosten",
              "Von Süden nach Norden ins Nordmeer",
              "Kreisförmig um die großen Seen herum",
              "Alle münden direkt in die Nordsee"
            ],
            correct: 0,
            explanation: "Typisch für Schweden: Flüsse entspringen im Bergland des Nordwestens und fließen in Richtung Ostsee bzw. Bottnischer Meerbusen im Südosten."
          },
          {
            question: "Wie hoch ist der Waldanteil an der Landesfläche Schwedens?",
            answers: ["ca. 30 %", "ca. 50 %", "knapp 70 %", "über 90 %"],
            correct: 2,
            explanation: "Rund 69 % der Fläche Schwedens sind bewaldet – zum Vergleich: In Deutschland sind es etwa 32 %."
          },
          {
            question: "Wie viele Menschen leben in Schweden (Stand 2026)?",
            answers: ["ca. 6 Millionen", "gut 10,6 Millionen", "ca. 15 Millionen", "ca. 25 Millionen"],
            correct: 1,
            explanation: "Schweden hat laut Statistikbehörde SCB rund 10,6 Millionen Einwohner."
          },
          {
            question: "Wie viele Menschen leben durchschnittlich auf einem Quadratkilometer in Schweden?",
            answers: ["ca. 26", "ca. 100", "ca. 240", "ca. 500"],
            correct: 0,
            explanation: "Schweden hat eine Bevölkerungsdichte von nur ca. 26 Einwohner/km² – Deutschland liegt bei rund 241/km², also fast neunmal so dicht besiedelt."
          },
          {
            question: "Wie lang ist Schweden von Nord nach Süd (Luftlinie)?",
            answers: ["ca. 800 km", "ca. 1.570 km", "ca. 2.500 km", "ca. 3.200 km"],
            correct: 1,
            explanation: "Schweden erstreckt sich rund 1.574 km von Nord nach Süd – von Süden nach Norden ändert sich damit auch das Klima sehr stark."
          },
          {
            question: "Wie lang ist die schwedische Küstenlinie ungefähr?",
            answers: ["ca. 500 km", "ca. 2.000 km", "über 6.000 km", "über 20.000 km"],
            correct: 2,
            explanation: "Je nachdem, ob man die Schären mitzählt, kommen unterschiedliche Werte heraus – als grobe, gut belegte Aussage gilt: über 6.000 km Küste."
          },
          {
            question: "Wie viele Nationalparks gibt es in Schweden (Stand 2025)?",
            answers: ["10", "30", "60", "100"],
            correct: 1,
            explanation: "Schweden hat 30 Nationalparks, die zusammen gut 1,5 % der Landesfläche schützen – 2025 kam mit Nämdöskärgården der bislang jüngste dazu."
          },
          {
            question: "Welche Stadt gilt als nördlichste größere Stadt Schwedens, teils oberhalb des Polarkreises?",
            answers: ["Kiruna", "Umeå", "Luleå", "Sundsvall"],
            correct: 0,
            explanation: "Kiruna liegt weit oberhalb des Polarkreises und ist die nördlichste größere Stadt Schwedens – bekannt auch für Bergbau und Polarnächte."
          }
        ]
      },
      {
        id: "natur",
        title: "Natur & Landschaft",
        emoji: "🌲",
        description: "Seen, Berge, Fjäll und die Vielfalt der Landschaft.",
        questions: [
          {
            question: "Welches ist der größte See Schwedens?",
            answers: ["Vättern", "Mälaren", "Vänern", "Hjälmaren"],
            correct: 2,
            explanation: "Der Vänern ist mit 5.519 km² der größte See Schwedens – und zugleich der größte See der gesamten EU."
          },
          {
            question: "Welches ist der tiefste See Schwedens?",
            answers: ["Vänern", "Hornavan", "Siljan", "Mälaren"],
            correct: 1,
            explanation: "Der Hornavan in Lappland ist mit 221 m Tiefe der tiefste See Schwedens."
          },
          {
            question: "Welches ist der höchste Berg Schwedens?",
            answers: ["Sarek", "Åreskutan", "Kebnekaise", "Sylarna"],
            correct: 2,
            explanation: "Der Kebnekaise ist mit rund 2.097 m (Nordgipfel) der höchste Berg Schwedens – sein Südgipfel-Gletscher schmilzt zunehmend."
          },
          {
            question: "Welcher Landesteil Schwedens ist am dichtesten bewaldet und am dünnsten besiedelt?",
            answers: ["Skåne", "Norrland", "Gotland", "Das Gebiet um Stockholm"],
            correct: 1,
            explanation: "Norrland, das nördliche zwei Drittel Schwedens, ist besonders waldreich und extrem dünn besiedelt."
          },
          {
            question: "Was bezeichnet man in Schweden als „Fjäll“?",
            answers: [
              "Ein tiefes Fjordtal",
              "Eine baumlose Hochfläche/Berglandschaft oberhalb der Waldgrenze",
              "Eine Insel in den Schären",
              "Einen künstlich angelegten See"
            ],
            correct: 1,
            explanation: "„Fjäll“ bezeichnet die baumlosen, eiszeitlich geformten Hochflächen und Berge Nordskandinaviens oberhalb der natürlichen Waldgrenze."
          },
          {
            question: "Wo und wann kann man in Schweden die Mitternachtssonne erleben?",
            answers: [
              "In ganz Schweden, das ganze Jahr über",
              "Nur an der Südküste im Winter",
              "In Nordschweden (z. B. Lappland), etwa von Ende Mai bis Mitte Juli",
              "Nirgends in Schweden, das gibt es nur in Norwegen"
            ],
            correct: 2,
            explanation: "Nördlich des Polarkreises, etwa in Lappland, geht die Sonne von Ende Mai bis Mitte Juli praktisch nicht unter."
          },
          {
            question: "Wo sieht man in Schweden besonders häufig Nordlichter?",
            answers: ["In Malmö", "In Abisko", "Auf Gotland", "In Göteborg"],
            correct: 1,
            explanation: "Abisko in Lappland gilt wegen seines besonderen Mikroklimas mit vielen klaren Nächten als einer der besten Orte Europas für Nordlichter."
          },
          {
            question: "Gibt es in Schweden natürliche Sandstrände?",
            answers: [
              "Nein, die Küste besteht nur aus Fels und Schären",
              "Ja, z. B. in Skåne (etwa Sandhammaren)",
              "Nur auf künstlich aufgeschütteten Inseln",
              "Nur an der Grenze zu Norwegen"
            ],
            correct: 1,
            explanation: "Vor allem im Süden, in Skåne, gibt es schöne natürliche Sandstrände wie Sandhammaren oder Mossbystrand."
          },
          {
            question: "In welchem Landesteil liegen die vier größten Seen Schwedens (Vänern, Vättern, Mälaren, Hjälmaren)?",
            answers: ["Alle in Lappland", "Alle auf Gotland", "In Süd- und Mittelschweden", "Alle direkt an der Grenze zu Norwegen"],
            correct: 2,
            explanation: "Die vier größten Seen liegen alle im dichter besiedelten Süd- und Mittelschweden (Götaland/Svealand)."
          },
          {
            question: "Was unterscheidet Nord- und Südschweden landschaftlich am stärksten?",
            answers: [
              "Der Norden ist flach und landwirtschaftlich geprägt, der Süden gebirgig",
              "Der Norden ist geprägt von Fjäll, Wald und dünner Besiedlung, der Süden flacher, landwirtschaftlicher und dichter besiedelt",
              "Es gibt keine nennenswerten Unterschiede",
              "Der Süden hat mehr Schnee als der Norden"
            ],
            correct: 1,
            explanation: "Grob gesagt: Der Norden ist geprägt von Fjäll, endlosen Wäldern und wenigen Menschen, der Süden ist milder, flacher, landwirtschaftlich genutzt und dichter besiedelt."
          }
        ]
      },
      {
        id: "tiere",
        title: "Tiere Schwedens",
        emoji: "🫎",
        description: "Elche, Bären, Wölfe, Rentiere & Co.",
        questions: [
          {
            question: "Wie viele Elche leben ungefähr in Schweden?",
            answers: ["ca. 5.000", "ca. 50.000", "zwischen 250.000 und 400.000", "über 2 Millionen"],
            correct: 2,
            explanation: "Je nach Jahreszeit schwankt der Bestand stark zwischen ca. 250.000 (Frühjahr) und bis zu 400.000 Tieren nach der Kälbersaison – jährlich werden rund 100.000 Elche gejagt."
          },
          {
            question: "Wie wahrscheinlich ist es, in freier Wildbahn einen Elch zu sehen?",
            answers: [
              "So gut wie unmöglich",
              "Eher selten, aber bei Fahrten durch Wald in der Dämmerung durchaus realistisch",
              "Garantiert bei jedem Waldspaziergang",
              "Nur im Zoo möglich"
            ],
            correct: 1,
            explanation: "Elche sind dämmerungs- und nachtaktiv und meiden meist Menschen – wer aber in Waldgebieten früh morgens oder abends unterwegs ist, hat gute Chancen."
          },
          {
            question: "Gibt es Braunbären in Schweden?",
            answers: ["Nein, sie sind ausgestorben", "Ja, ungefähr 2.500 bis 3.000 Tiere", "Ja, aber nur ein einzelnes Rudel", "Ja, über 50.000 Tiere"],
            correct: 1,
            explanation: "Schweden hat eine der größten Braunbärenpopulationen Europas, aktuell geschätzt auf rund 2.450–3.000 Tiere, vor allem im Norden und in Mittelschweden."
          },
          {
            question: "Wie viele Wölfe leben ungefähr in Schweden?",
            answers: ["ca. 50", "ca. 350", "ca. 3.500", "ca. 15.000"],
            correct: 1,
            explanation: "Der schwedische Wolfsbestand wird für 2024/25 auf rund 355 Tiere in etwa 34 Rudeln geschätzt – ein politisch stark diskutiertes Thema."
          },
          {
            question: "Gibt es Luchse in Schweden?",
            answers: ["Nein, nie gegeben", "Ja, ca. 1.400–1.500 Tiere", "Ja, aber nur im Zoo", "Ja, über 100.000 Tiere"],
            correct: 1,
            explanation: "Der Eurasische Luchs kommt in Schweden mit geschätzt 1.400–1.500 Tieren vor – die Population ist in den letzten 10 Jahren leicht zurückgegangen."
          },
          {
            question: "Wem gehören die Rentiere in Schweden?",
            answers: [
              "Sie sind komplett wild und gehören niemandem",
              "Sie sind halbdomestizierte Nutztiere, meist im Besitz samischer Rentierzüchter:innen",
              "Sie gehören dem schwedischen Staat",
              "Sie gehören den jeweiligen Nationalparks"
            ],
            correct: 1,
            explanation: "Rentiere in Schweden sind in der Regel halbdomestiziert, ohrmarkiert und Eigentum samischer Rentierzüchter:innen – die Rentierzucht ist gesetzlich ein exklusives Recht der Samen."
          },
          {
            question: "In welchem Teil Schwedens findet die Rentierzucht statt?",
            answers: [
              "Nur auf Gotland",
              "Im Rentierzuchtgebiet in Nord- und Mittelschweden, rund einem Drittel der Landesfläche",
              "Nur direkt an der Südküste",
              "In ganz Schweden gleichmäßig verteilt"
            ],
            correct: 1,
            explanation: "Das offizielle Rentierzuchtgebiet erstreckt sich über weite Teile Nord- und Mittelschwedens – etwa ein Drittel der gesamten Landesfläche."
          },
          {
            question: "Welches ist Schwedens größtes wildlebendes Landtier?",
            answers: ["Der Braunbär", "Der Wolf", "Der Elch", "Der Rothirsch"],
            correct: 2,
            explanation: "Der Elch ist mit bis zu 500–650 kg Gewicht bei ausgewachsenen Bullen das größte wildlebende Landtier Schwedens – schwerer als der Braunbär."
          },
          {
            question: "Welches ist die einzige giftige Schlangenart in Schweden?",
            answers: ["Die Ringelnatter", "Die Kreuzotter (huggorm)", "Die Äskulapnatter", "Die Kobra"],
            correct: 1,
            explanation: "Die Kreuzotter ist die einzige in Schweden vorkommende Giftschlange – ihr Biss ist für gesunde Erwachsene selten lebensgefährlich, sollte aber ärztlich behandelt werden."
          },
          {
            question: "Welches Tier hat sich in Schweden in den letzten Jahrzehnten stark ausgebreitet und überrascht viele Neuankömmlinge?",
            answers: ["Das Wildschwein", "Der Waschbär", "Das Nilpferd", "Der Flamingo"],
            correct: 0,
            explanation: "Wildschweine waren in Schweden lange ausgestorben, breiten sich seit ihrer Rückkehr in den 1980er-Jahren aber stark aus – heute sind sie auch nahe Städten keine Seltenheit mehr."
          }
        ]
      },
      {
        id: "wetter",
        title: "Wetter & Extreme",
        emoji: "❄️",
        description: "Kälterekorde, Mitternachtssonne und Polarnächte.",
        questions: [
          {
            question: "Wie kalt war die tiefste je in Schweden gemessene Temperatur?",
            answers: ["−22,6 °C", "−37,0 °C", "−52,6 °C", "−61,0 °C"],
            correct: 2,
            explanation: "Am 2. Februar 1966 wurden in Vuoggatjålme in Lappland −52,6 °C gemessen – bis heute der offizielle schwedische Kälterekord."
          },
          {
            question: "Wo wurde Schwedens tiefste Temperatur gemessen?",
            answers: ["In Stockholm", "In Vuoggatjålme (Lappland)", "In Malmö", "Auf Gotland"],
            correct: 1,
            explanation: "Der Rekord von −52,6 °C stammt aus Vuoggatjålme im nordschwedischen Lappland."
          },
          {
            question: "Wie warm kann ein schwedischer Sommer maximal werden?",
            answers: ["ca. 25 °C", "ca. 30 °C", "ca. 38 °C", "ca. 45 °C"],
            correct: 2,
            explanation: "Der schwedische Hitzerekord liegt bei 38 °C, gemessen in Målilla (1947) und Ultuna (1933) – das war lange auch der nordeuropäische Rekord."
          },
          {
            question: "Wo liegt in Schweden am längsten Schnee?",
            answers: ["An der Südküste", "In den Fjäll-Regionen und höheren Lagen des Nordens", "In Stockholm", "Auf Gotland"],
            correct: 1,
            explanation: "In den Fjäll-Gebieten und höheren Lagen Nordschwedens bleibt der Schnee oft bis weit in den Sommer liegen."
          },
          {
            question: "Gibt es Gegenden in Schweden, in denen im Winter die Sonne gar nicht aufgeht?",
            answers: [
              "Nein, nirgends in Schweden",
              "Ja, z. B. um Kiruna, für etwa 3 Wochen im Dezember/Januar (Polarnacht)",
              "Ja, aber nur für einen einzigen Tag",
              "Ja, in ganz Schweden für mehrere Monate"
            ],
            correct: 1,
            explanation: "Rund um Kiruna gibt es eine echte Polarnacht von etwa drei Wochen, in der die Sonne nicht über den Horizont steigt – dafür gibt es aber täglich eine Dämmerphase."
          },
          {
            question: "Wie lange scheint die Mitternachtssonne in Abisko ungefähr?",
            answers: ["3 Tage", "10 Tage", "55 Tage", "180 Tage"],
            correct: 2,
            explanation: "In Abisko geht die Sonne rund 55 Tage lang gar nicht unter – ein beliebter Grund für Sommerreisen nach Nordschweden."
          },
          {
            question: "Ist Schweden wirklich überall kälter als Deutschland?",
            answers: [
              "Ja, in ganz Schweden ist es immer kälter",
              "Nein – der Süden (z. B. Skåne) hat ein vergleichsweise mildes Klima, ähnlich Norddeutschland",
              "Nein, Schweden ist überall wärmer als Deutschland",
              "Das lässt sich nicht vergleichen"
            ],
            correct: 1,
            explanation: "Vor allem Skåne im äußersten Süden hat ein mildes, maritimes Klima – deutlich milder als der Norden Schwedens und vergleichbar mit Teilen Norddeutschlands."
          },
          {
            question: "Wo in Schweden ist das Klima besonders mild?",
            answers: ["In Lappland", "An der Südküste, z. B. in Skåne", "Am Kebnekaise", "In Kiruna"],
            correct: 1,
            explanation: "Die Südküste, insbesondere Skåne, profitiert von milderen Meereseinflüssen und hat das mildeste Klima Schwedens."
          },
          {
            question: "Wie groß sind die Temperaturunterschiede zwischen Nord- und Südschweden im Winter?",
            answers: [
              "Kaum vorhanden, überall ähnlich",
              "Erheblich – im Norden oft deutlich unter −20 °C, im Süden häufig nur leicht unter 0 °C",
              "Der Süden ist im Winter meist kälter als der Norden",
              "Nur wenige Grad Unterschied"
            ],
            correct: 1,
            explanation: "Die Spannweite ist groß: Während es im Süden im Winter oft nur leicht unter 0 °C ist, sind im Norden regelmäßig zweistellige Minusgrade normal."
          },
          {
            question: "Wie dunkel ist ein schwedischer Winter wirklich?",
            answers: [
              "In ganz Schweden herrscht durchgehende Dunkelheit",
              "Im hohen Norden gibt es eine echte Polarnacht, im Süden dagegen normale, nur kurze Wintertage mit wenigen Stunden Tageslicht",
              "Es ist im Winter überall genauso hell wie im Sommer",
              "Nur in Stockholm wird es im Winter dunkel"
            ],
            correct: 1,
            explanation: "Im hohen Norden (z. B. Kiruna) gibt es eine echte Polarnacht, im Süden (z. B. Stockholm) dagegen „nur“ kurze Tage mit oft nur rund 6–7 Stunden Tageslicht."
          }
        ]
      },
      {
        id: "alltag",
        title: "Schwedischer Alltag",
        emoji: "🏡",
        description: "Warum die Dinge in Schweden so sind, wie sie sind.",
        questions: [
          {
            question: "Warum sind so viele schwedische Häuser rot?",
            answers: [
              "Rote Farbe war früher die günstigste Option, hergestellt als Nebenprodukt des Kupferbergbaus (Falu rödfärg)",
              "Rot ist gesetzlich vorgeschrieben",
              "Reine Modeerscheinung der letzten 10 Jahre",
              "Weil rote Farbe am besten vor Elchen schützt"
            ],
            correct: 0,
            explanation: "Die klassische „Falu rödfärg“ entstand als Nebenprodukt des Kupferbergbaus in Falun und war jahrhundertelang die günstigste, robusteste Fassadenfarbe – daher die vielen roten Holzhäuser."
          },
          {
            question: "Warum ziehen Schweden zu Hause meistens ihre Schuhe aus?",
            answers: [
              "Aus reiner Hygiene- und Sauberkeitstradition, verstärkt durch Schnee, Matsch und lange Winter",
              "Weil es gesetzlich vorgeschrieben ist",
              "Weil Schuhe in Schweden generell verboten sind",
              "Nur bei offiziellen Anlässen"
            ],
            correct: 0,
            explanation: "Wegen Schnee, Matsch und Split im Winter ist es eine tief verankerte soziale Norm, Straßenschuhe an der Tür auszuziehen – Gäste tun das fast überall automatisch."
          },
          {
            question: "Warum stehen Briefkästen auf dem Land in Schweden häufig gebündelt an der Straße?",
            answers: [
              "Aus Sicherheitsgründen gegen Diebstahl",
              "Wegen der langen Anfahrtswege bei dünner Besiedlung liefert die Post oft nur bis zu Sammelstellen",
              "Weil Einzelbriefkästen verboten sind",
              "Weil sich Nachbarn die Post generell teilen müssen"
            ],
            correct: 1,
            explanation: "In dünn besiedelten Gegenden wären individuelle Zustellwege zu jedem einzelnen Haus zu aufwendig – deshalb gibt es oft gebündelte Briefkastenanlagen an der nächsten Durchgangsstraße."
          },
          {
            question: "Warum sind viele Grundstücke in Schweden nicht vollständig eingezäunt?",
            answers: [
              "Zäune sind gesetzlich verboten",
              "Wegen der Kultur rund um das Allemansrätten (Jedermannsrecht) und dem Vertrauen auf gegenseitige Rücksichtnahme",
              "Weil Baumaterial für Zäune zu teuer ist",
              "Weil es in Schweden keine Grundstücksgrenzen gibt"
            ],
            correct: 1,
            explanation: "Das Allemansrätten prägt eine Kultur, in der Natur grundsätzlich frei zugänglich sein soll – entsprechend sind komplett abgezäunte Privatgrundstücke seltener als z. B. in Deutschland."
          },
          {
            question: "Warum gibt es in Schweden so viele „Loppis“ (Flohmärkte/Second-Hand-Läden)?",
            answers: [
              "Weil neue Möbel in Schweden verboten sind",
              "Aus einer stark verankerten Spar- und Nachhaltigkeitskultur rund um Wiederverwendung",
              "Nur wegen touristischer Nachfrage",
              "Weil Geschäfte für Neuware fehlen"
            ],
            correct: 1,
            explanation: "Second-Hand und Wiederverwendung sind in Schweden kulturell stark verankert – Loppis gibt es fast überall, oft auch für gute Zwecke."
          },
          {
            question: "Was bedeutet das schwedische Konzept „lagom“ am ehesten?",
            answers: ["Sehr viel, im Überfluss", "Genau richtig – weder zu viel noch zu wenig", "Extrem sparsam bis geizig", "Komplett zufällig"],
            correct: 1,
            explanation: "„Lagom“ beschreibt ein ausgewogenes, angemessenes Maß – ein Konzept, das viele Bereiche des schwedischen Alltags prägt."
          },
          {
            question: "Warum ist das Personnummer im schwedischen Alltag so wichtig?",
            answers: [
              "Es wird praktisch für alles gebraucht: Bankkonto, Mietvertrag, Gesundheitswesen, Behördengänge",
              "Es wird nur für die Steuererklärung benötigt",
              "Es ist rein optional und selten nötig",
              "Es ersetzt den Reisepass komplett"
            ],
            correct: 0,
            explanation: "Ohne Personnummer ist in Schweden vieles kompliziert – von der Wohnungssuche über das Bankkonto bis zum Arztbesuch."
          },
          {
            question: "Wie funktioniert das Leben in sehr dünn besiedelten Regionen Schwedens meistens?",
            answers: [
              "Mit sehr kurzen Wegen zu allem",
              "Mit oft langen Fahrtwegen, viel Eigenständigkeit und wichtiger digitaler Infrastruktur",
              "Ohne jeden Zugang zu Internet oder Behörden",
              "Nur mit öffentlichen Verkehrsmitteln, Autos sind selten"
            ],
            correct: 1,
            explanation: "In dünn besiedelten Gegenden sind Wege zu Läden, Schulen oder Ärzten oft weit – gute digitale Anbindung und ein eigenes Auto sind hier meist unverzichtbar."
          },
          {
            question: "Warum besitzen so viele schwedische Familien ein Sommerhaus (sommarstuga)?",
            answers: [
              "Weil es gesetzlich vorgeschrieben ist",
              "Aus einer langen kulturellen Tradition, den Sommer möglichst naturnah am See oder Meer zu verbringen",
              "Weil normale Wohnungen im Sommer geschlossen werden müssen",
              "Nur aus steuerlichen Gründen"
            ],
            correct: 1,
            explanation: "Das Sommerhaus am See, im Wald oder in den Schären ist eine tief verwurzelte Tradition – viele Familien verbringen dort einen großen Teil des Sommers."
          },
          {
            question: "Welche Alltagsgewohnheit überrascht Neuankömmlinge in Schweden besonders oft?",
            answers: [
              "„Fredagsmys“ – der feste gemütliche Freitagabend zuhause mit Chips und Filmen",
              "Dass man in Schweden nie zusammen isst",
              "Dass es in Schweden keine Wochenenden gibt",
              "Dass Kaffee in Schweden verboten ist"
            ],
            correct: 0,
            explanation: "„Fredagsmys“ (in etwa: „Freitags-Gemütlichkeit“) ist eine feste Alltagsinstitution: Freitagabend zuhause, oft mit Chips, Tacos oder Filmabend – für viele überraschend ritualisiert."
          }
        ]
      },
      {
        id: "essen",
        title: "Essen & Fika",
        emoji: "☕",
        description: "Kaffeepausen, Köttbullar und kulinarische Kuriositäten.",
        questions: [
          {
            question: "Was ist eine echte schwedische „Fika“?",
            answers: [
              "Schnell ein Kaffee to-go zwischendurch",
              "Eine bewusste, gemeinsame Kaffee- und Gebäckpause als soziales Ritual",
              "Ein formelles Geschäftsessen",
              "Ein alkoholisches Trinkspiel"
            ],
            correct: 1,
            explanation: "Fika ist mehr als nur Kaffeetrinken – es ist eine bewusste, meist gemeinsame Pause mit Kaffee und Gebäck, oft fest im Tagesablauf verankert."
          },
          {
            question: "Wie schneidet Schweden beim Zimtschnecken-Konsum im weltweiten Vergleich ab?",
            answers: [
              "Sehr niedrig, Zimtschnecken sind eher unbekannt",
              "Durchschnittlich, wie die meisten europäischen Länder",
              "Schweden gehört weltweit zu den Ländern mit dem höchsten Zimtschnecken-Konsum pro Kopf",
              "Zimtschnecken sind in Schweden gesetzlich reguliert"
            ],
            correct: 2,
            explanation: "Die Kanelbulle ist einer der Klassiker der Fika-Kultur – Schweden zählt zu den Ländern mit dem höchsten Pro-Kopf-Konsum an Zimtschnecken weltweit."
          },
          {
            question: "Wann ist „Kanelbullens dag“ (Tag der Zimtschnecke)?",
            answers: ["1. Januar", "1. Mai", "4. Oktober", "24. Dezember"],
            correct: 2,
            explanation: "Seit 1999 wird am 4. Oktober jährlich der „Kanelbullens dag“ gefeiert – ein inoffizieller, aber sehr beliebter Feiertag der Fika-Kultur."
          },
          {
            question: "Was ist Surströmming?",
            answers: [
              "Ein süßes Gebäck",
              "Fermentierter (vergorener) Hering mit sehr intensivem Geruch, traditionell v. a. in Nordschweden",
              "Ein alkoholfreies Erfrischungsgetränk",
              "Eine Suppe aus Rentierfleisch"
            ],
            correct: 1,
            explanation: "Surströmming ist fermentierter Hering mit berüchtigt starkem Geruch – wird traditionell meist im Freien gegessen, oft verbunden mit einem eigenen kleinen Fest."
          },
          {
            question: "Was gehört traditionell zu schwedischen Köttbullar (Fleischbällchen)?",
            answers: [
              "Kartoffelpüree, Preiselbeersoße und Sahnesoße",
              "Reis und scharfe Chilisoße",
              "Nudeln und Tomatensoße",
              "Nur Brot, ohne Beilage"
            ],
            correct: 0,
            explanation: "Klassisch werden Köttbullar mit Kartoffelpüree, cremiger Sahnesoße und süß-säuerlicher Preiselbeersoße serviert."
          },
          {
            question: "Was bezeichnet man in schwedischen Supermärkten als „Godis“-Mischbecher?",
            answers: [
              "Ein Regal mit gesunden Snacks",
              "Süßigkeiten zum Selbstabfüllen aus großen Behältern",
              "Ein Kühlregal für Milchprodukte",
              "Eine Bäckereitheke"
            ],
            correct: 1,
            explanation: "Praktisch jeder schwedische Supermarkt hat eine „Godis“-Ecke, an der man sich Süßigkeiten selbst aus großen Behältern in eine Tüte füllt."
          },
          {
            question: "Was bedeutet „Lördagsgodis“?",
            answers: [
              "Ein bestimmtes Fischgericht",
              "Die Tradition, Kindern Süßigkeiten nur am Samstag zu erlauben",
              "Ein schwedischer Nationalfeiertag",
              "Ein alkoholisches Getränk"
            ],
            correct: 1,
            explanation: "„Lördagsgodis“ (Samstags-Süßigkeiten) geht auf eine Zahngesundheits-Kampagne der 1950er-Jahre zurück – bis heute bekommen viele schwedische Kinder Süßigkeiten hauptsächlich am Samstag."
          },
          {
            question: "Was isst man in Schweden traditionell zu Midsommar?",
            answers: [
              "Eingelegten Hering, neue Kartoffeln mit Dill und Sauerrahm, zum Nachtisch Erdbeeren",
              "Weihnachtsschinken und Rotkohl",
              "Nur gegrilltes Fleisch",
              "Ausschließlich Fisch und Reis"
            ],
            correct: 0,
            explanation: "Der klassische Midsommar-Tisch besteht aus eingelegtem Hering, neuen Kartoffeln, Sauerrahm mit Schnittlauch und frischen Erdbeeren zum Nachtisch."
          },
          {
            question: "Was gehört auf einen typisch schwedischen Weihnachtstisch (Julbord)?",
            answers: [
              "Weihnachtsschinken (Julskinka), Hering, Köttbullar und Janssons frestelse (Kartoffel-Sprotten-Auflauf)",
              "Nur Fondue",
              "Ausschließlich vegetarische Gerichte",
              "Pizza und Pasta"
            ],
            correct: 0,
            explanation: "Ein klassisches Julbord umfasst u. a. Julskinka, verschiedene Heringsgerichte, Köttbullar, Prinskorv und den beliebten Kartoffelauflauf Janssons frestelse."
          },
          {
            question: "Welches schwedische Lebensmittel überrascht viele Deutsche besonders?",
            answers: [
              "Kalles Kaviar – ein süßlich-rauchiger Fischrogen-Aufstrich aus der Tube",
              "Normales Toastbrot",
              "Gekochte Kartoffeln",
              "Frisches Obst"
            ],
            correct: 0,
            explanation: "Kalles Kaviar, ein Aufstrich aus geräuchertem Fischrogen in der Tube, ist in Schweden ein Frühstücksklassiker – für viele Neuankömmlinge zunächst gewöhnungsbedürftig."
          }
        ]
      },
      {
        id: "traditionen",
        title: "Traditionen & Kuriositäten",
        emoji: "🎄",
        description: "Von Donald Duck bis Walpurgisnacht.",
        questions: [
          {
            question: "Was schaut ein Großteil Schwedens traditionell an Heiligabend im Fernsehen?",
            answers: [
              "Einen schwedischen Actionfilm",
              "„Kalle Anka och hans vänner önskar God Jul“ (Donald Duck) – seit 1959 jedes Jahr um 15 Uhr",
              "Die Tagesschau in Dauerschleife",
              "Ein Fußballspiel"
            ],
            correct: 1,
            explanation: "Seit 1959 schaltet ein großer Teil Schwedens am 24. Dezember um 15 Uhr die Disney-Sendung mit Donald Duck ein – eine der beständigsten TV-Traditionen des Landes."
          },
          {
            question: "Was passiert an Midsommar?",
            answers: [
              "Ein stiller religiöser Feiertag ohne besondere Rituale",
              "Tanz um die Mittsommerstange, Blumenkränze und ein großes gemeinsames Fest zur Sommersonnenwende",
              "Ein reines Familienessen ohne Feier",
              "Ein Wintermarkt"
            ],
            correct: 1,
            explanation: "Midsommar ist eines der wichtigsten schwedischen Feste: mit Tanz um die geschmückte Mittsommerstange, Blumenkränzen im Haar und gemeinsamem Essen."
          },
          {
            question: "Warum tragen Menschen am Luciatag (13. Dezember) weiße Gewänder mit Lichterkranz?",
            answers: [
              "Zur Feier der Ernte",
              "Als Lichterfest in der dunkelsten Jahreszeit, zurückgehend auf die Legende der Heiligen Lucia",
              "Als reines Modeevent",
              "Zum Gedenken an eine Schlacht"
            ],
            correct: 1,
            explanation: "Der Luciatag ist ein Lichterfest mitten in der dunkelsten Jahreszeit, das auf die Legende der Heiligen Lucia von Syrakus zurückgeht."
          },
          {
            question: "Was wird am 30. April in Schweden traditionell gefeiert?",
            answers: [
              "Walpurgisnacht (Valborgsmässoafton) mit großen Frühlingsfeuern",
              "Der schwedische Nationalfeiertag",
              "Erntedank",
              "Halloween"
            ],
            correct: 0,
            explanation: "An der Walpurgisnacht werden vielerorts große Feuer entzündet, um den Frühling zu begrüßen – oft begleitet von Chorgesang, besonders in Studierendenstädten."
          },
          {
            question: "Was ist eine „Kräftskiva“?",
            answers: [
              "Ein Fest zur Wintersonnenwende",
              "Ein geselliges Krebsfest im August, mit Flusskrebsen, Gesang und lustigen Papierhüten",
              "Eine Art Weihnachtsmarkt",
              "Ein Segelwettbewerb"
            ],
            correct: 1,
            explanation: "Bei der Kräftskiva im August werden gemeinsam Flusskrebse mit Dill gegessen, dazu wird gesungen und oft in bunten Partyhüten gefeiert."
          },
          {
            question: "Welche Rolle spielen Blumen an Midsommar?",
            answers: [
              "Sie werden verbrannt, um Glück zu bringen",
              "Blumenkränze im Haar, und laut Aberglaube bringen sieben verschiedene Blumen unter dem Kopfkissen Zukunftsträume vom Partner",
              "Sie sind an Midsommar strikt verboten",
              "Sie werden nur als Grabschmuck genutzt"
            ],
            correct: 1,
            explanation: "Blumenkränze gehören fest zu Midsommar – und nach altem Volksglauben sollen sieben verschiedene Blumensorten unter dem Kopfkissen Träume vom zukünftigen Partner bringen."
          },
          {
            question: "Warum wird in Schweden der Heiligabend (24. Dezember) so groß gefeiert?",
            answers: [
              "Weil der 24. Dezember der eigentliche Hauptfeiertag (Julafton) mit Geschenken und Festessen ist, anders als in vielen anderen Ländern",
              "Weil der 25. Dezember in Schweden kein Feiertag ist",
              "Weil Weihnachten in Schweden erst im Januar gefeiert wird",
              "Weil es reiner Zufall der Kalenderwahl ist"
            ],
            correct: 0,
            explanation: "In Schweden ist Julafton (24. Dezember) der zentrale Weihnachtstag mit Festessen und Bescherung – ähnlich wie in Deutschland, aber mit noch stärkerem Fokus auf diesen einen Tag."
          },
          {
            question: "Welche schwedischen Feiertage/Bräuche gibt es in dieser Form nicht in Deutschland?",
            answers: ["Ostern", "Weihnachten allgemein", "Midsommar und der Luciatag", "Silvester"],
            correct: 2,
            explanation: "Midsommar und der Luciatag sind typisch schwedische (bzw. nordische) Traditionen ohne direkte deutsche Entsprechung."
          },
          {
            question: "Welche schwedische Tradition wirkt auf viele Ausländer besonders ungewöhnlich?",
            answers: [
              "Das gemeinsame, oft öffentliche Anstich-Fest von Surströmming-Dosen wegen des extremen Geruchs",
              "Das gemeinsame Weihnachtsessen",
              "Das Tragen von Winterjacken im Winter",
              "Das Trinken von Kaffee"
            ],
            correct: 0,
            explanation: "Das Öffnen von Surströmming-Dosen – meist draußen, wegen des intensiven Geruchs – ist für viele Außenstehende eine der kuriosesten schwedischen Traditionen."
          },
          {
            question: "Woher stammt eigentlich der moderne Begriff „Fredagsmys“ (gemütlicher Freitagabend)?",
            answers: [
              "Aus einer alten Bauerntradition des 19. Jahrhunderts",
              "Er wurde erst in den 1990er-Jahren maßgeblich durch eine Chips-Werbekampagne geprägt",
              "Er stammt aus der Kirche",
              "Er ist eine Übersetzung aus dem Englischen"
            ],
            correct: 1,
            explanation: "Überraschend modern: Der Begriff „Fredagsmys“ wurde stark durch eine Werbekampagne einer Chipsmarke in den 1990er-Jahren geprägt – heute ist er fester Bestandteil der Alltagskultur."
          }
        ]
      },
      {
        id: "geschichte",
        title: "Geschichte, Erfindungen & Rekorde",
        emoji: "📜",
        description: "Von der Großmachtzeit bis zum Dreipunktgurt.",
        questions: [
          {
            question: "Wann war Schweden eine europäische Großmacht (Stormaktstiden)?",
            answers: ["ca. 1200–1300", "ca. 1611–1721", "ca. 1850–1900", "ca. 1950–1980"],
            correct: 1,
            explanation: "Zwischen 1611 und 1721 kontrollierte Schweden zeitweise große Teile Nord- und Osteuropas, bevor die Großmachtzeit mit dem Frieden von Nystad endete."
          },
          {
            question: "Wann führte Schweden zuletzt einen Krieg?",
            answers: ["1945", "1914", "1814", "2001"],
            correct: 2,
            explanation: "Schwedens letzter Krieg war 1814 gegen Norwegen – seither verfolgt das Land eine lange Tradition der Bündnisfreiheit, bis zum NATO-Beitritt 2024."
          },
          {
            question: "Woher stammen die Farben der schwedischen Flagge?",
            answers: [
              "Aus der EU-Flagge",
              "Aus dem königlichen Wappen (Tre Kronor), das Kreuz-Design wurde 1569 offiziell eingeführt",
              "Aus der Fußball-Nationalmannschaft",
              "Blau und Gelb wurden zufällig im 20. Jahrhundert gewählt"
            ],
            correct: 1,
            explanation: "Blau und Gelb gehen auf das königliche Wappen zurück; das charakteristische Kreuz-Design wurde 1569 unter König Johann III. offiziell festgelegt."
          },
          {
            question: "Welche dieser bekannten Erfindungen stammt aus Schweden?",
            answers: ["Der Dreipunkt-Sicherheitsgurt", "Das Faxgerät", "Der USB-Stick", "Das Internet"],
            correct: 0,
            explanation: "Neben dem Dreipunktgurt stammen z. B. auch der Reißverschluss, der Herzschrittmacher und Tetra Pak aus Schweden."
          },
          {
            question: "Wer erfand den modernen Dreipunkt-Sicherheitsgurt, und wann?",
            answers: [
              "Nils Bohlin bei Volvo, 1959",
              "Alfred Nobel, 1895",
              "Ingvar Kamprad bei IKEA, 1943",
              "Ein deutsches Unternehmen, 1970"
            ],
            correct: 0,
            explanation: "Nils Bohlin entwickelte 1959 bei Volvo den Dreipunktgurt – Volvo gab das Patent bewusst für alle Autohersteller frei, weil Sicherheit wichtiger war als Profit."
          },
          {
            question: "Was hat Alfred Nobel mit Schweden zu tun?",
            answers: [
              "Er war ein schwedischer König",
              "Er wurde in Stockholm geboren, erfand das Dynamit und stiftete testamentarisch den Nobelpreis",
              "Er war Gründer von IKEA",
              "Er hat gar keinen Bezug zu Schweden"
            ],
            correct: 1,
            explanation: "Alfred Nobel wurde 1833 in Stockholm geboren, erfand das Dynamit und stiftete mit seinem Testament von 1895 den bis heute vergebenen Nobelpreis."
          },
          {
            question: "Welches dieser Unternehmen stammt NICHT aus Schweden?",
            answers: ["IKEA", "Volvo", "Spotify", "Nokia"],
            correct: 3,
            explanation: "Nokia stammt aus Finnland. IKEA, Volvo, H&M, Ericsson und Spotify dagegen sind schwedische Gründungen."
          },
          {
            question: "Welche alltägliche Erfindung aus Schweden benutzen viele Menschen fast täglich, ohne es zu wissen?",
            answers: ["Den Reißverschluss", "Das Smartphone", "Die Glühbirne", "Das Fahrrad"],
            correct: 0,
            explanation: "Der moderne Reißverschluss wurde maßgeblich vom schwedisch-amerikanischen Ingenieur Gideon Sundbäck weiterentwickelt und ist heute allgegenwärtig."
          },
          {
            question: "Welcher Fakt über Schweden ist ein echter Weltrekord?",
            answers: [
              "Schweden hat mit 267.570 die meisten Inseln aller Länder weltweit",
              "Schweden hat die meisten Einwohner Europas",
              "Schweden hat den höchsten Berg der Welt",
              "Schweden hat die größte Wüste Europas"
            ],
            correct: 0,
            explanation: "Mit 267.570 Inseln hält Schweden den Weltrekord für das Land mit den meisten Inseln."
          },
          {
            question: "Welche dieser Episoden aus der schwedischen Geschichte ist tatsächlich wahr?",
            answers: [
              "Königin Christina dankte 1654 ab, konvertierte zum Katholizismus und zog nach Rom",
              "Schweden hatte nie ein Königshaus",
              "Schweden war jahrhundertelang eine französische Kolonie",
              "Stockholm wurde erst im 20. Jahrhundert gegründet"
            ],
            correct: 0,
            explanation: "Königin Christina dankte 1654 überraschend ab, konvertierte zum katholischen Glauben und verbrachte den Rest ihres Lebens vor allem in Rom – eine der ungewöhnlichsten Episoden der schwedischen Geschichte."
          }
        ]
      },
      {
        id: "vergleich",
        title: "Deutschland vs. Schweden",
        emoji: "🇩🇪",
        description: "Zahlen und Alltag im direkten Vergleich.",
        questions: [
          {
            question: "Welches Land ist flächenmäßig größer?",
            answers: ["Deutschland", "Schweden – etwa 25 % größer als Deutschland", "Beide sind exakt gleich groß", "Das lässt sich nicht vergleichen"],
            correct: 1,
            explanation: "Schweden ist mit rund 450.000 km² deutlich größer als Deutschland mit rund 357.600 km²."
          },
          {
            question: "Welches Land hat den höheren Waldanteil?",
            answers: ["Deutschland (ca. 32 %)", "Schweden (ca. 69 %)", "Beide liegen bei ca. 50 %", "Keines der beiden hat nennenswerten Wald"],
            correct: 1,
            explanation: "Schweden ist mit rund 69 % Waldfläche mehr als doppelt so bewaldet wie Deutschland mit rund 32 %."
          },
          {
            question: "Wo gibt es mehr Seen?",
            answers: ["In Deutschland", "In Schweden, deutlich mehr", "In beiden Ländern etwa gleich viele", "In keinem der beiden Länder gibt es nennenswerte Seen"],
            correct: 1,
            explanation: "Schweden hat mit rund 100.000 Seen deutlich mehr Seen als Deutschland."
          },
          {
            question: "Wie unterscheidet sich die Bevölkerungsdichte der beiden Länder?",
            answers: [
              "Schweden ist deutlich dichter besiedelt als Deutschland",
              "Deutschland ist mit ca. 241 Einwohnern/km² fast neunmal so dicht besiedelt wie Schweden mit ca. 26/km²",
              "Beide Länder sind ungefähr gleich dicht besiedelt",
              "Schweden hat gar keine Einwohner außerhalb der Städte"
            ],
            correct: 1,
            explanation: "Deutschland ist mit rund 241 Einwohnern/km² fast neunmal so dicht besiedelt wie Schweden mit nur rund 26 Einwohnern/km²."
          },
          {
            question: "Wie viele Menschen würden ungefähr in Deutschland leben, wäre es so dicht besiedelt wie Schweden?",
            answers: ["ca. 9 Millionen", "ca. 40 Millionen", "ca. 60 Millionen", "ca. 83 Millionen (wie heute)"],
            correct: 0,
            explanation: "Bei Schwedens Bevölkerungsdichte von ca. 26 Einwohnern/km² hätten auf Deutschlands Fläche nur etwa 9 Millionen Menschen Platz – statt aktuell rund 83 Millionen."
          },
          {
            question: "In welchem Land sind die Sommernächte grundsätzlich länger hell?",
            answers: ["In Deutschland", "In Schweden, vor allem im Norden", "In beiden gleich", "Das hängt nur vom Wetter ab"],
            correct: 1,
            explanation: "Durch die nördlichere Lage sind schwedische Sommernächte, besonders im Norden, deutlich heller und kürzer als in Deutschland."
          },
          {
            question: "Wie unterscheiden sich die Arbeitswege in dünn besiedelten Regionen beider Länder tendenziell?",
            answers: [
              "In Schweden oft deutlich länger, wegen geringerer Besiedlungsdichte",
              "In Deutschland immer länger",
              "Es gibt praktisch keinen Unterschied",
              "In beiden Ländern gibt es keine ländlichen Regionen mehr"
            ],
            correct: 0,
            explanation: "Wegen der geringeren Bevölkerungsdichte sind Wege zu Arbeit, Schule oder Einkauf in ländlichen Teilen Schwedens im Schnitt oft länger als in vergleichbaren deutschen Regionen."
          },
          {
            question: "Was ist beim Wohnen auf dem Land tendenziell unterschiedlich?",
            answers: [
              "In Schweden sind Grundstücke im Schnitt oft großzügiger und weniger dicht bebaut als in Deutschland",
              "In Deutschland gibt es grundsätzlich größere Grundstücke",
              "Beide Länder bauen identisch",
              "In Schweden ist ländliches Wohnen gesetzlich verboten"
            ],
            correct: 0,
            explanation: "Durch die geringere Besiedlungsdichte sind ländliche Grundstücke in Schweden im Schnitt oft großzügiger geschnitten, häufig mit mehr Abstand zu Nachbarn."
          },
          {
            question: "Welche alltägliche Sache funktioniert in beiden Ländern besonders unterschiedlich?",
            answers: [
              "Der Verkauf von hochprozentigem Alkohol – in Schweden nur im staatlichen Systembolaget",
              "Das Zahlen mit Karte, das gibt es nur in Deutschland",
              "Öffentliche Verkehrsmittel, die es nur in Schweden gibt",
              "Der Kauf von Lebensmitteln generell"
            ],
            correct: 0,
            explanation: "Anders als in Deutschland gibt es in Schweden für Alkohol über 3,5 % Vol. ein staatliches Verkaufsmonopol (Systembolaget) mit begrenzten Öffnungszeiten."
          },
          {
            question: "Welche schwedische Selbstverständlichkeit würde viele Deutsche wahrscheinlich überraschen?",
            answers: [
              "Dass sich fast der gesamte Alltag – Banking, Behörden, Verträge – über eine einzige digitale Identität (BankID) abwickeln lässt",
              "Dass es in Schweden kein Internet gibt",
              "Dass Behördengänge in Schweden ausschließlich per Post laufen",
              "Dass es keine Banken in Schweden gibt"
            ],
            correct: 0,
            explanation: "BankID ist in Schweden allgegenwärtig und wird für Bankgeschäfte, Verträge, Behördengänge und viele Alltagsdienste genutzt – ein Digitalisierungsgrad, der viele Neuankömmlinge überrascht."
          }
        ]
      },
      {
        id: "wahrheit",
        title: "Wahr oder falsch?",
        emoji: "🤔",
        description: "Hättest du es gewusst? Überraschende Schweden-Fakten.",
        questions: [
          {
            question: "Darf man dank Allemansrätten in Schweden wirklich überall zelten?",
            answers: [
              "Ja, komplett uneingeschränkt überall",
              "Weitgehend ja, aber mit Regeln: meist nur eine Nacht am selben Ort, nicht in Sichtweite von Wohnhäusern und nicht auf Privatgrund ohne Erlaubnis",
              "Nein, Zelten ist in Schweden generell verboten",
              "Nur mit teurer Sondergenehmigung"
            ],
            correct: 1,
            explanation: "Das Allemansrätten erlaubt freies Zelten in der Natur, aber mit Einschränkungen – etwa Rücksicht auf Anwohner, keine Privatgrundstücke und meist nur eine Nacht am selben Fleck."
          },
          {
            question: "Hat Schweden tatsächlich über 200.000 Inseln?",
            answers: ["Wahr – offiziell 267.570 Inseln", "Falsch, es sind nur ein paar Hundert", "Falsch, genau 200.000", "Das wurde nie gezählt"],
            correct: 0,
            explanation: "Wahr: Die schwedische Statistikbehörde SCB zählt offiziell 267.570 Inseln."
          },
          {
            question: "Gibt es mehr Elche in Schweden als Einwohner in mancher deutschen Großstadt?",
            answers: [
              "Wahr – Schwedens Elchbestand (250.000–400.000) übertrifft die Einwohnerzahl vieler deutscher Großstädte",
              "Falsch, es gibt nur wenige hundert Elche",
              "Falsch, das ist rechnerisch unmöglich",
              "Elche gibt es in Schweden gar nicht"
            ],
            correct: 0,
            explanation: "Wahr: Mit bis zu 400.000 Tieren übertrifft Schwedens Elchbestand die Einwohnerzahl vieler deutscher Großstädte wie Rostock oder Potsdam."
          },
          {
            question: "Kann man in Nordschweden im Sommer um Mitternacht ohne Kunstlicht lesen?",
            answers: ["Wahr, während der Mitternachtssonne-Zeit", "Falsch, das ist physikalisch unmöglich", "Nur mit Taschenlampe", "Nur im Winter"],
            correct: 0,
            explanation: "Wahr: Während der Mitternachtssonne-Zeit im Norden geht die Sonne nicht unter, sodass es auch um Mitternacht hell genug zum Lesen ist."
          },
          {
            question: "Gibt es Orte in Schweden, an denen die Sonne wochenlang nicht untergeht?",
            answers: ["Wahr, z. B. in Abisko ca. 55 Tage am Stück", "Falsch, maximal ein paar Stunden extra Tageslicht", "Falsch, das gibt es nur am Nordpol", "Nur an einem einzigen Tag im Jahr"],
            correct: 0,
            explanation: "Wahr: In Abisko scheint die Sonne rund 55 Tage lang ununterbrochen."
          },
          {
            question: "Ist ganz Schweden im Winter dauerhaft schneebedeckt?",
            answers: [
              "Wahr, überall liegt durchgehend Schnee",
              "Falsch – der Süden, z. B. Skåne, hat oft nur wenig oder keinen dauerhaften Schnee",
              "Wahr, aber nur in den Städten",
              "Falsch, es schneit in Schweden nie"
            ],
            correct: 1,
            explanation: "Falsch: Vor allem der milde Süden (Skåne) hat oft nur zeitweise oder kaum dauerhaften Schnee, während der Norden meist deutlich mehr und länger Schnee hat."
          },
          {
            question: "Leben in Schweden wilde Eisbären?",
            answers: ["Wahr, vor allem im Norden", "Falsch – Eisbären kommen in Schweden nicht wild vor", "Wahr, aber nur auf Gotland", "Nur im Zoo, sonst falsch"],
            correct: 1,
            explanation: "Falsch: Wilde Eisbären gibt es in Schweden nicht – ihr Lebensraum liegt in der Arktis, nicht auf schwedischem Festland."
          },
          {
            question: "Gehören Rentiere in Schweden jemandem, oder leben sie einfach wild?",
            answers: [
              "Wahr – die meisten sind halbdomestiziert und gehören samischen Rentierzüchter:innen",
              "Falsch, sie sind komplett wild und gehören niemandem",
              "Falsch, sie gehören dem Staat",
              "Rentiere gibt es in Schweden gar nicht"
            ],
            correct: 0,
            explanation: "Wahr: Rentiere in Schweden sind in der Regel halbdomestiziert, ohrmarkiert und Eigentum samischer Rentierzüchter:innen."
          },
          {
            question: "Kann man in Teilen Schwedens tatsächlich für vergleichsweise wenig Geld ein Haus kaufen?",
            answers: [
              "Teilweise wahr – in sehr dünn besiedelten Regionen Norrlands sind Immobilien oft deutlich günstiger als in Städten",
              "Komplett falsch, Häuser sind überall gleich teuer",
              "Wahr, überall in Schweden sind Häuser spottbillig",
              "Häuserkauf ist in Schweden für Ausländer verboten"
            ],
            correct: 0,
            explanation: "Teilweise wahr: In dünn besiedelten Regionen, vor allem in Norrland, sind Immobilienpreise oft deutlich niedriger als in Stockholm, Göteborg oder Malmö – Städte bleiben aber teuer."
          },
          {
            question: "Was ist ein unglaublicher, aber tatsächlich wahrer Schweden-Fakt?",
            answers: [
              "Schweden war 1979 das erste Land der Welt, das das Schlagen von Kindern gesetzlich verbot",
              "Schweden hatte nie eine eigene Währung",
              "In Schweden ist Kaffeetrinken gesetzlich verboten",
              "Schweden liegt südlich von Deutschland"
            ],
            correct: 0,
            explanation: "1979 verbot Schweden als erstes Land der Welt jegliche Form der körperlichen Bestrafung von Kindern gesetzlich – ein oft zitierter, überraschender Fakt."
          }
        ]
      }
    ]
  }
];
