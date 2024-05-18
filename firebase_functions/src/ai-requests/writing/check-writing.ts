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
        English: `Analyze the given user response in the context of the writing task provided. Question was: ${data.question}. The user is learning ${data.userLearnLanguage} and has written an answer to the question. You should provide a detailed explanation of what is correct or incorrect in the user's answer. This explanation should cover aspects such as grammar, syntax, semantics, punctuation, and word choice. Additionally, offer specific suggestions for improvement and highlight key points the user should focus on to enhance their writing skills. Return answer as plain text without any additional formatting or words styling, if you need to separate words from different language use <>. Deliver this feedback using simple, supportive ${data.userLanguage} language, keeping the original question in ${data.userLearnLanguage}.`,
        Ukrainian: `Проаналізуй відповідь користувача в контексті наданого письмового завдання. Питання було: ${data.question}. Користувач вивчає ${data.userLearnLanguage} і написав відповідь на це питання. Вам слід надати детальне пояснення того, що є правильним або неправильним у відповіді користувача.  Поверніть відповідь у вигляді звичайного тексту без додаткового форматування чи стилізації слів. Якщо потрібно відокремити слова іншої мовою, використовуйте <>.. Це пояснення має охоплювати такі аспекти, як граматика, синтаксис, семантика, пунктуація та вибір слів. Крім того, запропонуйте конкретні рекомендації для покращення та виділіть ключові моменти, на які користувачу слід звернути увагу для покращення своїх навичок письма. Надішліть цей зворотній зв'язок, використовуючи просту, підтримуючу мову ${data.userLanguage}, залишаючи оригінальне питання на ${data.userLearnLanguage}.`,
        German: `Analysieren Sie die gegebene Nutzerantwort im Kontext der bereitgestellten Schreibaufgabe. Die Frage war: ${data.question}. Der Nutzer lernt ${data.userLearnLanguage} und hat eine Antwort auf die Frage geschrieben. Sie sollten eine detaillierte Erklärung geben, was in der Antwort des Nutzers richtig oder falsch ist. Geben Sie die Antwort als einfachen Text ohne zusätzliche Formatierung oder Wortgestaltung zurück. Wenn Sie Wörter in einer anderen Sprache trennen müssen, verwenden Sie <>. Diese Erklärung sollte Aspekte wie Grammatik, Syntax, Semantik, Zeichensetzung und Wortwahl umfassen. Zusätzlich bieten Sie spezifische Verbesserungsvorschläge an und heben Sie wichtige Punkte hervor, auf die der Nutzer achten sollte, um seine Schreibfähigkeiten zu verbessern. Geben Sie dieses Feedback in einfacher, unterstützender ${data.userLanguage} Sprache, wobei die ursprüngliche Frage in ${data.userLearnLanguage} bleibt. `,
    };

    return langPrompt[data.userLanguage] || "Bad Input";
};
