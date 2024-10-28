import { AppDependencies, TYPES } from "common/config";
import { IAuthenticationUseCase } from "interface/usecases";

export default class LoginViewModel {
    
    private authenticationUseCase: IAuthenticationUseCase;

    constructor() {
        this.authenticationUseCase = AppDependencies.get<IAuthenticationUseCase>(TYPES.useCases.IAuthenticationUseCase);
    }

    async loginGoogle() {
        this.authenticationUseCase.login({type: 'google'});
    }

    async loginFacebook() {
        this.authenticationUseCase.login({type: 'facebook'});
    }

    async loginApple() {
        this.authenticationUseCase.login({type: 'apple'});
    }
}
