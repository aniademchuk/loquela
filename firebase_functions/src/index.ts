import * as admin from "firebase-admin";
import { registerUser } from "./auth/register-user";
import { getReadingQuestion } from "./ai-requests/reading/get-reading-question";
import { checkReadingAnswer } from "./ai-requests/reading/check-reading";
import { getWritingQuestion } from "./ai-requests/writing/get-writing";
import { checkWritingAnswer } from "./ai-requests/writing/check-writing";

admin.initializeApp();

export { registerUser, getReadingQuestion, checkReadingAnswer, getWritingQuestion, checkWritingAnswer };
