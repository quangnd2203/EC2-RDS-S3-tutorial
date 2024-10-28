import { TYPES } from 'common/config';
import type { IFirebaseAuthRepository } from 'interface/repositories';
import { IAuthenticationUseCase } from 'interface/usecases';
import { inject, injectable } from 'inversify';

@injectable()
export default class AuthenticationUseCase implements IAuthenticationUseCase {
    @inject(TYPES.repositories.IFirebaseAuthRepository) private firebaseAuthRepository!: IFirebaseAuthRepository;

    async login({ type }: { type: 'google' | 'facebook' | 'apple' }): Promise<any> {
        const loginProvider = {
            'google': this.firebaseAuthRepository.googleAuth,
            'facebook': this.firebaseAuthRepository.facebookAuth,
            'apple': this.firebaseAuthRepository.appleAuth
        }
        const idToken = await loginProvider[type]();
        return null;
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
