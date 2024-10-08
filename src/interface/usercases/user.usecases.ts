import UserDto from "src/domain/dtos/user.dtos.js";
import UserCreateDto from "src/domain/dtos/user_create.dtos.js";
import { Request } from "express";

export default interface IUserUseCases{
    create: (request: UserCreateDto) => Promise<UserDto>;
    updateAvatar: (id: string, request: Request) => Promise<UserDto>;
}