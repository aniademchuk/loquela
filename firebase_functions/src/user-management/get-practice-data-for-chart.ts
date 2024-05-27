import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface ChartDataResponse {
    categories: string[];
    data: number[];
}

export const getPracticeDataForChart = functions.https.onCall(async (data, context): Promise<ChartDataResponse> => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const userId = context.auth.uid;
    const db = admin.database();
    const practiceDaysRef = db.ref(`user_practice_stats/${userId}/practice_days`);

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 6);

    const categories: string[] = [];
    const values: number[] = [];

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateString = d.toISOString().split("T")[0];
        const daySnapshot = await practiceDaysRef.child(dateString).once("value");
        if (daySnapshot.exists()) {
            categories.push(dateString);
            values.push(daySnapshot.val().lessons_today || 0);
        } else {
            categories.push(dateString);
            values.push(0);
        }
    }

    return { categories, data: values };
});
