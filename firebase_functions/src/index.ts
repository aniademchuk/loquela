import * as admin from "firebase-admin";
import { registerUser } from "./auth/user-auth";
import { getReadingQuestion } from "./ai-requests/reading/get-reading-question";
import { checkReadingAnswer } from "./ai-requests/reading/check-reading-eng";

admin.initializeApp();

export { registerUser, getReadingQuestion, checkReadingAnswer };
