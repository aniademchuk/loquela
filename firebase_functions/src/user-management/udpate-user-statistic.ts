import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

interface UpdatePracticeDataResponse {
    daily_streak: number;
    total_lessons: number;
    total_days_learning: number;
}

interface PracticeData {
    daily_streak?: number;
    total_lessons?: number;
    total_days_learning?: number;
    practice_days?: {
        [date: string]: {
            lessons_today: number;
        };
    };
}

interface TransactionResult {
    committed: boolean;
    snapshot: admin.database.DataSnapshot;
}

export const updatePracticeData = functions.https.onCall(async (data, context): Promise<UpdatePracticeDataResponse> => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }

    const userId = context.auth.uid;
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const todayString = today.toISOString().split("T")[0];
    const yesterdayString = yesterday.toISOString().split("T")[0];

    const db = admin.database();

    try {
        const result: TransactionResult = await db
            .ref(`user_practice_stats/${userId}`)
            .transaction((currentUser: PracticeData) => {
                if (currentUser) {
                    if (!currentUser.practice_days) {
                        currentUser.practice_days = {};
                    }

                    let isNewDay = false;
                    currentUser.total_lessons = (currentUser.total_lessons || 0) + 1;

                    if (!currentUser.practice_days[todayString]) {
                        currentUser.practice_days[todayString] = { lessons_today: 1 };
                        currentUser.total_days_learning = (currentUser.total_days_learning || 0) + 1;
                        isNewDay = true;
                    } else {
                        currentUser.practice_days[todayString].lessons_today += 1;
                    }

                    if (isNewDay) {
                        if (currentUser.practice_days[yesterdayString]) {
                            currentUser.daily_streak = (currentUser.daily_streak || 0) + 1;
                        } else {
                            currentUser.daily_streak = 1;
                        }
                    }

                    return {
                        ...currentUser,
                        daily_streak: currentUser.daily_streak,
                        total_lessons: currentUser.total_lessons,
                        total_days_learning: currentUser.total_days_learning,
                    };
                } else {
                    return currentUser;
                }
            });

        if (result.committed && result.snapshot.val()) {
            const updatedUserData = result.snapshot.val();
            return {
                daily_streak: updatedUserData.daily_streak,
                total_lessons: updatedUserData.total_lessons,
                total_days_learning: updatedUserData.total_days_learning,
            };
        } else {
            throw new Error("Transaction failed to commit.");
        }
    } catch (error) {
        throw new functions.https.HttpsError("internal", "Failed to update practice data", error);
    }
});
