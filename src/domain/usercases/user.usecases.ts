import IUserUseCases from "src/interface/usercases/user.usecases.js";
import UserDto from "../dtos/user.dtos.js";
import UserCreateDto from "../dtos/user_create.dtos.js";
import { inject, injectable } from "inversify";
import TYPES from "../config/types.js";
import IUsersRepository from "src/interface/repositories/users.repositories.js";
import { container } from "../config/dependencies.config.js";
import IUserMapper from "src/interface/mappers/user.mappers.js";
import { Request } from "express";
import IStorageFileServices from "src/interface/services/storage_file.services.js";

@injectable()
export default class UserUseCases implements IUserUseCases{
    @inject(TYPES.repositories.IUsersRepository) private usersRepository: IUsersRepository;
    @inject(TYPES.services.IStorageFileServices) private storageFileServices: IStorageFileServices;

    async create(request: UserCreateDto): Promise<UserDto> {
        const user = await this.usersRepository.create(request);
        return container.get<IUserMapper>(TYPES.mappers.IUserMapper).toResponse(user);
    }

    async updateAvatar(id: string, request: Request): Promise<UserDto> {
        const filePath = await this.storageFileServices.save(request);
        if(filePath){
            const user = await this.usersRepository.update({
                id: id,
                avatar: filePath,
            });
            return container.get<IUserMapper>(TYPES.mappers.IUserMapper).toResponse(user);
        }
        return null;
    }
}