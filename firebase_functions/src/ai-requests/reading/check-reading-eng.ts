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
        English: `Analyze the given user response in the context of the reading comprehension on question provided. Question was: ${data.question}. The user is learning ${data.userLearnLanguage} and has answered a question about the text. You should provide a detailed text explanation for user, who was answering the question, without formatting of what is correct or incorrect in user answer, and offer suggestions for improvement if necessary, it can be related grammar, syntax, semantic, punctuation etc. Deliver this feedback using simple, supportive ${data.userLanguage} language, keeping the original question in ${data.userLearnLanguage}`,
        Ukrainian: `Проаналізуйте дану відповідь користувача в контексті завдання на розуміння прочитаного за наданим питанням. Питання було: ${data.question}. Користувач вивчає ${data.userLearnLanguage} і відповів на питання про текст. Вам слід надати детальне текстове пояснення для людини, яка відповідала на запитання, без форматування щодо того, що є правильним або неправильним у відповіді користувача, та запропонувати рекомендації щодо покращення, якщо це необхідно; це може стосуватися граматики, синтаксису, семантики, пунктуації тощо. Надати цей відгук простою, підтримуючою мовою ${data.userLanguage}, зберігаючи оригінальне питання мовою ${data.userLearnLanguage}`,
        German: `Analysieren Sie die gegebene Benutzerantwort im Kontext des Leseverständnisses zur angegebenen Frage. Die Frage war: ${data.question}. Der Benutzer lernt ${data.userLearnLanguage} und hat eine Frage zum Text beantwortet. Sie sollten eine detaillierte Texterklärung fur User, der die Frage beantowrtet hat, ohne Formatierung geben, was in der Benutzerantwort richtig oder falsch ist, und gegebenenfalls Verbesserungsvorschläge machen. Dies kann Grammatik, Syntax, Semantik, Interpunktion usw. betreffen. Geben Sie dieses Feedback in einfacher, unterstützender Sprache ${data.userLanguage}, wobei die ursprüngliche Frage in ${data.userLearnLanguage} bleibt.`,
    };

    return langPrompt[data.userLanguage] || "Bad Input";
};
