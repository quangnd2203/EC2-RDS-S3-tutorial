import TYPES from 'common/config/Types';
import type { IFirebaseAuthRepository } from 'interface/repositories';
import { IAuthenticationUseCase } from 'interface/usecases';
import { inject, injectable } from 'inversify';

@injectable()
export default class AuthenticationUseCase implements IAuthenticationUseCase {
    @inject(TYPES.repositories.IFirebaseAuthRepository) private firebaseAuthRepository!: IFirebaseAuthRepository;

    async login({ type }: { type: 'google' | 'facebook' | 'apple' }): Promise<any> {
        switch(type){
            case 'google':
                this.firebaseAuthRepository.googleAuth();
                break;
            case 'facebook':
                this.firebaseAuthRepository.facebookAuth();
                break;
            case 'apple':
                this.firebaseAuthRepository.appleAuth();
                break;
        }
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
