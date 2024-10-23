import { inject, injectable } from "inversify";
import ISocialUseCases from "src/interface/usercases/social.usecases.js";
import TYPES from "../config/types.js";
import IFirebaseRepository from "src/interface/repositories/firebase.repositories.js";

@injectable()
export default class SocialUsecases implements ISocialUseCases{

    @inject(TYPES.repositories.IFirebaseRepository) private firebaseRepository: IFirebaseRepository;

    googleAuth(): Promise<string> {
        return this.firebaseRepository.googleAuth();
    }

}