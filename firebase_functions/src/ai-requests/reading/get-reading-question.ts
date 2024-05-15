import * as functions from "firebase-functions";
import { getOpenAiCompletionOnlySystem } from "../ai-helper";
import { getQuestionPromptEN } from "./prompts/en-question-prompts";
import { getQuestionPromptUA } from "./prompts/ua-question-prompts";
import { getQuestionPromptDE } from "./prompts/de-question-prompts";

interface ReadingRequestData {
    userLevel: string;
    userLearnLanguage: string;
}

export const getReadingQuestion = functions.https.onCall(async (data: ReadingRequestData, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const systemPrompt = getQuestionPrompt(data.userLevel, data.userLearnLanguage);

    return await getOpenAiCompletionOnlySystem(systemPrompt);
});

const getQuestionPrompt = (userLevel: string, userLearnLanguage: string) => {
    switch (userLearnLanguage) {
        case "English":
            return getQuestionPromptEN(userLevel);
        case "Ukrainian":
            return getQuestionPromptUA(userLevel);
        case "German":
            return getQuestionPromptDE(userLevel);
        default:
            return "Bad Input";
    }
};
