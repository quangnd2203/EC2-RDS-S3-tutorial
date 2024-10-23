import { inject, injectable } from "inversify";
import TYPES from "src/domain/config/types.js";
import { NetworkResponse } from "src/domain/entities/network_response.entities.js";
import ISocialController from "src/interface/controllers/social.controllers.js";
import ISocialUseCases from "src/interface/usercases/social.usecases.js";

@injectable()
export default class SocialController implements ISocialController {
    @inject(TYPES.useCases.ISocialUseCases) private socialUseCases: ISocialUseCases;

    async googleAuth(): Promise<NetworkResponse<string>> {
        try{
            const firebaseToken = await this.socialUseCases.googleAuth();
            return NetworkResponse.success<string>(firebaseToken);
        }catch(e){
            return NetworkResponse.fromErrors(400, e.message || 'google_auth_error');
        }
    }
}