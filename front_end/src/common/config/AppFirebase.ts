import { initializeApp } from 'firebase/app';

export const AppFirebase = initializeApp(JSON.parse(process.env.FIREBASE_CLIENT_CONFIG as string));
