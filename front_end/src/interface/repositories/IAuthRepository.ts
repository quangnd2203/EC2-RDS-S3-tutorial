export default interface IAuthRepository {
    login({idToken, provider}: {idToken: string, provider: string}): Promise<string>;
    logout(): Promise<any>;
    authenticate(): Promise<any>;
    refreshToken(): Promise<string>;
}