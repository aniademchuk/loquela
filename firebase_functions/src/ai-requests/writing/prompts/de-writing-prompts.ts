import { getRandomHardTopicDE, getRandomTopicDE } from "../../../topics/de-topics";

export const getWritingPromptDE = (userLevel: string, userLearnLanguage: string): string => {
    const topic = getRandomTopicDE();
    const hardTopic = getRandomHardTopicDE();
    const germanPrompts: { [key: string]: string } = {
        "A1.1": `Als Sprachlernassistent bitte ich dich, 5 Wörter zum Thema "${topic}" für einen Benutzer auf dem Englisch-A1.1-Niveau zu generieren. Diese Wörter sollten so einfach wie möglich sein, da der Benutzer erst begonnen hat, ${userLearnLanguage} zu lernen.
        Die Wörter sollten auf Englisch generiert werden, damit der Benutzer sie in die Sprache übersetzen kann, die er lernt.
        Gib dem Benutzer die Aufgabe, diese Wörter in ${userLearnLanguage} zu übersetzen und 5 Wörter, durch Kommas getrennt, ohne zusätzliche Formatierung zurückzugeben.
            `,

        "A1.2": `Als Sprachlernassistent bitte ich dich, 1 einfachen Satz zum Thema "${topic}" für einen Benutzer auf dem Englisch-A1.2-Niveau zu generieren. Dieser Satz sollte so einfach wie möglich sein, da der Benutzer erst begonnen hat, ${userLearnLanguage} zu lernen.
        Der Satz sollte auf Englisch generiert werden, damit der Benutzer ihn in die Sprache übersetzen kann, die er lernt.
        Gib dem Benutzer die Aufgabe, diesen Satz in ${userLearnLanguage} zu übersetzen und den Satz selbst, ohne zusätzliche Formatierung, zurückzugeben.
            `,

        "A2.1": `Als Sprachlernassistent bitte ich dich, ein einfaches Schreibthema zum Thema "${topic}" für einen Benutzer auf dem Englisch-A2.1-Niveau zu generieren. Stell dir vor, der Benutzer hat gerade angefangen, ${userLearnLanguage} zu lernen und hat ein wenig Fortschritt gemacht. Gib ein Thema für dieses Sprachniveau an.
        Wenn der Inhalt des Themas nicht zusammenhängt, passe es bitte entsprechend an. Das Thema sollte auf Englisch generiert werden.
        Das Thema sollte auch einfach und kurz sein, weniger als 2 Sätze. Gib dem Benutzer 2 einfache und direkte Vorschläge für A2.1, worüber er schreiben kann, um dieses Thema zu erweitern und das Schreiben zu üben.
        Gib Beschreibung der Afugabe, den Text und die Vorschläge zurück, ohne Antworten und ohne zusätzliche Formatierung.
            `,

        "A2.2": `Als Sprachlernassistent bitte ich dich, ein einfaches Schreibthema zum Thema "${topic}" für einen Benutzer auf dem Englisch-A2.2-Niveau zu generieren.
        Der Benutzer hat ein gewisses Verständnis für grundlegende Sätze und häufig verwendete Ausdrücke, insbesondere solche, die sich auf Bereiche wie persönliche und familiäre Informationen, Einkaufen, lokale Geografie und Beschäftigung beziehen. Erweitere das Thema, um es leicht herausfordernd und dennoch relevant für ihr Lernniveau zu machen.
        Wenn der Inhalt des Themas nicht zusammenhängt, passe es bitte entsprechend an. Das Thema sollte auf Englisch generiert werden.
        Gib dem Benutzer 3 Vorschläge für A2.2, worüber er schreiben kann, um das Schreiben zu üben.
        Gib Beschreibung der Afugabe, den Text und die Vorschläge zurück, ohne Antworten und ohne zusätzliche Formatierung.
            `,

        "B1.1": `Nutze dieses Thema: ${topic}, um ein Thema auf Englisch zu generieren, das für einen Sprachlerner auf dem Niveau B1.1 geeignet ist, um Schreibfähigkeiten zu üben.
        Der Lernende auf diesem Niveau kann die Hauptpunkte klarer standardmäßiger Eingaben zu vertrauten Themen verstehen, die regelmäßig bei der Arbeit, in der Schule, in der Freizeit usw. auftreten. Der Text sollte daher Themen aus diesen Bereichen behandeln und möglicherweise ein Szenario oder ein Problemlösungselement enthalten, das den Lernenden mit Inhalten anspricht, die für sein tägliches Leben relevant sind.
        Die Aufgabe kann darin bestehen, einen Artikel, einen Brief, ein Programm oder eine Erklärung zu einem Thema zu schreiben. Verwende das am besten geeignete Format für das Niveau B1.1.
        Gib Beschreibung der Afugabe und das Thema zurück, ohne Antworten und ohne zusätzliche Formatierung.
            `,

        "B1.2": `Nutze dieses Thema: ${hardTopic}, um ein Thema auf Englisch zu generieren, das für einen Sprachlerner auf dem Niveau B1.2 geeignet ist, um Schreibfähigkeiten zu üben.
        Der Lernende auf diesem Niveau kann die Hauptideen komplexer Texte zu konkreten und abstrakten Themen verstehen. Der Text sollte daher eine Vielzahl von Themen abdecken und möglicherweise Themen aus aktuellen Ereignissen, kulturellen Diskussionen oder technologischen Fortschritten integrieren, die den Lernenden herausfordern, kritisch zu denken und unterschiedliche Standpunkte zu analysieren.
        Die Aufgabe kann darin bestehen, einen Artikel, einen Brief, ein Programm oder eine Erklärung zu einem Thema zu schreiben. Verwende das am besten geeignete Format für das Niveau B1.2.
        Gib Beschreibung der Afugabe und das Thema als einfachen Text zurück, ohne Antworten und ohne zusätzliche Formatierung.
            `,

        "B2.1": `Nutze dieses Thema: ${hardTopic}, um ein Thema auf Englisch zu generieren, das für einen Sprachlerner auf dem Niveau B2.1 geeignet ist. Dieses Thema sollte helfen, die Schreibfähigkeiten zu üben.
        Auf dem Niveau B2.1 können Personen klare, detaillierte Texte zu einer Vielzahl von Themen schreiben, eine kohärente Struktur und einen breiten Wortschatz demonstrieren. Sie sind in der Lage, Standpunkte systematisch darzustellen, ihren Stil für unterschiedliche Zielgruppen anzupassen und komplexe Satzstrukturen mit einem hohen Maß an grammatikalischer Genauigkeit zu verwenden.
        Gib Beschreibung der Afugabe, den Text zurück, ohne zusätzliche Formatierung.
            `,

        "B2.2": `Nutze dieses Thema: ${hardTopic}, um ein Thema auf Englisch zu generieren, das für einen Sprachlerner auf dem Niveau B2.2 geeignet ist. Dieses Thema sollte helfen, die Schreibfähigkeiten zu üben.
        Auf dem Niveau B2.2 können Personen klare, gut strukturierte und detaillierte Texte zu einer Vielzahl von Themen verfassen, wobei sie die Verwendung von organisatorischen Mustern, Verbindungswörtern und Kohäsionsmitteln kontrolliert einsetzen. Sie können komplexe Themen in einem Brief, einem Aufsatz oder einem Bericht diskutieren und ihre Punkte mit logischen Argumenten und relevanten Beispielen unterstützen.
        Gib Beschreibung der Afugabe, den Text zurück, ohne zusätzliche Formatierung.
            `,
    };

    return germanPrompts[userLevel] || "Bad Input";
};
