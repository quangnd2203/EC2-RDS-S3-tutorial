import { UserRecord } from "firebase-admin/auth";

export default interface IFirebaseRepository {
    authenticate(idToken: string): Promise<UserRecord>
}