import * as functions from "firebase-functions";
import { getOpenAiCompletionOnlySystem } from "./ai-helper";

export const getReadingEng = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const systemPrompt = `Generate a brief plain text without any formatting consisting of four simple sentences tailored for an absolute beginner who is just starting to learn the ${data.userLanguage} language. This text should be easy to understand and focus on basic vocabulary and simple sentence structures, suitable for someone practicing reading in the new language.
    After the text, create three questions based on the content of the text. These questions should be designed to test the reader's understanding of the text. Ensure that the questions are straightforward and use simple language to match the level of the text.`;

    return await getOpenAiCompletionOnlySystem(systemPrompt);
});
