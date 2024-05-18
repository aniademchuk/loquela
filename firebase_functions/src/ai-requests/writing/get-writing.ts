import * as functions from "firebase-functions";
import { getOpenAiCompletionOnlySystem } from "../ai-helper";
import { getWritingPromptEN } from "./prompts/en-writing-prompts";
import { getWritingPromptUA } from "./prompts/ua-writing-prompts";
import { getWritingPromptDE } from "./prompts/de-writing-prompts";

interface WritingRequestData {
    userLevel: string;
    userLanguage: string;
    userLearnLanguage: string;
}

export const getWritingQuestion = functions.https.onCall(async (data: WritingRequestData, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const systemPrompt = getWritingPrompt(data.userLevel, data.userLanguage, data.userLearnLanguage);

    return await getOpenAiCompletionOnlySystem(systemPrompt);
});

// getWritingQuestion({ data: { userLevel: "B2.2", userLanguage: "English", userLearnLanguage: "Ukrainian" } })

const getWritingPrompt = (userLevel: string, userLanguage: string, userLearnLanguage: string) => {
    switch (userLanguage) {
        case "English":
            return getWritingPromptEN(userLevel, userLearnLanguage);
        case "Ukrainian":
            return getWritingPromptUA(userLevel, userLearnLanguage);
        case "German":
            return getWritingPromptDE(userLevel, userLearnLanguage);
        default:
            return "Bad Input";
    }
};
