import { injectable } from "inversify";
import IFirebaseRepository from "src/interface/repositories/firebase.repositories.js";
import { DecodedIdToken, getAuth, UserRecord } from "firebase-admin/auth";
import logger from "src/domain/config/logger.config.js";
import * as firebase from "firebase/auth";

@injectable()
export default class FirebaseRepository implements IFirebaseRepository{

    async authenticate(idToken: string): Promise<UserRecord> {
        try{
            const auth = getAuth();
            const decodeToken: DecodedIdToken = await auth.verifyIdToken(idToken);
            const userRecord: UserRecord = await auth.getUser(decodeToken.uid);
            return userRecord;
        } catch (error) {
            logger.error(`Authenticate faild ${idToken}\n${error}`);
            throw new Error('Verify token failed');
        }
    }

    async googleAuth(): Promise<string> {
        try{
            const result = await firebase.signInWithPopup(firebase.getAuth(), new firebase.GoogleAuthProvider());
            return result.user.getIdToken();
        } catch (error) {
            logger.error(`Google auth faild\n${error}`);
            throw new Error('Google auth failed');
        }
    }
}