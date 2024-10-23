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
import UserUpdateDto from "../dtos/user_update.dtos.js";

@injectable()
export default class UserUseCases implements IUserUseCases{
    @inject(TYPES.repositories.IUsersRepository) private usersRepository: IUsersRepository;
    @inject(TYPES.services.IStorageFileServices) private storageFileServices: IStorageFileServices;

    async create(request: UserCreateDto): Promise<UserDto> {
        const user = await this.usersRepository.create(request);
        return container.get<IUserMapper>(TYPES.mappers.IUserMapper).toResponse(user);
    }

    async login(request: UserCreateDto): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }

    async updateProfile(id: string, request: UserUpdateDto): Promise<UserDto> {
        throw new Error("Method not implemented.");
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

    async getAll(): Promise<UserDto[]> {
        const users = await this.usersRepository.read({id: null, email: null});
        return users.map(user => container.get<IUserMapper>(TYPES.mappers.IUserMapper).toResponse(user));
    }
}