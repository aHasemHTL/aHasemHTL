(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const EMAIL = "ali.hasem052@gmail.com";
  const isHome = !!$("#hero");

  /* ---------- Content ---------- */
  const i18n = {
    en: {
      nav_projects: "Projects", nav_skills: "Skills", nav_journey: "Journey", nav_contact: "Contact", nav_home: "Home",
      hero_status: "Available for opportunities",
      hero_sub: "Software developer studying at HTL Leonding. I build desktop and web applications with Java, C# and TypeScript.",
      cta_projects: "View projects", cta_contact: "Get in touch",
      stat_years: "Years of experience", stat_projects: "Projects", stat_langs: "Programming languages", stat_team: "Largest team size",
      projects_title: "Featured projects", projects_sub: "Two highlight projects built at HTL Leonding in team collaboration. Click for details.",
      all_kicker: "Archive", all_projects: "All projects",
      page_kicker: "Archive", page_title: "All projects", page_sub: "A complete showcase of 18 applications built throughout my software engineering studies at HTL Leonding. Click any card for details and repository links.",
      f_all: "All", f_web: "Web", f_desktop: "Desktop", f_team: "Team", f_solo: "Solo",
      back: "Back to home", empty: "No projects found in this category.",
      skills_title: "Tech stack", skills_sub: "The tools I work with.",
      concepts_title: "Concepts & methods",
      journey_title: "Journey", journey_sub: "From the first lines of code to team projects.",
      contact_title: "Let's talk", contact_sub: "Have a project in mind, a question, or want to connect? Feel free to reach out.",
      copy: "Copy", copied: "Copied!", footer_hint: "Tip: press Ctrl + K",
      palette_ph: "Type a command…",
      g_lang: "Programming languages", g_fw: "Frameworks & platforms", g_tools: "Tools & DevOps",
      team: "Team", solo: "Solo", details: "Details",
      repo: "View on GitHub", live: "Live demo", onreq: "Source code available on request.",
      roles: ["Software Developer", "HTL Leonding Student", "Desktop & Web Builder", "Problem Solver"]
    },
    de: {
      nav_projects: "Projekte", nav_skills: "Skills", nav_journey: "Werdegang", nav_contact: "Kontakt", nav_home: "Startseite",
      hero_status: "Offen für neue Möglichkeiten",
      hero_sub: "Softwareentwickler und Schüler an der HTL Leonding. Ich entwickle Desktop- und Webanwendungen mit Java, C# und TypeScript.",
      cta_projects: "Projekte ansehen", cta_contact: "Kontakt aufnehmen",
      stat_years: "Jahre Erfahrung", stat_projects: "Projekte", stat_langs: "Programmiersprachen", stat_team: "Größtes Team",
      projects_title: "Ausgewählte Projekte", projects_sub: "Zwei Highlight-Projekte aus der HTL Leonding im Team. Klicke für Details.",
      all_kicker: "Archiv", all_projects: "Alle Projekte",
      page_kicker: "Archiv", page_title: "Alle Projekte", page_sub: "Eine vollständige Übersicht aller 18 Anwendungen aus meiner Informatikausbildung an der HTL Leonding. Klicke auf ein Projekt für Details und GitHub-Links.",
      f_all: "Alle", f_web: "Web", f_desktop: "Desktop", f_team: "Team", f_solo: "Solo",
      back: "Zurück zur Startseite", empty: "Keine Projekte in dieser Kategorie gefunden.",
      skills_title: "Tech-Stack", skills_sub: "Die Werkzeuge, mit denen ich arbeite.",
      concepts_title: "Konzepte & Methoden",
      journey_title: "Werdegang", journey_sub: "Von den ersten Zeilen Code bis zu Teamprojekten.",
      contact_title: "Lass uns sprechen", contact_sub: "Hast du ein Projekt, eine Frage oder möchtest dich vernetzen? Schreib mir gerne.",
      copy: "Kopieren", copied: "Kopiert!", footer_hint: "Tipp: Strg + K drücken",
      palette_ph: "Befehl eingeben…",
      g_lang: "Programmiersprachen", g_fw: "Frameworks & Plattformen", g_tools: "Tools & DevOps",
      team: "Team", solo: "Einzelprojekt", details: "Details",
      repo: "Auf GitHub ansehen", live: "Live-Demo", onreq: "Quellcode auf Anfrage verfügbar.",
      roles: ["Softwareentwickler", "HTL-Leonding-Schüler", "Desktop- & Web-Entwickler", "Problem Solver"]
    }
  };

  const projects = [
    {
      id: "dnd", c: "#7c5cff", cat: ["desktop", "team"], team: 5,
      year: "SYP · 3rd year", yearDe: "SYP · 3. Klasse",
      title: "DnD Map Builder",
      desc: {
        en: "Interactive fantasy map editor with parametric procedural generation, custom tiles and layer management.",
        de: "Interaktiver Fantasy-Karteneditor mit parametrischer prozeduraler Kartengenerierung, Kacheln und Ebenenverwaltung."
      },
      points: {
        en: [
          "Team project with 5 developers utilizing agile workflows",
          "Parametric terrain and dungeon generation algorithms",
          "Tile-based grid manipulation with zoom, panning and layer controls",
          "Modern JavaFX UI bundled and built with Gradle"
        ],
        de: [
          "Teamprojekt mit 5 Entwicklern nach agilen Methoden",
          "Parametrische Gelände- und Dungeon-Generierungsalgorithmen",
          "Rasterbasiertes Kachelsystem mit Zoom, Panning und Ebenenverwaltung",
          "Moderne JavaFX-Oberfläche, gebaut mit Gradle"
        ]
      },
      tech: ["Java", "JavaFX", "Gradle"],
      repo: "https://github.com/2526-3bhif-syp/2526-3bhif-syp-project-dnd-map-builder"
    },
    {
      id: "carguy", c: "#ff6b3d", cat: ["web", "team"], team: 4,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "CarGuy",
      desc: {
        en: "Automotive community platform with a robust REST backend, user authentication, profile customisation and social vehicle logs.",
        de: "Automotive-Community-Plattform mit REST-Backend, Authentifizierung, Profilverwaltung und Fahrzeug-Feeds."
      },
      points: {
        en: [
          "Team project with 4 developers building a full-stack platform",
          "Structured REST API backend with Express and TypeScript",
          "User authentication, profile management and vehicle posts",
          "Clean separation of routes, controllers and data models"
        ],
        de: [
          "Teamprojekt mit 4 Entwicklern für eine Full-Stack-Plattform",
          "Strukturiertes REST-API-Backend mit Express und TypeScript",
          "Benutzerauthentifizierung, Profilverwaltung und Fahrzeug-Beiträge",
          "Saubere Architektur mit Trennung von Routen, Controllern und Datenmodellen"
        ]
      },
      tech: ["Node.js", "TypeScript", "Express", "REST API"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/sommerprojekt-wmc-carguy"
    },
    {
      id: "gcm", c: "#22d3ee", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Game Collection Manager",
      desc: {
        en: "Desktop app for organising video game libraries, featuring MVC architecture, complete CRUD operations and SQLite persistence.",
        de: "Desktop-App zur Organisation von Videospielsammlungen mit sauberer MVC-Architektur, vollständigem CRUD und SQLite-Persistenz."
      },
      points: {
        en: [
          "Solo development project with strict Model-View-Controller pattern",
          "Full CRUD management of games, genres, ratings and play statuses",
          "Relational data persistence using SQLite via JDBC connectors",
          "Search, dynamic filtering and responsive table views"
        ],
        de: [
          "Eigenständiges Projekt nach dem Model-View-Controller-Muster",
          "Vollständiges CRUD für Spiele, Genres, Bewertungen und Status",
          "Relationale Datenhaltung mit SQLite über JDBC-Treiber",
          "Echtzeit-Suche, dynamische Filter und responsive Tabellenansichten"
        ]
      },
      tech: ["Java", "JavaFX", "JDBC", "SQLite", "MVC"],
      repo: "https://github.com/POSEOO-3BHIF-2526/mini-projekt-game-collection-manager"
    },
    {
      id: "rpn", c: "#a855f7", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 2nd year", yearDe: "POSE · 2. Klasse",
      title: "Avalonia RPN Calculator",
      desc: {
        en: "Reverse Polish Notation calculator desktop app with a modern cross-platform GUI built with C# and Avalonia UI.",
        de: "Umgekehrte Polnische Notation Taschenrechner als Desktop-App mit moderner Cross-Platform-GUI in C# und Avalonia UI."
      },
      points: {
        en: [
          "Stack-based calculation engine with error boundary handling",
          "Cross-platform desktop user interface built with Avalonia UI and XAML",
          "Visual stack history inspector showing real-time push and pop states",
          "Clean object-oriented architecture in C# (.NET)"
        ],
        de: [
          "Stack-basierte Rechenlogik mit robuster Fehlerbehandlung",
          "Plattformübergreifende GUI mit Avalonia UI und XAML",
          "Visueller Stack-Inspektor für Push- und Pop-Zustände in Echtzeit",
          "Saubere objektorientierte Architektur in C# (.NET)"
        ]
      },
      tech: ["C#", ".NET", "Avalonia UI", "XAML"],
      repo: "https://github.com/pfrey-teaching/avaloniarpncalc-aHasemHTL"
    },
    {
      id: "quiz", c: "#ffd23d", cat: ["web", "team"], team: 5,
      year: "WMC · 2nd year", yearDe: "WMC · 2. Klasse",
      title: "Who Wants to Be a Millionaire",
      desc: {
        en: "Interactive browser quiz game featuring 50:50 and audience jokers, progressive prize tiers and bilingual support.",
        de: "Interaktives Browser-Quizspiel mit 50:50- und Publikumsjokern, Gewinnstufen und zweisprachiger Unterstützung (DE/UK)."
      },
      points: {
        en: [
          "Collaborative team project built with HTML5, CSS3, JavaScript and JSON",
          "Dynamic question loader with difficulty escalation and shuffle logic",
          "Authentic lifelines (50:50, audience poll) and score calculation",
          "Bilingual question dataset with instant language toggle"
        ],
        de: [
          "Teamprojekt mit HTML5, CSS3, JavaScript und JSON-Datenstruktur",
          "Dynamischer Fragen-Loader mit ansteigendem Schwierigkeitsgrad",
          "Funktionsfähige Joker (50:50, Publikum) und Gewinnstufenberechnung",
          "Zweisprachiger Fragenkatalog mit Umschaltung (DE/UK)"
        ]
      },
      tech: ["HTML5", "CSS3", "JavaScript", "JSON"],
      repo: "https://github.com/dSatybaldyHTL/2BHIF-WMC-Wer-Wird-Million-r"
    },
    {
      id: "medical", c: "#ec4899", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Medical Practice Manager",
      desc: {
        en: "Desktop management system for medical clinics: scheduling patient appointments, doctor rosters and consultation logs.",
        de: "Desktop-Verwaltungssystem für Arztpraxen: Patientenverwaltung, Terminplanung und Behandlungshistorie."
      },
      points: {
        en: [
          "Comprehensive object-oriented model for patients, doctors and appointments",
          "Schedule collision detection and calendar management logic",
          "Interactive JavaFX form validations and table sorting",
          "Adherence to defensive programming principles and unit testing"
        ],
        de: [
          "Umfassendes objektorientiertes Modell für Patienten, Ärzte und Termine",
          "Kollisionserkennung im Terminkalender und Zeitmanagement",
          "Interaktive JavaFX-Formulare mit Eingabevalidierung",
          "Defensive Programmierung und strukturierte Datenhaltung"
        ]
      },
      tech: ["Java", "JavaFX", "OOP", "JUnit"],
      repo: "https://github.com/POSEOO-3BHIF-2526/assignment-15-medical-practice-aHasemHTL"
    },
    {
      id: "flight", c: "#3b82f6", cat: ["web", "solo"], team: 1,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "Flight Management CRUD",
      desc: {
        en: "RESTful flight booking and schedule management backend service with data validation and structured API routes.",
        de: "RESTful Flugbuchungs- und Flugplan-Backend mit Datenvalidierung und sauber strukturierten API-Endpunkten."
      },
      points: {
        en: [
          "Complete CRUD backend for flight departures, arrivals and reservations",
          "REST route architecture with HTTP status codes and error middleware",
          "Request validation and sanitisation using TypeScript interfaces",
          "Integrated API testing and documentation"
        ],
        de: [
          "Vollständiges CRUD-Backend für Abflüge, Ankünfte und Reservierungen",
          "REST-Architektur mit standardisierten HTTP-Statuscodes und Error-Handling",
          "Validierung und Bereinigung von Payloads mit TypeScript",
          "Strukturierte Endpunkte für Client-Integration"
        ]
      },
      tech: ["Node.js", "TypeScript", "REST API", "Express"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/08-04-crud-filght-management-aHasemHTL"
    },
    {
      id: "projectmgmt", c: "#14b8a6", cat: ["web", "solo"], team: 1,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "Project Management Board",
      desc: {
        en: "Task and project management backend with agile status workflows, deadline monitoring and priority queues.",
        de: "Aufgaben- und Projektverwaltungs-Backend mit agilen Workflows, Fristenüberwachung und Prioritätswarteschlangen."
      },
      points: {
        en: [
          "RESTful state transitions for tasks (Todo, In-Progress, Review, Done)",
          "Filtering by team members, due dates and milestone tags",
          "TypeScript type safety across all payload interfaces",
          "Clean modular controller architecture"
        ],
        de: [
          "RESTful Status-Workflows für Aufgaben (Todo, In-Progress, Review, Done)",
          "Filterung nach Teammitgliedern, Fälligkeitsdaten und Meilensteinen",
          "TypeScript Typensicherheit über alle Schnittstellen",
          "Modulare Controller-Architektur"
        ]
      },
      tech: ["Node.js", "TypeScript", "REST API"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/06-01-projectmgmt-aHasemHTL"
    },
    {
      id: "schedule", c: "#6366f1", cat: ["web", "solo"], team: 1,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "Work Schedule Planner",
      desc: {
        en: "Employee shift scheduling application ensuring working hour compliance and collision-free staff assignment.",
        de: "Schicht- und Dienstplanungsanwendung zur Einhaltung von Arbeitszeitrichtlinien und kollisionsfreien Personaleinsätzen."
      },
      points: {
        en: [
          "Shift collision algorithms preventing double-booking",
          "Validation of maximum daily and weekly working hour limits",
          "RESTful schedule export and query endpoints",
          "TypeScript data structures and error handling"
        ],
        de: [
          "Algorithmen zur Kollisionsvermeidung bei Doppelschichten",
          "Validierung maximaler Tages- und Wochenarbeitszeiten",
          "RESTful Abfrage- und Export-Schnittstellen",
          "Robuste Datenstrukturen in TypeScript"
        ]
      },
      tech: ["TypeScript", "Node.js", "REST API"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/03-work-schedule-aHasemHTL"
    },
    {
      id: "poke", c: "#f97316", cat: ["web", "solo"], team: 1,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "Pokédex API Explorer",
      desc: {
        en: "Dynamic web app consuming the public PokéAPI with real-time search, stat comparison and sprite rendering.",
        de: "Dynamische Web-App mit Anbindung an die PokéAPI: Echtzeitsuche, Statuswerte-Vergleich und Sprite-Rendering."
      },
      points: {
        en: [
          "Asynchronous HTTP fetching with caching for instant search",
          "Type-based filtering, stat radar diagrams and evolution charts",
          "Clean responsive UI with CSS animations",
          "Strict TypeScript typing for external JSON responses"
        ],
        de: [
          "Asynchrone API-Abfragen mit Caching für verzögerungsfreie Suche",
          "Typenfilterung, Statuswert-Diagramme und Entwicklungsstufen",
          "Responsive Oberfläche mit CSS-Animationen",
          "Strikte TypeScript-Typisierung externer JSON-Strukturen"
        ]
      },
      tech: ["TypeScript", "REST API", "HTML5", "CSS3"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/04-poke-aHasemHTL"
    },
    {
      id: "vehicle", c: "#0284c7", cat: ["desktop", "team"], team: 3,
      year: "POSE · 2nd year", yearDe: "POSE · 2. Klasse",
      title: "Vehicle Fleet Management",
      desc: {
        en: "Object-oriented vehicle and fleet management system in C# modeling inspection cycles, mileage and maintenance.",
        de: "Objektorientiertes Fuhrparkverwaltungssystem in C# zur Überwachung von Inspektionszyklen, Kilometerständen und Wartungen."
      },
      points: {
        en: [
          "Deep object-oriented inheritance model (Cars, Trucks, Motorcycles)",
          "Maintenance scheduler with mileage-based triggers",
          "Clean C# code adhering to SOLID principles",
          "Collaborative Git version control in a team of 3"
        ],
        de: [
          "Tiefes Vererbungsmodell (PKW, LKW, Motorräder)",
          "Wartungsplaner mit kilometerstandsabhängigen Intervallen",
          "Sauberer C#-Code nach SOLID-Prinzipien",
          "Teamarbeit mit Git-Versionsverwaltung"
        ]
      },
      tech: ["C#", ".NET", "OOP"],
      repo: "https://github.com/l-marazovic-HTL/POSE_Vehicle"
    },
    {
      id: "puzzle", c: "#10b981", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Fifteen Puzzle Game",
      desc: {
        en: "Classic 15-sliding-tile puzzle application in JavaFX with solvable shuffle algorithms, move counters and timer.",
        de: "Klassisches 15-Schiebepuzzle in JavaFX mit garantierter Lösbarkeit beim Mischen, Zugzähler und Stoppuhr."
      },
      points: {
        en: [
          "Grid math and inversion counting ensuring shuffled puzzles are solvable",
          "Keyboard and mouse click interactions with smooth visual tile movement",
          "Move counter, stopwatch timer and victory state detection",
          "Clean event-driven architecture in JavaFX"
        ],
        de: [
          "Mathematische Inversionszählung zur Garantie lösbarer Spielbretter",
          "Flüssige Interaktion per Tastatur und Mausklick mit Kachelbewegung",
          "Schrittzähler, Stoppuhr und automatische Gewinnerkennung",
          "Event-getriebene Architektur mit JavaFX"
        ]
      },
      tech: ["Java", "JavaFX", "Algorithmen"],
      repo: "https://github.com/POSEOO-3BHIF-2526/assignment-14-fx-ifteen-puzzle-aHasemHTL"
    },
    {
      id: "weather", c: "#06b6d4", cat: ["web", "solo"], team: 1,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "Live Weather Forecast",
      desc: {
        en: "Dynamic weather dashboard fetching live external meteorological APIs to render multi-day forecasts and conditions.",
        de: "Dynamisches Wetter-Dashboard mit Anbindung an externe meteorologische APIs für Echtzeit-Wetter und Mehrtagesprognosen."
      },
      points: {
        en: [
          "Asynchronous external API integration with error resiliency",
          "Dynamic city search with auto-complete and temperature unit conversion",
          "Interactive weather data visualization and forecast indicators",
          "Responsive client-side architecture with TypeScript"
        ],
        de: [
          "Asynchrone API-Abfragen mit robuster Fehler- und Timeoutbehandlung",
          "Dynamische Städtesuche und Temperatur-Einheitenumrechnung",
          "Klare Visualisierung meteorologischer Messwerte und Vorhersagen",
          "Responsive Benutzeroberfläche in TypeScript"
        ]
      },
      tech: ["TypeScript", "REST API", "HTML5", "CSS3"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/05-weather-aHasemHTL"
    },
    {
      id: "currency", c: "#eab308", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Currency Converter",
      desc: {
        en: "Desktop exchange rate calculator with multi-currency conversion, custom input sanitisation and formatted outputs.",
        de: "Desktop-Währungsrechner mit Mehrwährungsumrechnung, Eingabebereinigung und formatierter Kursausgabe."
      },
      points: {
        en: [
          "Real-time bidirectional currency conversion calculation",
          "Robust numerical validation preventing overflow and invalid entries",
          "Modern JavaFX controls and custom styled dropdowns",
          "Modular architecture prepared for external rate API integration"
        ],
        de: [
          "Bidirektionale Wechselkursberechnung in Echtzeit",
          "Zuverlässige Eingabevalidierung gegen ungültige Formate",
          "Moderne JavaFX-Oberfläche mit angepassten Dropdown-Menüs",
          "Modularer Aufbau vorbereitet für Kursdatenbank-Anbindung"
        ]
      },
      tech: ["Java", "JavaFX", "OOP"],
      repo: "https://github.com/POSEOO-3BHIF-2526/assignment-13-currency-converter-aHasemHTL"
    },
    {
      id: "addressbook", c: "#8b5cf6", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Address Book Directory",
      desc: {
        en: "Desktop contact manager in JavaFX with real-time search, detail inspector, form validation and file persistence.",
        de: "Desktop-Kontaktverwaltung in JavaFX mit Echtzeitsuche, Detailansicht, Formularvalidierung und Dateiablage."
      },
      points: {
        en: [
          "Interactive master-detail layout built with JavaFX FXML",
          "Observable collections with instant search and sort filters",
          "Input validation for emails, phone numbers and postal addresses",
          "Clean separation of UI controller and domain model"
        ],
        de: [
          "Interaktives Master-Detail-Layout mit JavaFX FXML",
          "Observable Collections für verzögerungsfreie Suche und Filterung",
          "Eingabevalidierung für E-Mails, Telefonnummern und Adressen",
          "Saubere Trennung von UI-Controller und Geschäftslogik"
        ]
      },
      tech: ["Java", "JavaFX", "FXML", "OOP"],
      repo: "https://github.com/POSEOO-3BHIF-2526/assignment-16-address-book-aHasemHTL"
    },
    {
      id: "articles", c: "#f43f5e", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Article & Warehouse Inventory",
      desc: {
        en: "Object-oriented inventory management system tracking stock levels, automatic reorder thresholds and price discounts.",
        de: "Objektorientiertes Warenwirtschaftssystem zur Erfassung von Lagerbeständen, Nachbestellgrenzen und Rabattstaffeln."
      },
      points: {
        en: [
          "Complex inventory data model with category hierarchies",
          "Stock depletion alerts and automated reordering calculations",
          "Volume discount algorithms and currency formatting",
          "Automated unit tests covering edge cases"
        ],
        de: [
          "Komplexes Artikelmodell mit Kategoriehierarchien",
          "Lagerwarnungen bei Unterschreitung von Mindestbeständen",
          "Mengenrabatt-Berechnung und Währungsformatierung",
          "Automatisierte Unit-Tests für Grenzfälle"
        ]
      },
      tech: ["Java", "OOP", "Unit Testing"],
      repo: "https://github.com/POSEOO-3BHIF-2526/assignment-05-article-management-aHasemHTL"
    },
    {
      id: "facility", c: "#84cc16", cat: ["desktop", "solo"], team: 1,
      year: "POSE · 3rd year", yearDe: "POSE · 3. Klasse",
      title: "Facility Management System",
      desc: {
        en: "Enterprise facility and room reservation system managing seating capacities, AV equipment and maintenance schedules.",
        de: "Facility- und Raumreservierungssystem zur Verwaltung von Raumkapazitäten, Medientechnik und Wartungsintervallen."
      },
      points: {
        en: [
          "Room and building allocation engine with capacity constraints",
          "Resource booking validation preventing overlapping reservations",
          "Modular OOP design in Java",
          "Comprehensive unit tests"
        ],
        de: [
          "Raum- und Gebäudeverwaltung mit Kapazitätsgrenzen",
          "Ressourcen-Buchungslogik verhindert Überschneidungen",
          "Modularer objektorientierter Aufbau in Java",
          "Umfassende Testabdeckung"
        ]
      },
      tech: ["Java", "OOP", "Design Patterns"],
      repo: "https://github.com/POSEOO-3BHIF-2526/assignment-06-facility-management-aHasemHTL"
    },
    {
      id: "animalattacks", c: "#e11d48", cat: ["web", "solo"], team: 1,
      year: "WMC · 3rd year", yearDe: "WMC · 3. Klasse",
      title: "Animal Attacks Data Explorer",
      desc: {
        en: "Web data analysis tool querying ecological incident datasets with geospatial and species-specific filter criteria.",
        de: "Webbasiertes Datenanalyse-Tool zur Filterung und Visualisierung ökologischer Vorfälle nach Tierart und Region."
      },
      points: {
        en: [
          "Structured REST query engine with pagination and multi-parameter filtering",
          "Dynamic client-side sorting and statistical aggregation",
          "TypeScript type definitions for complex dataset payloads",
          "Responsive table layout with mobile optimization"
        ],
        de: [
          "Strukturierte REST-Abfragen mit Paginierung und Filtern",
          "Dynamische Sortierung und statistische Aggregation im Client",
          "TypeScript Typdefinitionen für komplexe Datensätze",
          "Responsives Tabellenlayout für alle Bildschirmgrößen"
        ]
      },
      tech: ["TypeScript", "Node.js", "REST API"],
      repo: "https://github.com/2526-wmc-3bhif-classroom-org/02-animal-attacks-aHasemHTL"
    }
  ];

  const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
  const skills = [
    { k: "g_lang", items: [
      ["C#", "csharp/csharp-original.svg"], ["Java", "java/java-original.svg"], ["C", "c/c-original.svg"],
      ["JavaScript", "javascript/javascript-original.svg"], ["TypeScript", "typescript/typescript-original.svg"],
      ["HTML5", "html5/html5-original.svg"], ["CSS3", "css3/css3-original.svg"]
    ]},
    { k: "g_fw", items: [
      [".NET", "dotnetcore/dotnetcore-original.svg"], ["Node.js", "nodejs/nodejs-original.svg"], ["Vue.js", "vuejs/vuejs-original.svg"],
      ["Express", "express/express-original.svg", 1], ["Oracle", "oracle/oracle-original.svg"], ["SQLite", "sqlite/sqlite-original.svg"]
    ]},
    { k: "g_tools", items: [
      ["Docker", "docker/docker-original.svg"], ["Kubernetes", "kubernetes/kubernetes-original.svg"], ["Podman", "podman/podman-original.svg"],
      ["Git", "git/git-original.svg"], ["GitHub", "github/github-original.svg", 1], ["Ubuntu", "ubuntu/ubuntu-original.svg"]
    ]}
  ];

  const concepts = ["OOP", "MVC", "REST API", "CRUD", "Agile / Scrum", "Relational DB design", "ER modelling", "TCP/IP · DNS · OSI"];

  const timeline = [
    {
      when: "1st Year · 2023 – 2024",
      whenDe: "1. Klasse · 2023 – 2024",
      title: {
        en: "C# Programming Foundations & Hardware Workshop",
        de: "C#-Grundausbildung & Hardware-Werkstätte"
      },
      desc: {
        en: "Software development (POSE) focused exclusively on C# (.NET): building solid foundations in structured programming, control flow, loops, methods, and algorithms through 60+ programming assignments (including sorting algorithms, Tic-Tac-Toe, Game of Life, Caesar Cipher, and CSV parsing). In computer engineering (WLC), developed hands-on hardware expertise with Arduino microcontroller circuits, breadboards, ATX power supplies, electronic measurements, and number systems (Binary, Hex, ASCII).",
        de: "Konzentrierter Einstieg in die Softwareentwicklung (POSE) ausschließlich mit C# (.NET): Fundierte Beherrschung von Kontrollstrukturen, Schleifen, Methoden, Algorithmen und Logik anhand von über 60 Übungen (u. a. Sortieralgorithmen, Tic-Tac-Toe, Game of Life, Cäsar-Verschlüsselung und Dateiverarbeitung via CsvReader). Im Werkstättenunterricht (WLC) praktische Hardware-Ausbildung mit Arduino-Mikrocontrollern, Steckbrettschaltungen, ATX-Netzteilen, Messtechnik und Zahlensystemen (Binär, Hex, ASCII)."
      },
      tags: {
        en: ["C# (.NET)", "Algorithms & Logic", "Console Apps & CSV", "Arduino Microcontroller", "PC Hardware & Electronics"],
        de: ["C# (.NET)", "Algorithmen & Logik", "Konsolen-Apps & CSV", "Arduino Microcontroller", "PC-Hardware & Elektronik"]
      }
    },
    {
      when: "2nd Year · 2024 – 2025",
      whenDe: "2. Klasse · 2024 – 2025",
      title: {
        en: "System Programming in C, Object-Oriented C#, Web & Networks",
        de: "Systemprogrammierung in C, objektorientiertes C#, Web & Netzwerke"
      },
      desc: {
        en: "System programming introduced in 2nd year with C in CLion: pointers, dynamic memory management, bitwise operations, linked lists, stacks, and recursion. Concurrently advanced C# into Object-Oriented Programming (OOP, inheritance, interfaces, Factory Pattern) and modern desktop UI with Avalonia UI (Avalonia RPN Calculator). Began web engineering (WMC) with HTML5, CSS3, and JavaScript (DOM, callbacks, promises), shipping the 'Wer wird Millionär' quiz game in a team of 5. Comprehensive networking in NSCS: Cisco Packet Tracer (routers, switches, subnets, ARP) and packet inspection with Wireshark (DNS, ICMP, TCP/IP).",
        de: "Systemprogrammierung in der 2. Klasse mit C in CLion: Zeiger (Pointer), dynamische Speicherverwaltung, Bit-Operatoren, verkettete Listen, Stacks und Rekursion. Parallel dazu Vertiefung in objektorientiertes C# (.NET) mit Vererbung, Schnittstellen, Entwurfsmustern (Factory Pattern) und moderner Cross-Platform-GUI mit Avalonia UI (Avalonia RPN Calculator). Einstieg in die Webentwicklung (WMC) mit HTML5, CSS3 und JavaScript (DOM, Callbacks, Promises) sowie das Quiz-Projekt 'Wer wird Millionär' im 5er-Team. Fundierte Netzwerkausbildung in NSCS: Cisco Packet Tracer (Router, Switches, Subnetze, ARP) und Wireshark-Paketanalysen (DNS, ICMP, TCP/IP)."
      },
      tags: {
        en: ["C (Pointers & Memory)", "C# & Avalonia UI", "JavaScript & Web", "Cisco Packet Tracer", "Wireshark", "TCP/IP & OSI"],
        de: ["C (Pointer & Speicher)", "C# & Avalonia UI", "JavaScript & Web", "Cisco Packet Tracer", "Wireshark", "TCP/IP & OSI"]
      }
    },
    {
      when: "3rd Year · 2025 – 2026",
      whenDe: "3. Klasse · 2025 – 2026",
      title: {
        en: "Enterprise Java & JavaFX, Full-Stack Web (Node.js/TS), DBI & SYP",
        de: "Enterprise-Java & JavaFX, Full-Stack Web (Node.js/TS), DBI & SYP"
      },
      desc: {
        en: "Java introduced in 3rd year (POSE Java): advanced OOP, Collections, Generics, Streams, design patterns (Observer Pattern, MVC), and desktop GUIs with JavaFX, JDBC, and SQLite (Game Collection Manager, Medical Practice, 15-Puzzle). Full-Stack web engineering in WMC: asynchronous backends with Node.js, Express, and TypeScript, RESTful CRUD services, and the CarGuy automotive platform (4-person team). In system planning (SYP), worked in agile Scrum teams delivering the DnD Map Builder with Gradle and JavaFX (5-person team). Database design in DBI: relational ER-modelling, normalisation, and SQL.",
        de: "Einführung in Java in der 3. Klasse (POSE Java): Fortgeschrittenes OOP, Collections, Generics, Streams, Entwurfsmuster (Observer Pattern, MVC) und Desktop-GUIs mit JavaFX, JDBC und SQLite (Game Collection Manager, Arztpraxis-Manager, 15-Puzzle). Full-Stack Webentwicklung in WMC: Asynchrone Backends mit Node.js, Express und TypeScript, RESTful CRUD-Services und die CarGuy-Community-Plattform (4er-Team). In SYP agile Projektarbeit nach Scrum mit dem DnD Map Builder in JavaFX & Gradle (5er-Team). Datenbankdesign in DBI mit relationaler ER-Modellierung, Normalisierung und SQL."
      },
      tags: {
        en: ["Java & JavaFX", "JDBC & SQLite", "Node.js & TypeScript", "REST APIs & Express", "Scrum & Agile (SYP)", "ER-Modelling & SQL (DBI)"],
        de: ["Java & JavaFX", "JDBC & SQLite", "Node.js & TypeScript", "REST APIs & Express", "Scrum & Agile (SYP)", "ER-Modellierung & SQL (DBI)"]
      }
    },
    {
      when: "4th Year · 2026 – Present",
      whenDe: "4. Klasse · 2026 – Heute",
      now: true,
      title: {
        en: "Artificial Intelligence & Advanced Architecture",
        de: "Künstliche Intelligenz & Software-Architektur"
      },
      desc: {
        en: "Currently in the 4th year of Informatics at HTL Leonding. Deepening expertise in Java and C# on enterprise and architecture levels. Exploring Artificial Intelligence (AI), modern distributed software systems, software design patterns, and engineering high-performance desktop and web applications.",
        de: "Aktuell in der 4. Klasse Informatik an der HTL Leonding. Vertiefung in Java und C# auf Enterprise- und Architekturebene. Einstieg in Künstliche Intelligenz (AI), moderne verteilte Softwaresysteme, Architektur-Patterns und die Entwicklung hochperformanter Desktop- und Webanwendungen."
      },
      tags: {
        en: ["Java & C# Advanced", "Artificial Intelligence (AI)", "Software Architecture", "Distributed Systems"],
        de: ["Java & C# Vertiefung", "Künstliche Intelligenz (AI)", "Software-Architektur", "Verteilte Systeme"]
      }
    }
  ];

  /* ---------- State ---------- */
  let lang = "en";
  try { const s = localStorage.getItem("lang"); if (s === "de" || s === "en") lang = s; else if ((navigator.language || "").startsWith("de")) lang = "de"; } catch (e) {}
  const t = k => i18n[lang][k];
  let filter = "all";
  let typedIndex = 0, typedChar = 0, typedDeleting = false;

  /* ---------- Render ---------- */
  function teamTag(p) { return p.team > 1 ? t("team") + " · " + p.team : t("solo"); }

  function renderCards() {
    const box = $("#cards"); if (!box) return;
    const limit = +box.dataset.limit || 0;
    let list = projects;
    if (!limit && filter !== "all") list = projects.filter(p => p.cat.includes(filter));
    if (limit) list = projects.slice(0, limit);
    if (!list.length) { box.innerHTML = `<p class="empty">${t("empty")}</p>`; return; }
    box.innerHTML = list.map((p, i) => `
      <button class="card reveal" style="--c:${p.c};--d:${i * .08}s" data-id="${p.id}" aria-label="${p.title}: ${t("details")}">
        <span class="idx">0${projects.indexOf(p) + 1} / ${lang === "de" ? p.yearDe : p.year}</span>
        <h3>${p.title}</h3>
        <p>${p.desc[lang]}</p>
        <div class="meta"><span class="tag">${teamTag(p)}</span></div>
        <div class="chips">${p.tech.map(x => `<span class="chip">${x}</span>`).join("")}</div>
        <span class="more">${t("details")} <i>→</i></span>
      </button>`).join("");
    $$(".card").forEach(initCard);
    observeReveal($$("#cards .reveal"));
  }

  function renderSkills() {
    const g = $("#skills-groups"); if (!g) return;
    g.innerHTML = skills.map(s => `
      <div class="skill-group reveal"><h3>${t(s.k)}</h3>
        <div class="tiles">${s.items.map(([n, p, inv]) => `<div class="tile"><img src="${D + p}" alt="" loading="lazy" ${inv ? "data-invert" : ""}/><span>${n}</span></div>`).join("")}</div>
      </div>`).join("");
    $("#concepts").innerHTML = concepts.map(c => `<span class="chip">${c}</span>`).join("");
    observeReveal($$("#skills-groups .reveal"));
  }

  function renderTimeline() {
    const tl = $("#timeline"); if (!tl) return;
    tl.innerHTML = timeline.map((x, i) => `
      <li class="t-item reveal ${x.now ? "now" : ""}" style="--d:${i * .08}s">
        <span class="t-when">${lang === "de" && x.whenDe ? x.whenDe : x.when}</span>
        <h3>${x.title[lang]}</h3>
        <p>${x.desc[lang]}</p>
        <div class="chips t-chips">${x.tags[lang].map(t => `<span class="chip">${t}</span>`).join("")}</div>
      </li>`).join("");
    observeReveal($$("#timeline .reveal"));
  }

  function applyLang() {
    root.lang = lang;
    $$("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v; });
    $$(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    $(".lang").dataset.active = lang;
    $("#pInput").placeholder = t("palette_ph");
    const ac = $("#allCount"); if (ac) ac.textContent = String(projects.length).padStart(2, "0");
    renderCards(); renderSkills(); renderTimeline();
    typedIndex = 0; typedChar = 0; typedDeleting = false;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }
  function setLang(l) { lang = l; applyLang(); }

  /* ---------- Filters (projects page) ---------- */
  $$(".filters button").forEach(b => b.addEventListener("click", () => {
    filter = b.dataset.filter;
    $$(".filters button").forEach(x => x.classList.toggle("active", x === b));
    renderCards();
  }));

  /* ---------- Theme ---------- */
  function toggleTheme() {
    const n = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = n;
    try { localStorage.setItem("theme", n); } catch (e) {}
    $('meta[name="theme-color"]').content = n === "dark" ? "#0b0b12" : "#f6f6fb";
  }

  /* ---------- Reveal / counters / nav ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
    const c = e.target.querySelector("[data-count]");
    if (c) countUp(c);
  }), { threshold: .12 });
  function observeReveal(els) { els.forEach(el => io.observe(el)); }

  function countUp(el) {
    const end = +el.dataset.count; if (reduced) { el.textContent = end; return; }
    const t0 = performance.now(), dur = 1400;
    (function f(n) { const p = Math.min((n - t0) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0);
  }


  const navLinks = $$(".nav nav a");
  const secs = ["projects", "skills", "journey", "contact"].map(id => $("#" + id)).filter(Boolean);
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    $("#progress").style.width = (h > 0 ? y / h * 100 : 0) + "%";
    $(".nav").classList.toggle("scrolled", y > 20);
    if (!isHome) return;
    let cur = "";
    secs.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .4) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  }
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Card spotlight + tilt ---------- */
  function initCard(card) {
    if (reduced) return;
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", x + "px"); card.style.setProperty("--my", y + "px");
      const rx = ((y / r.height) - .5) * -7, ry = ((x / r.width) - .5) * 7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  }

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let lastFocus = null;
  function openModal(id) {
    const p = projects.find(x => x.id === id); if (!p) return;
    lastFocus = document.activeElement;
    $("#mMeta").textContent = (lang === "de" ? p.yearDe : p.year) + " · " + teamTag(p);
    $("#mTitle").textContent = p.title;
    $("#mDesc").textContent = p.desc[lang];
    $("#mPoints").innerHTML = p.points[lang].map(x => `<li>${x}</li>`).join("");
    $("#mTech").innerHTML = p.tech.map(x => `<span class="chip">${x}</span>`).join("");
    const links = [];
    if (p.live) links.push(`<a class="m-btn primary" href="${p.live}" target="_blank" rel="noopener noreferrer">${t("live")} ↗</a>`);
    if (p.repo) links.push(`<a class="m-btn" href="${p.repo}" target="_blank" rel="noopener noreferrer">${t("repo")} ↗</a>`);
    $("#mLinks").innerHTML = links.length ? links.join("") : `<span class="m-note">${t("onreq")}</span>`;
    modal.hidden = false; $("#mClose").focus();
  }
  function closeModal() { modal.hidden = true; if (lastFocus) lastFocus.focus(); }
  const cardsBox = $("#cards");
  if (cardsBox) cardsBox.addEventListener("click", e => { const c = e.target.closest(".card"); if (c) openModal(c.dataset.id); });
  $("#mClose").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  /* ---------- Command palette ---------- */
  const pal = $("#palette"), pIn = $("#pInput"), pList = $("#pList");
  let pSel = 0, pItems = [];
  const go = id => () => {
    closePalette();
    if (isHome) $("#" + id).scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    else location.href = "index.html#" + id;
  };
  const commands = () => [
    { n: lang === "de" ? "Alle Projekte (Archiv)" : "All projects (Archive)", h: "A", f: () => { location.href = "projects.html"; } },
    { n: lang === "de" ? "Zu Projekten" : "Go to Projects", h: "G P", f: go("projects") },
    { n: lang === "de" ? "Zu Skills" : "Go to Skills", h: "G S", f: go("skills") },
    { n: lang === "de" ? "Zum Werdegang" : "Go to Journey", h: "G J", f: go("journey") },
    { n: lang === "de" ? "Zum Kontakt" : "Go to Contact", h: "G C", f: go("contact") },
    { n: lang === "de" ? "Sprache wechseln (EN/DE)" : "Switch language (EN/DE)", h: "L", f: () => { closePalette(); setLang(lang === "en" ? "de" : "en"); } },
    { n: lang === "de" ? "Theme wechseln" : "Toggle theme", h: "T", f: () => { closePalette(); toggleTheme(); } },
    { n: lang === "de" ? "E-Mail kopieren" : "Copy email", h: "E", f: () => { closePalette(); copyMail(); } },
    { n: "GitHub", h: "↗", f: () => open("https://github.com/aHasemHTL", "_blank", "noopener") },
    { n: "LinkedIn", h: "↗", f: () => open("https://www.linkedin.com/in/ali-hasem-a604593b6/", "_blank", "noopener") }
  ];
  function drawPalette() {
    const q = pIn.value.trim().toLowerCase();
    pItems = commands().filter(c => c.n.toLowerCase().includes(q));
    pSel = Math.min(pSel, Math.max(pItems.length - 1, 0));
    pList.innerHTML = pItems.map((c, i) => `<li role="option" class="${i === pSel ? "sel" : ""}" data-i="${i}"><span>${c.n}</span><small>${c.h}</small></li>`).join("");
  }
  function openPalette() { pal.hidden = false; pIn.value = ""; pSel = 0; drawPalette(); pIn.focus(); }
  function closePalette() { pal.hidden = true; }
  pIn.addEventListener("input", () => { pSel = 0; drawPalette(); });
  pList.addEventListener("click", e => { const li = e.target.closest("li"); if (li) pItems[+li.dataset.i].f(); });
  pal.addEventListener("click", e => { if (e.target === pal) closePalette(); });
  pIn.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { pSel = (pSel + 1) % pItems.length; drawPalette(); e.preventDefault(); }
    else if (e.key === "ArrowUp") { pSel = (pSel - 1 + pItems.length) % pItems.length; drawPalette(); e.preventDefault(); }
    else if (e.key === "Enter" && pItems[pSel]) pItems[pSel].f();
  });
  addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); }
    if (e.key === "Escape") { if (!pal.hidden) closePalette(); if (!modal.hidden) closeModal(); }
  });
  $("#openPalette").addEventListener("click", openPalette);

  /* ---------- Copy mail ---------- */
  let copyTimer;
  function copyMail() {
    const tag = $("#copyTag"); if (!tag) return;
    const done = () => { tag.textContent = t("copied"); clearTimeout(copyTimer); copyTimer = setTimeout(() => tag.textContent = t("copy"), 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(EMAIL).then(done, done); else done();
  }
  const cm = $("#copyMail"); if (cm) cm.addEventListener("click", copyMail);

  /* ---------- Tool buttons ---------- */
  $("#themeBtn").addEventListener("click", toggleTheme);
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- Typing effect ---------- */
  const typedEl = $("#typed");
  function typeLoop() {
    const words = t("roles"), w = words[typedIndex % words.length];
    if (reduced) { typedEl.textContent = words[0]; return; }
    typedChar += typedDeleting ? -1 : 1;
    typedEl.textContent = w.slice(0, typedChar);
    let delay = typedDeleting ? 35 : 80;
    if (!typedDeleting && typedChar === w.length) { delay = 1800; typedDeleting = true; }
    else if (typedDeleting && typedChar === 0) { typedDeleting = false; typedIndex++; delay = 350; }
    setTimeout(typeLoop, delay);
  }

  /* ---------- Cursor glow ---------- */
  const glow = $("#cursorGlow");
  addEventListener("pointermove", e => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; }, { passive: true });

  /* ---------- Particle network background ---------- */
  (function particles() {
    const cv = $("#bg"), ctx = cv.getContext("2d");
    let w, h, dpr, pts = [], mouse = { x: -999, y: -999 };
    const color = () => getComputedStyle(root).getPropertyValue("--a2").trim() || "#22d3ee";
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2); w = innerWidth; h = innerHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.floor(w * h / 15000), 110);
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    }
    addEventListener("resize", resize);
    addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    function frame() {
      ctx.clearRect(0, 0, w, h);
      const c = color();
      ctx.fillStyle = c; ctx.strokeStyle = c;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduced) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
        ctx.globalAlpha = .55; ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) { ctx.globalAlpha = (1 - d / 130) * .22; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 170) { ctx.globalAlpha = (1 - dm / 170) * .5; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
      if (!reduced) requestAnimationFrame(frame);
    }
    resize(); frame();
  })();

  /* ---------- Magnetic buttons ---------- */
  if (!reduced && matchMedia("(pointer: fine)").matches) {
    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .06}px, ${(e.clientY - r.top - r.height / 2) * .2}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- Init ---------- */
  $("#year").textContent = new Date().getFullYear();
  observeReveal($$(".reveal"));
  applyLang();
  if (typedEl) typeLoop();
  onScroll();
})();
