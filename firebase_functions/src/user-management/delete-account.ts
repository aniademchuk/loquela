import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const deleteUserAccount = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const userId = context.auth.uid;
    const db = admin.database();

    try {
        await Promise.all([
            db.ref(`users/${userId}`).remove(),
            db.ref(`user_reminders/${userId}`).remove(),
            db.ref(`user_lang_level/${userId}`).remove(),
            db.ref(`user_practice_stats/${userId}`).remove(),
        ]);

        await admin.auth().deleteUser(userId);

        return { status: "success", message: "User account deleted successfully" };
    } catch (error: unknown) {
        console.error("Error deleting user data:", error);
        throw new functions.https.HttpsError("internal", "Failed to delete user account", error);
    }
});
