import * as admin from "firebase-admin";
import { registerUser } from "./auth/user-auth";
import { getReadingEng } from "./ai-requests/get-reading-eng";
import { checkReadingAnswer } from "./ai-requests/check-reading-eng";
import { generateText } from "./ai-requests/reading-requests-en";

admin.initializeApp();

export { registerUser, getReadingEng, checkReadingAnswer, generateText };
