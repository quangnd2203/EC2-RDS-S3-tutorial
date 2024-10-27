export default interface IFirebaseAuthRepository {
    googleAuth(): Promise<string>;
    facebookAuth(): Promise<string>;
    appleAuth(): Promise<string>;
}
