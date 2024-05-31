import * as functions from "firebase-functions";
import { getOpenAiCompletionWithUserPrompt } from "../ai-helper";

interface GrammarReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

export const checkGrammarAnswer = functions.https.onCall(
    async (data: GrammarReviewRequest, context): Promise<string> => {
        if (!context.auth) {
            throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
        }

        const systemPrompt = getGrammarAnswerReview(data);

        return await getOpenAiCompletionWithUserPrompt(systemPrompt, data.userAnswer);
    }
);

const getGrammarAnswerReview = (data: GrammarReviewRequest) => {
    const langPrompt: { [key: string]: string } = {
        English: `
        Never use symbols like this: *, #, <, > etc, to format you review. Don't use **text**.
        The user provided corrections for a paragraph containing intentional grammatical errors. 
        Their response aimed to identify and correct these errors. 
        Review the user's corrections and analyze their understanding and accuracy in identifying the errors. 
        Provide a detailed explanation of what the user corrected correctly and point out any errors they missed or corrected inaccurately. 
        Format the full response using HTML tags. The response should not include the full HTML page structure such as html, head, and body tags, but only the content, wrapped in appropriate HTML tags. Use tags such as h3 for headings, b for bold text, i for italic text, and p for default text. Don't use ul, ol and li tags, to make a list simply use a - .Ensure all text is covered with these tags to provide a well-formatted review.
        Offer comprehensive feedback on all grammatical aspects such as tense usage, verb forms, punctuation, article use, and sentence structure. 
        Ensure the feedback is thorough, clear, and supportive to help the user improve their grammar skills in English. 
        Additionally, suggest better alternatives where necessary and explain the grammatical rules related to the corrections. 
        This feedback should help the user refine their understanding of grammar and enhance their correction skills.
        Here is user corrections: ${data.userAnswer} Here was the paragraph with grammatical errors: ${data.question}.
        Provide review to user as you explain to him in supportive ${data.userLanguage}, but keep all task question in original language (${data.userLearnLanguage}).
        Formating should be only using HTML tags. 
        `,
        Ukrainian: `
        Ніколи не використовуй символів як: *, #, <, > тощо, для форматування відповіді. Не використовуй **текст** для форматування.
        Користувач вніс виправлення до абзацу, який містив навмисні граматичні помилки.
        Його відповідь мала на меті ідентифікувати та виправити ці помилки.
        Перегляньте виправлення користувача та проаналізуйте його розуміння та точність у виявленні помилок.
        Надайте детальне пояснення того, що користувач виправив правильно, та вкажіть на будь-які помилки, які вони пропустили або виправили неправильно.
        Форматуйте повну відповідь за допомогою HTML-тегів. У відповіді не повинно бути повної структури HTML-сторінки, такої як теги html, head та body, а лише вміст, обгорнутий відповідними HTML-тегами. Використовуйте такі теги, як h3 для заголовків, b для жирного тексту, i для курсивного тексту та p для звичайного тексту. Не використовуйте теги ul, ol та li, щоб створити список, просто використовуйте символ -. Переконайтеся, що весь текст охоплений цими тегами для забезпечення добре відформатованого огляду.        Надайте всеосяжний зворотній зв'язок з усіх граматичних аспектів, таких як використання часу, форми дієслів, пунктуації, 
        використання артиклів та структури речень.
        Переконайтеся, що відгуки є ретельними, чіткими та підтримуючими, щоб допомогти користувачу покращити свої навички граматики.
        Крім того, запропонуйте кращі альтернативи там, де це необхідно, та поясніть граматичні правила, пов'язані з виправленнями.
        Цей зворотній зв'язок повинен допомогти користувачу уточнити своє розуміння граматики та покращити свої навички виправлення.
        Ось виправлення користувача: ${data.userAnswer}. Ось був абзац з граматичними помилками: ${data.question}.
        Надай огляд для користувача, ніби розмовляєш з ним, у підтримуючій ${data.userLanguage}, але зберігайте всі завдання запитань на 
        оригінальній мові (${data.userLearnLanguage}).
        Форматування має використовувати лише HTML-теги. 
        `,
        German: `
        Benutze nie *, #, <, > usw. Symbole, um eine Review zu erstellen. Benutze **text** nicth.
        Der Benutzer hat Korrekturen für einen Absatz mit absichtlichen Grammatikfehlern bereitgestellt.
        Ihre Antwort zielte darauf ab, diese Fehler zu identifizieren und zu korrigieren.
        Überprüfen Sie die Korrekturen des Benutzers und analysieren Sie sein Verständnis und seine Genauigkeit bei der Fehleridentifikation.
        Geben Sie eine detaillierte Erklärung darüber, was der Benutzer richtig korrigiert hat und weisen Sie auf Fehler hin, die er übersehen oder falsch korrigiert hat.
        Formatieren Sie die vollständige Antwort mit HTML-Tags. Die Antwort sollte nicht die vollständige HTML-Seitenstruktur wie html, head und body Tags beinhalten, sondern nur den Inhalt, umhüllt von entsprechenden HTML-Tags. Verwenden Sie Tags wie h3 für Überschriften, b für fetten Text, i für kursiven Text und p für Standardtext. Verwenden Sie keine ul, ol und li Tags, um eine Liste zu erstellen, verwenden Sie einfach ein -. Stellen Sie sicher, dass der gesamte Text mit diesen Tags abgedeckt ist, um eine gut formatierte Bewertung zu bieten. 
        Bieten Sie umfassendes Feedback zu allen grammatischen Aspekten wie Zeitgebrauch, Verbformen, Interpunktion, Artikelgebrauch und Satzstruktur.
        Stellen Sie sicher, dass das Feedback gründlich, klar und unterstützend ist, um dem Benutzer zu helfen, seine 
        Grammatikfähigkeiten in Englisch zu verbessern.
        Schlagen Sie außerdem bessere Alternativen vor, wo nötig, und erklären Sie die grammatischen Regeln, die mit den Korrekturen zusammenhängen.
        Dieses Feedback sollte dem Benutzer helfen, sein Verständnis von Grammatik zu verfeinern und seine Korrekturfähigkeiten zu verbessern.
        Hier sind die Korrekturen des Benutzers: ${data.userAnswer}. Hier war der Absatz mit den Grammatikfehlern: ${data.question}.
        Geben Sie dem Benutzer eine Rückmeldung, wie Sie es ihm in unterstützender ${data.userLanguage} erklären, 
        aber behalten Sie alle Aufgabenfragen in der Originalsprache (${data.userLearnLanguage}).
        Die Formatierung sollte nur HTML-Tags verwenden. 
        `,
    };

    return langPrompt[data.userLanguage] || "Bad Input";
};
