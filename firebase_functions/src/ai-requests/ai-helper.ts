import OpenAI from "openai";
import * as functions from "firebase-functions";

export const getOpenAiCompletionOnlySystem = async (systemPrompt: string): Promise<string> => {
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: systemPrompt }],
            model: "gpt-4-turbo",
        });

        if (completion.choices[0].message.content !== null) {
            return completion.choices[0].message.content;
        }

        return "";
    } catch (error: unknown) {
        throw new functions.https.HttpsError("unknown", "Failed to fetch response from OpenAI", error);
    }
};

export const getOpenAiCompletionWithUserPrompt = async (systemPrompt: string, userPrompt: string): Promise<string> => {
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            model: "gpt-4-turbo",
        });

        if (completion.choices[0].message.content !== null) {
            return completion.choices[0].message.content;
        }

        return "";
    } catch (error: unknown) {
        throw new functions.https.HttpsError("unknown", "Failed to fetch response from OpenAI", error);
    }
};
