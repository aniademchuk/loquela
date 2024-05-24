import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface UpdateUserRequest {
    email: string;
    fullName: string;
    learnLanguage: string;
    timezone: string;
}

export const updateUserData = functions.https.onCall(async (data: UpdateUserRequest, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const { email, fullName, learnLanguage, timezone } = data;
    if (!email || !fullName || !learnLanguage || !timezone) {
        throw new functions.https.HttpsError("invalid-argument", "Missing required fields");
    }

    try {
        const userRecord = await admin.auth().updateUser(context.auth.uid, { email });

        const db = admin.database();
        await db.ref(`users/${userRecord.uid}`).update({
            email,
            fullName,
            learnLanguage,
            timezone,
        });

        return { status: "success", message: "User data updated successfully" };
    } catch (error) {
        throw new functions.https.HttpsError("internal", "Failed to update user data", error);
    }
});
