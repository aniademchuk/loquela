import * as functions from "firebase-functions";
import { getOpenAiCompletionWithUserPrompt } from "../ai-helper";

interface ReadingReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

export const checkReadingAnswer = functions.https.onCall(
    async (data: ReadingReviewRequest, context): Promise<string> => {
        if (!context.auth) {
            throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
        }

        const systemPrompt = getReadingAnswerReview(data);

        return await getOpenAiCompletionWithUserPrompt(systemPrompt, data.userAnswer);
    }
);

const getReadingAnswerReview = (data: ReadingReviewRequest) => {
    const langPrompt: { [key: string]: string } = {
        English: `Analyze the response the user has provided in the context of the reading comprehension task. The original question was: ${data.question}. The user is learning ${data.userLearnLanguage} and has given their answer to a question about the text. In your feedback, address specifically what was done well and what could be improved in their response. Consider aspects such as grammar, syntax, semantics, and punctuation.
        Communicate directly to the user, using clear and supportive language in ${data.userLanguage}. Offer practical suggestions for enhancement and focus on making the feedback constructive and informative.
        Format your feedback using HTML tags for clarity. Use h3 for headings, b for bold text, i for italic text, and p for standard text. To create a list, use a dash (-) instead of ul, ol, and li tags. Ensure all text is enclosed within these tags for a well-structured response. This approach should make the user feel as if you are directly explaining everything to them, maintaining the original question in ${data.userLearnLanguage}.
        `,
        Ukrainian: `Проаналізуйте відповідь учня в контексті завдання з розуміння прочитаного. Питання було таке: ${data.question}. Учень, який вивчає мову ${data.userLearnLanguage}, дав відповідь на питання, пов'язане з текстом. Детально проаналізуйте, що в його відповіді було правильно та що можна покращити. Зверніть увагу на аспекти граматики, синтаксису, семантики та пунктуації.
        Подаючи зворотній зв'язок, використовуйте просту і підтримуючу мову ${data.userLanguage}, зберігаючи оригінальне питання мовою ${data.userLearnLanguage}. Запропонуйте конкретні рекомендації для покращення та виділіть ключові моменти, на які учень повинен зосередитися, щоб покращити свої письмові навички.
        Форматуйте ваш відгук за допомогою HTML-тегів для чіткості подачі. Використовуйте h3 для заголовків, b для жирного тексту, i для курсиву, та p для основного тексту. Щоб створити список, використовуйте дефіс (-) замість тегів ul, ol і li. Увесь текст має бути оформлений відповідними тегами, щоб забезпечити добре структурований огляд. Спілкуйтесь з учнем так, ніби ви особисто пояснюєте йому всі аспекти відповіді, зробивши зворотний зв'язок корисним і заохочуючим.
        `,

        German: `Analysieren Sie die Antwort des Lernenden im Kontext der gestellten Leseverständnisfrage. Die Frage lautete: ${data.question}. Der Lernende studiert ${data.userLearnLanguage} und hat eine spezifische Frage zum Text beantwortet. Erklären Sie detailliert, was in der Antwort richtig und was verbesserungswürdig ist. Beziehen Sie sich dabei auf Grammatik, Syntax, Semantik und Interpunktion.
        Geben Sie Ihr Feedback in einer klaren und unterstützenden Sprache ${data.userLanguage}, als ob Sie dem Benutzer die Punkte persönlich erläutern. Dies soll dem Lernenden helfen, seine Fähigkeiten gezielt zu verbessern. 
        Verwenden Sie zur Strukturierung Ihrer Rückmeldung HTML-Tags. Integrieren Sie h3 für Überschriften, b für fetten Text, i für kursiven Text und p für den Haupttext. Um Listen zu erstellen, nutzen Sie bitte einen Bindestrich (-) statt der üblichen ul, ol und li Tags. Achten Sie darauf, dass der gesamte Text mit diesen Tags versehen ist, um eine gut strukturierte und übersichtliche Bewertung zu gewährleisten. Ihre Antwort sollte direkt auf den Lernenden zugeschnitten sein und ihm das Gefühl geben, dass Sie ihm die Inhalte persönlich erklären.
        `,
    };

    return langPrompt[data.userLanguage] || "Bad Input";
};
