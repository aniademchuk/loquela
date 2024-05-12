import * as functions from "firebase-functions";
import OpenAI from "openai";

export const generateText = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

    const systemPrompt = `Generate a brief text consisting of four simple sentences tailored for an absolute beginner who is just starting to learn the ${data.userLanguage} language. This text should be easy to understand and focus on basic vocabulary and simple sentence structures, suitable for someone practicing reading in the new language.

    After the text, create three questions based on the content of the text. These questions should be designed to test the reader's understanding of the text. Ensure that the questions are straightforward and use simple language to match the level of the text.`;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: systemPrompt }],
            model: "gpt-3.5-turbo-0125",
        });

        return completion.choices[0].message.content;
    } catch (error: any) {
        console.error("OpenAI error:", error.message);
        throw new functions.https.HttpsError("unknown", "Failed to fetch response from OpenAI", error.message);
    }
});
