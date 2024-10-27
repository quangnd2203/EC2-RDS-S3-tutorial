export default interface IAuthenticationUseCase {
    login({ type }: { type: 'google' | 'facebook' | 'apple' }): Promise<any>;

    logout(): Promise<any>;

    authenticate(): Promise<any>;

    refreshToken(): Promise<string>;
}
