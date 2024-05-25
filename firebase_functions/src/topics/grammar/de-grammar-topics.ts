const mistakesDEA11 = [
    "Falsche Verbformen im Präsens",
    "Auslassung oder falscher Gebrauch von Artikeln",
    "Falsche Präpositionen",
    "Fehler bei der Subjekt-Verb-Übereinstimmung",
    "Falscher Gebrauch von Pluralformen",
    "Falsche Verwendung von Pronomen",
    "Falsche Satzstellung (Haupt- und Nebensätze)",
    "Falscher Gebrauch von einfachen Adjektiven",
    "Fehlende oder falsche Kasusendungen",
    "Fehler bei der Negation (nicht/kein)",
    "Falsche Verwendung von Fragewörtern",
    "Falscher Gebrauch von Modalverben",
];

export const getRandomMistakeDEA11 = () => {
    return mistakesDEA11[Math.floor(Math.random() * mistakesDEA11.length)];
};

const mistakesDEA12 = [
    "Fehler bei der Verwendung von trennbaren Verben",
    "Falscher Gebrauch von Reflexivpronomen",
    "Fehler bei der Bildung des Perfekts mit 'haben' und 'sein'",
    "Falsche Wortstellung bei Nebensätzen",
    "Fehlerhafte Verwendung von Wechselpräpositionen",
    "Falscher Gebrauch von Dativ- und Akkusativobjekten",
    "Fehlende oder falsche Genitivformen",
    "Fehler bei der Verwendung von Konjunktionen (und, aber, oder, weil, dass)",
    "Falsche Verwendung von Possessivpronomen",
    "Fehler bei der Verwendung von Vergleichsformen (Komparativ und Superlativ)",
    "Unkorrekte Anwendung der Personalpronomen im Akkusativ und Dativ",
    "Fehlerhafte Satzstellung in Fragesätzen",
];

export const getRandomMistakeDEA12 = () => {
    return mistakesDEA12[Math.floor(Math.random() * mistakesDEA12.length)];
};

const mistakesDEA21 = [
    "Fehler bei der Verwendung von trennbaren und untrennbaren Verben",
    "Falsche Anwendung von Reflexivverben",
    "Fehlerhafte Bildung und Verwendung des Präteritums",
    "Komplexe Satzstellung bei Haupt- und Nebensätzen",
    "Fehlende oder falsche Verwendung des Konjunktivs II (Wunschformen)",
    "Fehlerhafte Verwendung von Wechselpräpositionen im Kontext von Dativ und Akkusativ",
    "Fehlende oder falsche Anwendung der indirekten Rede",
    "Falsche Anwendung der Artikel im Genitiv",
    "Fehlerhafte Anwendung von Relativsätzen",
    "Unkorrekte Verwendung von Präpositionalphrasen",
    "Fehler bei der Verwendung von Temporalangaben",
    "Fehlende oder falsche Verwendung von Modalpartikeln (z.B. doch, mal, ja)",
];

export const getRandomMistakeDEA21 = () => {
    return mistakesDEA21[Math.floor(Math.random() * mistakesDEA21.length)];
};

const mistakesDEA22 = [
    "Fehler bei der Verwendung von Passivkonstruktionen im Präsens und Präteritum",
    "Unkorrekte Anwendung des Konjunktivs I für indirekte Rede",
    "Fehler bei der Verwendung von trennbaren und untrennbaren Präfixen in verschiedenen Zeitformen",
    "Fehlerhafte Verwendung von Wechselpräpositionen mit Genitiv",
    "Falsche Anwendung von Doppelkonjunktionen (z.B. entweder...oder, weder...noch)",
    "Unkorrekte Satzstellung in komplexen Sätzen mit mehreren Nebensätzen",
    "Fehlende oder falsche Anwendung von Präpositionen im Kontext von bestimmten Verben",
    "Fehlerhafte Anwendung des Futurs I",
    "Fehler bei der Deklination von Adjektiven nach bestimmten und unbestimmten Artikeln",
    "Fehlende oder falsche Verwendung von reflexiven Verben im Perfekt",
    "Falsche Anwendung von Relativsätzen mit Präpositionen",
    "Fehlerhafte Verwendung von Temporalangaben mit verschiedenen Zeitformen",
];

