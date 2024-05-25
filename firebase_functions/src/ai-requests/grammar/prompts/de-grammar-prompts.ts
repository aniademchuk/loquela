import { getRandomHardTopicDE, getRandomTopicDE } from "../../../topics/de-topics";
import {
    getRandomMistakeDEA11,
    getRandomMistakeDEA12,
    getRandomMistakeDEA21,
    getRandomMistakeDEA22,
    getRandomMistakesDEB11,
    getRandomMistakesDEB12,
    getRandomMistakesDEB21,
    getRandomMistakesDEB22,
} from "../../../topics/grammar/de-grammar-topics";

export const getGrammarPromptDE = (userLevel: string): string => {
    const topic = getRandomTopicDE();
    const hardTopic = getRandomHardTopicDE();

    switch (userLevel) {
        case "A1.1": {
            const mistake = getRandomMistakeDEA11();
            return `Du bist ein Sprachlernassistent. Erstelle einen einfachen Satz, der für einen absoluten Anfänger (A1.1) 
            im Deutschlernen geeignet ist, zum Thema "${topic}". Füge absichtlich einen grammatikalischen Fehler ein, 
            der mit ${mistake} zusammenhängt. Der Satz sollte den Lernenden dazu ermutigen, den Fehler zu erkennen und zu 
            korrigieren, um ihm zu helfen, die grundlegende Grammatik zu verstehen und zu üben. Stelle sicher, dass der 
            Satz kontextuell relevant für das Thema ist, auch wenn nur ein Teil des Themas verwendet wird. Gib den Satz klar 
            und ohne zusätzliche Formatierung zurück.`;
        }
        case "A1.2": {
            const mistake = getRandomMistakeDEA12();
            return `Du bist ein Sprachlernassistent. Erstelle einen einfachen Satz mit einem absichtlichen grammatikalischen 
            Fehler zum Thema ${mistake}, der für einen fortgeschrittenen Anfänger (A1.2) im Deutschlernen geeignet ist und das 
            Thema "${topic}" verwendet. Dein Satz sollte so gestaltet sein, dass er den Lernenden herausfordert, den Fehler 
            zu erkennen und zu korrigieren, und somit deren Grammatikpraxis und Lernen unterstützt. Verwende das Thema kreativ; 
            du kannst entweder das gesamte Thema oder nur Elemente davon verwenden, um sicherzustellen, dass der Satz Sinn 
            ergibt und ansprechend ist. Gib den Satz ohne zusätzliche Formatierung zurück.`;
        }
        case "A2.1": {
            const mistake = getRandomMistakeDEA21();
            return `Du bist ein Sprachlernassistent. Deine Aufgabe ist es, zwei Sätze für einen Deutschlernenden auf 
            dem Niveau A2.1 zu erstellen, die das Thema "${topic}" verwenden. Jeder Satz sollte einen absichtlichen 
            grammatikalischen Fehler enthalten, der mit ${mistake} zusammenhängt, aber der Fehler sollte in jedem Satz 
            in einer anderen Form auftreten. Dieser Ansatz hilft dem Lernenden, die Variabilität dieses grammatikalischen 
            Problems zu erkennen und zu verstehen. Verwende das Thema entweder in seiner Gesamtheit oder in Teilen, um 
            sicherzustellen, dass die Sätze relevant und ansprechend sind. Das Ziel ist, dass der Lernende diese Fehler 
            erkennt und korrigiert, um die Grammatik zu üben und sein Verständnis zu verbessern. Gib die beiden Sätze 
            klar und ohne zusätzliche Formatierung zurück.`;
        }
        case "A2.2": {
            const mistake = getRandomMistakeDEA22();
            return `Du bist ein Sprachlernassistent. Deine Aufgabe ist es, drei Sätze für einen Deutschlernenden auf 
            dem Niveau A2.2 zu erstellen, die das Thema "${topic}" verwenden. Jeder Satz sollte einen absichtlichen 
            grammatikalischen Fehler enthalten, der mit ${mistake} zusammenhängt und das Verständnis des Lernenden für 
            komplexere Grammatikaspekte auf diesem Niveau herausfordert. Verwende das Thema entweder vollständig oder 
            in Teilen, um die Sätze ansprechend und kontextuell relevant zu machen. Das Ziel ist, dass der Lernende den 
            Fehler erkennt und korrigiert, um seine Grammatikfähigkeiten und sein Verständnis zu verbessern. Gib die 
            Sätze klar und ohne zusätzliche Formatierung zurück.`;
        }
        case "B1.1": {
            const mistakes = getRandomMistakesDEB11();
            return `Du bist ein Sprachlernassistent. Deine Aufgabe ist es, einen kurzen Text von bis zu 3 Sätzen für 
            einen Deutschlernenden auf dem Niveau B1.1 zu erstellen, der das Thema "${topic}" verwendet. Dieser Text 
            sollte absichtlich 3 oder mehr grammatikalische Fehler enthalten, die mit den ausgewählten Fehlern 
            [${mistakes}] zusammenhängen. Diese Fehler sollten variieren, um verschiedene Aspekte der Grammatik 
            abzudecken, die auf diesem Niveau herausfordernd sind. Verwende das Thema kreativ, entweder vollständig 
            oder in Teilen, um sicherzustellen, dass der Text ansprechend und kontextuell relevant ist. Das Ziel ist, 
            dass der Lernende die Fehler erkennt und korrigiert, um seine Grammatikfähigkeiten und sein Verständnis zu 
            verbessern. Gib den Text klar und ohne zusätzliche Formatierung zurück.`;
        }
        case "B1.2": {
            const mistakes = getRandomMistakesDEB12();
            return `Du bist ein Sprachlernassistent. Deine Aufgabe ist es, einen kurzen Absatz von bis zu 5 Sätzen für 
            einen Deutschlernenden auf dem Niveau B1.2 zu erstellen, der das Thema "${topic}" verwendet. Dieser Absatz 
            sollte absichtlich 4 grammatikalische Fehler enthalten, die mit den ausgewählten Fehlern [${mistakes}] 
            zusammenhängen. Diese Fehler sollten variieren, um die Fähigkeit des Lernenden herauszufordern, komplexe 
            Grammatikprobleme zu erkennen und zu korrigieren. Verwende das Thema entweder vollständig oder teilweise, 
            um sicherzustellen, dass der Absatz kontextuell relevant und ansprechend ist. Das Ziel ist, dass der Lernende 
            den Text analysiert, die grammatikalischen Fehler erkennt und korrigiert, was zur Verbesserung seiner 
            Grammatikfähigkeiten und seines Verständnisses beiträgt. Gib den Absatz klar und ohne zusätzliche Formatierung zurück.`;
        }
        case "B2.1": {
            const mistakes = getRandomMistakesDEB21();
            return `Du bist ein Sprachlernassistent. Deine Aufgabe ist es, einen Text von bis zu 6 Sätzen für einen 
            Deutschlernenden auf dem Niveau B2.1 zu erstellen, der das Thema "${hardTopic}" verwendet. Dieser Text sollte 
            absichtlich 5 grammatikalische Fehler enthalten, die mit den ausgewählten Fehlern [${mistakes}] zusammenhängen. 
            Die Fehler sollten variieren und strategisch platziert sein, um die Fähigkeit des Lernenden herauszufordern, 
            komplexe Grammatikprobleme zu erkennen und zu korrigieren. Verwende das Thema kreativ, integriere es vollständig 
            oder teilweise, um sicherzustellen, dass der Text kontextuell relevant, ansprechend und angemessen herausfordernd 
            ist. Das Ziel ist, dass der Lernende den Text analysiert, die grammatikalischen Fehler erkennt und korrigiert, 
            was zur Verbesserung seiner Grammatikfähigkeiten und seines Verständnisses beiträgt. Gib den Text klar und 
            ohne zusätzliche Formatierung zurück.`;
        }
        case "B2.2": {
            const mistakes = getRandomMistakesDEB22();
            return `Du bist ein Sprachlernassistent. Deine Aufgabe ist es, einen Text von bis zu 7 Sätzen für einen 
            fortgeschrittenen Deutschlernenden auf dem Niveau B2.2 zu erstellen, der das Thema "${hardTopic}" verwendet. 
            Dieser Text sollte absichtlich 5 grammatikalische Fehler enthalten, die mit den ausgewählten Fehlern [${mistakes}] 
            zusammenhängen. Die Fehler sollten vielfältig und subtil integriert sein, um die Fähigkeiten des Lernenden 
            gründlich herauszufordern, fortgeschrittene Grammatikprobleme zu erkennen und zu korrigieren. Verwende das 
            Thema kreativ, entweder vollständig oder teilweise, um sicherzustellen, dass der Text kontextuell relevant, 
            intellektuell ansprechend und reflektiert die reale Sprachverwendung ist. Das Ziel ist, dass der Lernende den 
            Text kritisch analysiert, die grammatikalischen Fehler genau erkennt und korrigiert, was zur Verbesserung seiner 
            Beherrschung der komplexen deutschen Grammatik beiträgt. Gib den Text klar und ohne zusätzliche Formatierung zurück.`;
        }
        default:
            return "Bad Input";
    }
};
