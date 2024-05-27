import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { englishLevels, germanLevels, LanguageLevels, ukrainianLevels } from "./lang-lvl-map";

type TestType = "english" | "ukrainian" | "german";

interface CalculateUserLangLevelRequest {
    testResult: number;
    testType: TestType;
}

export const calculateUserLangLevel = functions.https.onCall(
    async (data: CalculateUserLangLevelRequest, context): Promise<number> => {
        if (!context.auth) {
            throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
        }

        const userId = context.auth.uid;
        const db = admin.database();
        const { testResult, testType } = data;

        let level;

        switch (testType) {
            case "english":
                level = getLevel(englishLevels, testResult);
                break;
            case "ukrainian":
                level = getLevel(ukrainianLevels, testResult);
                break;
            case "german":
                level = getLevel(germanLevels, testResult);
                break;
            default:
                level = 0;
                break;
        }
        try {
            await db.ref(`user_lang_level/${userId}/${testType}/`).set(level);
            return level;
        } catch (error: unknown) {
            console.error("Error setting user language level:", error);
            throw new functions.https.HttpsError("internal", "Failed to set user language level", error);
        }
    }
);

const getLevel = (levels: LanguageLevels[], testResult: number) => {
    return levels.find((option) => testResult >= option.min && testResult <= option.max)?.level ?? 0;
};