export const getRandomMistakeDEA22 = () => {
    return mistakesDEA22[Math.floor(Math.random() * mistakesDEA22.length)];
};

const mistakesDEB11 = [
    "Fehler bei der Verwendung des Konjunktivs II für hypothetische Situationen",
    "Unkorrekte Anwendung des Plusquamperfekts",
    "Fehlerhafte Verwendung von Passivkonstruktionen in verschiedenen Zeitformen",
    "Falsche Anwendung von indirekten Fragesätzen",
    "Fehler bei der Verwendung von Modalverben in der Vergangenheit",
    "Fehlerhafte Verwendung von Präpositionen in festen Wendungen",
    "Unkorrekte Satzstellung bei Nebensätzen mit Konjunktionen wie 'obwohl', 'während', 'bevor', 'nachdem'",
    "Fehlende oder falsche Anwendung des Genitivs in komplexen Sätzen",
    "Falsche Anwendung von Adjektivdeklinationen nach Nullartikel",
    "Fehler bei der Verwendung von Präpositionalphrasen zur Beschreibung von Zeit und Ort",
    "Fehlende oder falsche Verwendung von Konjunktiv I und II in indirekter Rede",
    "Unkorrekte Verwendung von Verben mit Präpositionen (z.B. denken an, warten auf)",
];

export const getRandomMistakesDEB11 = () => {
    const shuffled = mistakesDEB11.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
};

const mistakesDEB12 = [
    "Fehler bei der Verwendung des Konjunktivs II in der Vergangenheit",
    "Unkorrekte Anwendung des Konjunktivs I im Präsens und Präteritum",
    "Fehlerhafte Verwendung von Passivkonstruktionen im Futur I und II",
    "Falsche Anwendung von Relativsätzen mit Genitiv",
    "Fehler bei der Verwendung von Modalverben im Konjunktiv II",
    "Unkorrekte Verwendung von Präpositionen in idiomatischen Ausdrücken",
    "Fehlende oder falsche Anwendung der Wortstellung in indirekten Fragesätzen",
    "Falsche Anwendung von Verben mit festen Präpositionen und ihren jeweiligen Kasus",
    "Fehlerhafte Verwendung von Vergleichssätzen (z.B. je...desto, so...wie)",
    "Fehlende oder falsche Verwendung von Nominalisierungen",
    "Unkorrekte Anwendung von erweiterten Infinitivkonstruktionen mit 'zu'",
    "Fehlerhafte Verwendung von Modalpartikeln in komplexen Sätzen",
];

export const getRandomMistakesDEB12 = () => {
    const shuffled = mistakesDEB12.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};

