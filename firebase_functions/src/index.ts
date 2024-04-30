/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-firebase_functions/v2/https";
 * import {onDocumentWritten} from "firebase-firebase_functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as admin from "firebase-admin";
// Import firebase_functions from subdirectories
import { registerUser } from "./auth/registration";

admin.initializeApp();

export {
    registerUser, // Export Cloud Function
};

// Start writing firebase_functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
