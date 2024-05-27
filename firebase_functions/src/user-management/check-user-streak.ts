import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const checkUserStreak = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const userId = context.auth.uid;
    const db = admin.database();

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const todayString = today.toISOString().split("T")[0];
    const yesterdayString = yesterday.toISOString().split("T")[0];

    const userStatsRef = db.ref(`user_practice_stats/${userId}`);
    const practiceDaysRef = userStatsRef.child("practice_days");

    const [todaySnapshot, yesterdaySnapshot] = await Promise.all([
        practiceDaysRef.child(todayString).once("value"),
        practiceDaysRef.child(yesterdayString).once("value"),
    ]);

    if (!yesterdaySnapshot.exists() && todaySnapshot.exists()) {
        return { message: "User hasn't practiced yesterday but has already practiced today; streak remains." };
    }

    if (!yesterdaySnapshot.exists() && !todaySnapshot.exists()) {
        await userStatsRef.update({ daily_streak: 0 });
        return { message: "Streak reset to 0 because no practice was logged yesterday and none so far today." };
    }

    if (yesterdaySnapshot.exists()) {
        return { message: "User practiced yesterday; streak not reset." };
    }

    return { message: "No changes to the streak." };
});
