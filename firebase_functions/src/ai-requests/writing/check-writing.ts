import * as functions from "firebase-functions";
import { getOpenAiCompletionWithUserPrompt } from "../ai-helper";

interface WritingReviewRequest {
    userLanguage: string;
    userLearnLanguage: string;
    userAnswer: string;
    question: string;
}

export const checkWritingAnswer = functions.https.onCall(
    async (data: WritingReviewRequest, context): Promise<string> => {
        if (!context.auth) {
            throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
        }

        const systemPrompt = getWritingAnswerReview(data);

        return await getOpenAiCompletionWithUserPrompt(systemPrompt, data.userAnswer);
    }
);

const getWritingAnswerReview = (data: WritingReviewRequest) => {
    const langPrompt: { [key: string]: string } = {
        English: `
        Never use symbols like this: *, #, <, > etc, to format you review. Don't use **text**.
        Analyze the user's response to the writing task. The original question was: ${data.question}. The user, who is learning ${data.userLearnLanguage}, has provided an answer to this question. In your analysis, kindly explain what aspects of their response are effective and which areas need improvement. Use simple and supportive language in ${data.userLanguage} to ensure clarity and encouragement. 
        In your feedback, focus on grammar, syntax, semantics, punctuation, and word choice. Offer specific suggestions to help the user improve. Highlight key areas for future focus to enhance their writing skills in ${data.userLearnLanguage}. 
        Format your feedback using HTML for a clear presentation. Include headings using h3 tags, emphasize important terms with b tags, and use i for emphasis where necessary. For lists, use a dash (-) instead of list tags. Ensure that all text is formatted appropriately. This feedback should feel like a conversation, guiding the learner step-by-step in a friendly and helpful manner.
        Formating should be only using HTML tags. 
`,

        Ukrainian: `
        Ніколи не використовуй символів як: *, #, <, > тощо, для форматування відповіді. Не використовуй **текст** для форматування.
        Проаналізуйте відповідь користувача на задане письмове питання. Питання було: ${data.question}. Користувач вивчає мову ${data.userLearnLanguage} і дав на це питання відповідь. Ваше завдання — детально пояснити, що в цій відповіді зроблено правильно і що потребує вдосконалення.
        Викладайте свій аналіз простою і підтримуючою мовою ${data.userLanguage}, роблячи акцент на граматиці, синтаксисі, семантиці, пунктуації та виборі слів. Запропонуйте конкретні шляхи поліпшення та вкажіть на ключові аспекти, на які варто звернути увагу, аби покращити навички письма.
        Форматуйте вашу відповідь за допомогою HTML-тегів для чіткого подання. Використовуйте h3 для заголовків, b для виділення тексту жирним шрифтом, i для курсиву, та p для основного тексту. Для створення списків використовуйте дефіс (-). Переконайтеся, що вся відповідь грамотно оформлена і доступна для розуміння. Це повинно звучати, ніби ви особисто спілкуєтесь із користувачем, надаючи зворотній зв’язок у дружній та корисній манері.
        Форматування має використовувати лише HTML-теги. 
`,

        German: `
        Benutze nie *, #, <, > usw. Symbole, um eine Review zu erstellen. Benutze **text** nicth.
        Analysieren Sie die Antwort des Nutzers im Kontext der gestellten Schreibaufgabe. Die Frage lautete: ${data.question}. Der Nutzer lernt ${data.userLearnLanguage} und hat diese Frage beantwortet. Erklären Sie detailliert, welche Aspekte der Antwort richtig sind und wo Verbesserungen nötig sind.
        Sprechen Sie den Nutzer direkt an und nutzen Sie eine einfache, unterstützende Sprache in ${data.userLanguage}, um Ihre Erklärungen zu vermitteln. Betonen Sie wichtige Punkte in Bezug auf Grammatik, Syntax, Semantik, Zeichensetzung und Wortwahl. Geben Sie konkrete Verbesserungsvorschläge, um dem Nutzer zu helfen, seine Schreibfähigkeiten weiterzuentwickeln.
        Formatieren Sie Ihr Feedback mit HTML-Tags, um eine klare Darstellung zu gewährleisten. Verwenden Sie h3 für Überschriften, b für fettgedruckten Text, i für kursiven Text und p für den Haupttext. Um Listen zu erstellen, nutzen Sie ein "-" statt ul, ol und li Tags. Achten Sie darauf, dass alle Textelemente entsprechend formatiert sind, um eine gut strukturierte und verständliche Rückmeldung zu bieten. Ihr Feedback sollte so gestaltet sein, als würden Sie dem Nutzer die Inhalte persönlich erklären.
        Die Formatierung sollte nur HTML-Tags verwenden. 
`,
    };

    return langPrompt[data.userLanguage] || "Bad Input";
};
