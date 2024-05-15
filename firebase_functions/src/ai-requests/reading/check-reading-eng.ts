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

        const systemPrompt = `Analyze the given user response in the context of the reading comprehension question provided. Question was: ${data.question}. The user is learning ${data.userLearnLanguage} and has answered a question about the text. Provide a detailed plain text explanation without formatting of what is correct or incorrect in their answer, and offer suggestions for improvement if necessary. Deliver this feedback using simple, supportive ${data.userLanguage} language.`;

        return await getOpenAiCompletionWithUserPrompt(systemPrompt, data.userAnswer);
    }
);
