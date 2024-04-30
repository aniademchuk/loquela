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

        return { status: "success", userId: userRecord.uid };
    } catch (error: any) {
        console.error("Error creating new user:", error);
        throw new functions.https.HttpsError("internal", error.message);
    }
});
