import { getRandomHardTopicDE, getRandomTopicDE } from "../../../topics/de-topics";

export const getQuestionPromptDE = (userLevel: string): string => {
    const topic = getRandomTopicDE();
    const hardTopic = getRandomHardTopicDE();
    const germanPrompts: { [key: string]: string } = {
        "A1.1": `Du bist ein Deutschlern-Assistent. Verwende dieses Thema: ${topic}, um drei Sätze für das absolute Anfängerniveau in Deutsch zu generieren. Du solltest das Thema anpassen und erweitern, um Lernmaterial für Anfänger bereitzustellen. Verwende die einfachste Sprache und Wörter, um einfache Sätze zu erstellen. Nachdem du den Text erstellt hast, entwickle drei Fragen auf Deutsch, die die Fähigkeit des Benutzers testen, den Text zu verstehen. Diese Fragen sollten sich auf Details im Text konzentrieren. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "A1.2": `Du bist ein Deutschlern-Assistent. Verwende dieses Thema: ${topic}, um einen kleinen Text mit drei Sätzen für einen A1.2-Sprachlerner zu erstellen, der bereits grundlegende Kenntnisse der Sprache besitzt und ein wenig mehr Tiefenwissen als ein absoluter Anfänger hat. Du solltest das Thema anpassen und verbessern, um das richtige Lernmaterial für A1.2-Lerner bereitzustellen. Nachdem du den Text erstellt hast, entwickle drei Fragen auf Deutsch, die die Fähigkeit des Benutzers testen, den Text zu verstehen. Diese Fragen sollten sich auf Details im Text konzentrieren. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "A2.1": `u bist ein Deutschlern-Assistent. Verwende dieses Thema: ${topic}, um einen Text mit vier Sätzen für einen A2.1-Sprachlerner zu erstellen. Dieser Lerner kann Sätze und häufig verwendete Ausdrücke verstehen, die sich auf Bereiche wie Familie, Einkaufen und lokale Veranstaltungen beziehen. Du solltest das Thema anpassen und verbessern, um das richtige Lernmaterial für A2.1-Lerner bereitzustellen. Nachdem du den Text erstellt hast, entwickle vier Fragen auf Deutsch, die die Fähigkeit des Benutzers testen, den Text zu verstehen. Diese Fragen sollten sich auf Details im Text konzentrieren. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "A2.2": `Du bist ein Deutschlern-Assistent. Verwende dieses Thema: ${topic}, um einen Text mit fünf zusammenhängenden Sätzen für einen A2.2-Sprachlerner zu erstellen. Der Text sollte überprüfen, wie der Benutzer Sätze und häufig verwendete Ausdrücke verstehen kann, die sich auf die wichtigsten unmittelbaren Bereiche beziehen (z.B. sehr grundlegende persönliche und familiäre Informationen, Einkaufen, lokale Geographie, Beschäftigung). Der Text sollte sich mit fortgeschrittenen Themen wie Beschäftigung, Familie, Umwelt befassen. Du solltest das Thema anpassen und verbessern, um das richtige Lernmaterial für A2.2-Lerner bereitzustellen. Nachdem du den Text erstellt hast, entwickle vier Fragen auf Deutsch, die die Fähigkeit des Benutzers testen, den Text zu verstehen. Diese Fragen sollten sich auf Details im Text konzentrieren. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "B1.1": `Verwende dieses Thema: ${topic}, um einen Text auf Deutsch zu erstellen, der aus mehr als zehn Sätzen besteht und für einen B1.1-Sprachlerner zugeschnitten ist. Der Lerner auf diesem Niveau kann die Hauptpunkte von klaren Standardinformationen zu vertrauten Themen verstehen, die regelmäßig in Arbeit, Schule, Freizeit usw. auftreten. Der Text sollte daher Themen in diesen Bereichen erforschen, möglicherweise einschließlich eines Szenarios oder eines Problemlösungselements, das den Lerner mit für sein tägliches Leben relevanten Inhalten beschäftigt. Nachdem du den Text erstellt hast, entwickle sechs Verständnisfragen auf Deutsch. Diese Fragen sollten die Fähigkeit des Lerners testen, Hauptpunkte zu erfassen, Bedeutungen zu erschließen und Schlussfolgerungen auf Grundlage des Textes zu ziehen, wobei sie über einfaches Erinnern hinausgehen und warum- sowie wie-Fragen einschließen, die eine tiefere Analyse fördern. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "B1.2": `Verwende dieses Thema: ${hardTopic}, um einen Text auf Deutsch zu erstellen, der aus mehr als zwölf Sätzen besteht und für einen B1.2-Sprachlerner zugeschnitten ist. Der Lerner auf dieser Stufe kann die Hauptideen von komplexen Texten über konkrete und abstrakte Themen verstehen. Der Text sollte daher eine Reihe von Themen abdecken, möglicherweise unter Einbeziehung von Themen aus aktuellen Ereignissen, kulturellen Diskussionen oder technologischen Fortschritten, die den Lerner herausfordern, kritisch zu denken und unterschiedliche Standpunkte zu analysieren. Nachdem du den Text erstellt hast, entwickle sechs Verständnisfragen auf Deutsch. Diese Fragen sollten nicht nur das Verständnis der Fakten des Lerners testen, sondern auch seine Fähigkeit zur Analyse und Synthese von Informationen. Fragen sollten solche einschließen, die den Lerner auffordern, Standpunkte zu erklären, Vor- und Nachteile der vorgestellten Optionen zu diskutieren und detaillierte Antworten basierend auf dem Text zu geben. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "B2.1": `Verwende dieses Thema: ${hardTopic}, um einen umfassenden Text auf Deutsch zu erstellen, ähnlich einem Artikel, zugeschnitten für einen B2.1-Sprachlerner. Der Text sollte mehr als fünfzehn Sätze umfassen und so strukturiert sein, dass er komplexe Themen auf konkrete und abstrakte Weise behandelt. Er sollte technische Diskussionen beinhalten, die für jemanden geeignet sind, der mit spezialisierten Themen vertraut ist. Nachdem du den Artikel verfasst hast, entwickle sieben Verständnisfragen auf Deutsch. Diese Fragen sollten die Fähigkeit des Lerners bewerten, die Hauptideen zu erfassen und zu analysieren, sowie seine Fähigkeit, unterschiedliche Perspektiven zu bewerten. Die Fragen sollten kritisches Denken und detaillierte Antworten fördern und den Lerner auffordern, seinen Standpunkt zu den im Artikel diskutierten Themen zu erklären und zu unterstützen, einschließlich der Vor- und Nachteile jeglicher gegebenen Szenarien oder Lösungen. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,

        "B2.2": `Verwende dieses Thema: ${hardTopic}, um einen fortgeschrittenen, detaillierten Text auf Deutsch zu erstellen, der einem tiefgehenden analytischen Artikel ähnelt, zugeschnitten für einen B2.2-Sprachlerner. Dieser Text sollte mehr als achtzehn Sätze umfassen und sich in komplexe und nuancierte Themen vertiefen. Der Artikel sollte Informationen und Ansichten aus mehreren Quellen integrieren und eine umfassende Übersicht bieten, die anspruchsvolle Verständnisfähigkeiten erfordert. Nachdem du den Artikel erstellt hast, entwickle sieben eingehende Verständnisfragen auf Deutsch. Diese Fragen sollten die Fähigkeit des Lerners testen, Argumente zusammenzufassen und zu rekonstruieren, sowie seine Fähigkeit, nuancierte Details und komplexe Konzepte, die im Text präsentiert werden, zu verstehen und zu interpretieren. Die Fragen sollten eine detaillierte Untersuchung des Inhalts fördern und Antworten erfordern, die ein fortgeschrittenes Verständnis widerspiegeln und die Fähigkeit, subtile Unterschiede und feinere Bedeutungsnuancen zu diskutieren. Gib nur den Text und die Fragen klar und ohne zusätzliche Formatierung zurück.
            `,
    };

    return germanPrompts[userLevel] || "Bad Input";
};