const mistakesDEB21 = [
    "Fehler bei der Verwendung von Passivkonstruktionen in allen Zeitformen",
    "Unkorrekte Anwendung des Konjunktivs II in hypothetischen und irrealen Bedingungssätzen",
    "Fehlerhafte Verwendung von indirekter Rede mit Konjunktiv I und II",
    "Falsche Anwendung von Nominalisierungen und der zugehörigen Deklination",
    "Fehlende oder falsche Anwendung von Relativsätzen mit unterschiedlichen Kasus",
    "Fehlerhafte Verwendung von Partizipialkonstruktionen zur Verkürzung von Nebensätzen",
    "Unkorrekte Anwendung der Wortstellung in Nebensätzen und erweiterten Infinitivkonstruktionen",
    "Fehlende oder falsche Anwendung von Modalpartikeln zur Nuancierung der Aussage",
    "Falsche Verwendung von idiomatischen Ausdrücken und Redewendungen",
    "Fehlerhafte Anwendung von Präpositionen in komplexen Satzstrukturen",
    "Unkorrekte Anwendung von Verben mit festen Präpositionen und ihren Kasus",
    "Fehlende oder falsche Verwendung von temporalen Nebensätzen (z.B. bevor, nachdem, während)",
    "Fehler bei der Unterscheidung und Anwendung von trennbaren und untrennbaren Verben im Perfekt und Plusquamperfekt",
    "Fehlende oder falsche Anwendung von Konzessivsätzen (z.B. obwohl, obgleich, obschon)",
    "Fehlerhafte Verwendung von kausalen und konsekutiven Satzverbindungen (z.B. weil, da, sodass)",
    "Unkorrekte Anwendung von Adjektiv- und Adverbialdeklination in komplexen Satzgefügen",
    "Fehlende oder falsche Verwendung von Bedingungssätzen (z.B. wenn, falls, sofern)",
    "Fehlerhafte Anwendung von Vergleichssätzen und -konstruktionen (z.B. als, wie, je...desto)",
    "Unkorrekte Anwendung der Subjekt-Verb-Übereinstimmung in langen und komplexen Sätzen",
    "Fehlerhafte Verwendung von Futur I und II zur Beschreibung von zukünftigen Handlungen und Vermutungen",
];

export const getRandomMistakesDEB21 = () => {
    const shuffled = mistakesDEB21.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
};

const mistakesDEB22 = [
    "Fehler bei der Verwendung von Konjunktiv II in der Vergangenheit (irreale Bedingungssätze und Wünsche)",
    "Unkorrekte Anwendung von Passivkonstruktionen im Futur I und II",
    "Fehlerhafte Anwendung von indirekter Rede mit gemischten Zeitformen",
    "Falsche Verwendung von Nominalisierungen und der dazugehörigen Kasusregeln in komplexen Sätzen",
    "Fehlende oder falsche Anwendung von Relativsätzen mit zusammengesetzten Präpositionen",
    "Fehlerhafte Anwendung von Partizipialkonstruktionen zur Bildung von Attributsätzen",
    "Unkorrekte Anwendung der Wortstellung in erweiterten Infinitivkonstruktionen mit 'zu' und 'um...zu'",
    "Fehlende oder falsche Anwendung von Modalpartikeln zur Betonung und Abschwächung",
    "Falsche Verwendung von idiomatischen Ausdrücken und festen Wendungen in gehobener Sprache",
    "Fehlerhafte Anwendung von Präpositionen in mehrteiligen Satzstrukturen",
    "Unkorrekte Anwendung von Verben mit festen Präpositionen in verschiedenen Kasus",
    "Fehlende oder falsche Verwendung von temporalen Nebensätzen mit komplexen Zeitverhältnissen (z.B. nachdem, sobald)",
    "Fehlerhafte Anwendung von trennbaren und untrennbaren Verben in Konjunktiv II und indirekter Rede",
    "Unkorrekte Verwendung von Konzessivsätzen mit unterschiedlichen Konjunktionen (z.B. obwohl, wenngleich, obgleich)",
    "Fehlerhafte Anwendung von kausalen und konsekutiven Verbindungen in komplexen Argumentationen (z.B. weil, da, sodass)",
    "Unkorrekte Anwendung der Adjektiv- und Adverbialdeklination in literarischen Texten und formellen Reden",
    "Fehlende oder falsche Verwendung von Bedingungssätzen in hypothetischen Diskussionen (z.B. wenn, falls, sofern)",
    "Fehlerhafte Anwendung von Vergleichskonstruktionen mit erweiternden Elementen (z.B. je...desto, umso...als)",
    "Unkorrekte Anwendung der Subjekt-Verb-Übereinstimmung in komplexen Satzgefügen und langen Texten",
    "Fehlerhafte Verwendung von Futur I und II in wissenschaftlichen und prognostischen Texten",
    "Unkorrekte Anwendung von Doppelkonjunktionen und ihren jeweiligen Satzstrukturen (z.B. sowohl...als auch, weder...noch)",
];

export const getRandomMistakesDEB22 = () => {
    const shuffled = mistakesDEB22.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
};
