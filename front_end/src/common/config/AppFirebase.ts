import { initializeApp } from 'firebase/app';

var AppFirebase;

function initializeFirebaseApp() {
    AppFirebase = initializeApp(JSON.parse(process.env.FIREBASE_CLIENT_CONFIG as string));
}

export default AppFirebase;

export { initializeFirebaseApp };
