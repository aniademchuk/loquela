import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface RegisterData {
    email: string;
    password: string;
    fullName: string;
    learnLanguage: string;
    timezone: string;
    secureCode: string;
}

export const registerUser = functions.https.onCall(async (data: RegisterData) => {
    if (data.secureCode !== process.env.REACT_APP_SECURE_KEY) {
        throw new functions.https.HttpsError("invalid-argument", "Missing secure code.");
    }

    const { email, password, fullName, learnLanguage, timezone } = data;
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
    } catch (error: unknown) {
        throw new functions.https.HttpsError("internal", "Failed to creating new user.", error);
    }
});
