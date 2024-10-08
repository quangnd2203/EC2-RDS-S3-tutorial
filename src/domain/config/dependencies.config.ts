import { Container} from "inversify";
import "reflect-metadata";
import TYPES from "./types.js";

import IUsersController from "src/interface/controllers/users.controllers.js";


import IUsersRepository from "src/interface/repositories/users.repositories.js";
import UsersRepository from "src/infrastructure/repositories/users.repositories.js";
import UsersController from "src/application/controllers/users.controllers.js";
import IUserMapper from "src/interface/mappers/user.mappers.js";
import UserMapper from "../mappers/user.mappers.js";
import IUserUseCases from "src/interface/usercases/user.usecases.js";
import UserUseCases from "../usercases/user.usecases.js";
import IUserCreateMapper from "src/interface/mappers/user_create.mappers.js";
import UserCreateMapper from "../mappers/user_create.mappers.js";
import IStorageFileServices from "src/interface/services/storage_file.services.js";
import StorageFileLocalServices from "src/infrastructure/services/storage_file.local.services.js";

export const container = new Container();

export function inject() {
    injectControllers();
    injectUseCases();
    injectRepositories();
    injectServices();
    injectMappers();
}

/* Controllers */
function injectControllers(){
    container.bind<IUsersController>(TYPES.controller.IUsersController).to(UsersController);

}

/* Use Cases */
function injectUseCases(){
    container.bind<IUserUseCases>(TYPES.useCases.IUserUseCases).to(UserUseCases);

}

/* Repositories */
function injectRepositories(){
    container.bind<IUsersRepository>(TYPES.repositories.IUsersRepository).to(UsersRepository);

}

/* Services */
function injectServices(){
    if(process.env.ENV === 'dev')
        container.bind<IStorageFileServices>(TYPES.services.IStorageFileServices).to(StorageFileLocalServices);
    // container.bind<IService>(TYPES.services.IService).to(Service);
}

/* Mappers */
function injectMappers(){
    container.bind<IUserMapper>(TYPES.mappers.IUserMapper).to(UserMapper);
    container.bind<IUserCreateMapper>(TYPES.mappers.IUserCreateMapper).to(UserCreateMapper);
}