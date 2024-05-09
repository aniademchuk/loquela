import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { RegisterData } from "../interfaces";

export const registerUser = functions.https.onCall(async (data: RegisterData) => {
    const { email, password, fullName, interfaceLanguage, learnLanguage, timezone } = data;
    if (!email || !password) {
        throw new functions.https.HttpsError("invalid-argument", "Missing required fields");
    }

    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
        });

        const db = admin.database();
        await db.ref(`users/${userRecord.uid}`).set({
            email: email,
            fullName: fullName,
            interfaceLanguage: interfaceLanguage,
            learnLanguage: learnLanguage,
            timezone: timezone,
        });

        await db.ref(`user_reminders/${userRecord.uid}`).set({
            practice: false,
            weekly_stats: false,
            loquela_news: false,
        });

        await db.ref(`user_lang_level/${userRecord.uid}`).set({
            english: 0,
            ukrainian: 0,
            german: 0,
        });

        await db.ref(`user_practice_stats/${userRecord.uid}`).set({
            daily_streak: 0,
            total_days_learning: 0,
            total_lessons: 0,
        });

        return { status: "success", userId: userRecord.uid };
    } catch (error: any) {
        console.error("Error creating new user:", error);
        throw new functions.https.HttpsError("internal", error.message);
    }
});
