import { IFirebaseAuthRepository } from 'interface/repositories';
import * as firebase from 'firebase/auth';
import { injectable } from 'inversify';

@injectable()
export default class FirebaseAuthRepository implements IFirebaseAuthRepository {
    async googleAuth(): Promise<string> {
        try {
            const result = await firebase.signInWithPopup(firebase.getAuth(), new firebase.GoogleAuthProvider());
            return result.user.getIdToken();
        } catch (error) {
            throw error;
        }
    }

    async facebookAuth(): Promise<string> {
        try {
            const result = await firebase.signInWithPopup(firebase.getAuth(), new firebase.FacebookAuthProvider());
            return result.user.getIdToken();
        } catch (error) {
            throw error;
        }
    }

    async appleAuth(): Promise<string> {
        try {
            const result = await firebase.signInWithPopup(firebase.getAuth(), new firebase.OAuthProvider('apple.com'));
            return result.user.getIdToken();
        } catch (error) {
            throw error;
        }
    }
}
