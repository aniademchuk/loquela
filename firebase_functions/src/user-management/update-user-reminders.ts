import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface UpdateUserRequest {
    practice: boolean;
    weeklyStatistic: boolean;
    news: boolean;
}

export const updateUserRemindersData = functions.https.onCall(async (data: UpdateUserRequest, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const { practice, weeklyStatistic, news } = data;

    try {
        const db = admin.database();
        await db.ref(`user_reminders/${context.auth.uid}`).update({
            loquela_news: news,
            practice: practice,
            weekly_stats: weeklyStatistic,
        });

        return { status: "success", message: "User data updated successfully" };
    } catch (error) {
        throw new functions.https.HttpsError("internal", "Failed to update user reminders data", error);
    }
});
