import { IAuthenticationUseCase } from 'interface/usecases';
import { injectable } from 'inversify';

@injectable()
export default class AuthenticationUseCase implements IAuthenticationUseCase {
    login({ type }: { type: 'google' | 'facebook' | 'apple' }): Promise<any> {
        throw new Error('Method not implemented.');
    }
    logout(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    authenticate(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    refreshToken(): Promise<string> {
        throw new Error('Method not implemented.');
    }
}
