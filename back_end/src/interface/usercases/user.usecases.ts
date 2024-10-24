import UserDto from "src/domain/dtos/user.dtos.js";
import UserCreateDto from "src/domain/dtos/user_create.dtos.js";
import { Request } from "express";
import UserUpdateDto from "src/domain/dtos/user_update.dtos.js";

export default interface IUserUseCases{
    create: (request: UserCreateDto) => Promise<UserDto>;
    login: (request: UserCreateDto) => Promise<UserDto>;
    updateAvatar: (id: string, request: Request) => Promise<UserDto>;
    updateProfile: (id: string, request: UserUpdateDto) => Promise<UserDto>;
    getAll: () => Promise<UserDto[]>;
}