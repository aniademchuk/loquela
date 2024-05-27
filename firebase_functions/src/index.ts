import * as admin from "firebase-admin";
import { registerUser } from "./auth/register-user";
import { getReadingQuestion } from "./ai-requests/reading/get-reading-question";
import { checkReadingAnswer } from "./ai-requests/reading/check-reading";
import { getWritingQuestion } from "./ai-requests/writing/get-writing";
import { checkWritingAnswer } from "./ai-requests/writing/check-writing";
import { updateUserData } from "./user-management/update-user-data";
import { updateUserRemindersData } from "./user-management/update-user-reminders";
import { deleteUserAccount } from "./user-management/delete-account";
import { getGrammarQuestion } from "./ai-requests/grammar/get-grammar-question";
import { checkGrammarAnswer } from "./ai-requests/grammar/check-grammar";
import { calculateUserLangLevel } from "./entry-test/calculate-user-lang-level";
import { updatePracticeData } from "./user-management/udpate-user-statistic";
import { checkUserStreak } from "./user-management/check-user-streak";
import { getPracticeDataForChart } from "./user-management/get-practice-data-for-chart";

admin.initializeApp();

export {
    registerUser,
    getReadingQuestion,
    checkReadingAnswer,
    getWritingQuestion,
    checkWritingAnswer,
    updateUserData,
    updateUserRemindersData,
    deleteUserAccount,
    getGrammarQuestion,
    checkGrammarAnswer,
    calculateUserLangLevel,
    updatePracticeData,
    checkUserStreak,
    getPracticeDataForChart,
};
