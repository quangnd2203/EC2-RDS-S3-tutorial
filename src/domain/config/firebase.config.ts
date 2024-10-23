import admin from "firebase-admin";
import {initializeApp} from "firebase/app";

export function initializeFirebaseAdmin() {
    return admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)),
    });
}

export function initializeFirebase() {
    return initializeApp(JSON.parse(process.env.FIREBASE_CLIENT_CONFIG));
}

