import admin from "firebase-admin";

export function initializeFirebaseAdmin() {
    return admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)),
    });
}

