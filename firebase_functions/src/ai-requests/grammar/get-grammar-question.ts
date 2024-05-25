import * as functions from "firebase-functions";
import { getOpenAiCompletionOnlySystem } from "../ai-helper";
import { getGrammarPromptEN } from "./prompts/en-grammar-prompts";
import { getGrammarPromptUA } from "./prompts/ua-grammar-prompts";
import { getGrammarPromptDE } from "./prompts/de-grammar-prompts";

interface GrammarRequestData {
    userLevel: string;
    userLearnLanguage: string;
}

export const getGrammarQuestion = functions.https.onCall(async (data: GrammarRequestData, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const systemPrompt = getGrammarPrompt(data.userLevel, data.userLearnLanguage);

    return await getOpenAiCompletionOnlySystem(systemPrompt);
});

const getGrammarPrompt = (userLevel: string, userLearnLanguage: string) => {
    switch (userLearnLanguage) {
        case "English":
            return getGrammarPromptEN(userLevel);
        case "Ukrainian":
            return getGrammarPromptUA(userLevel);
        case "German":
            return getGrammarPromptDE(userLevel);
        default:
            return "Bad Input";
    }
};
