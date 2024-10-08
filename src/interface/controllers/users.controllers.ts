import UserDto from "src/domain/dtos/user.dtos.js";
import UserCreateDto from "src/domain/dtos/user_create.dtos.js";
import { NetworkResponse } from "src/domain/entities/network_response.entities.js";
import { Request } from "express";

export default interface IUsersController {
    create: (request: UserCreateDto) => Promise<NetworkResponse<UserDto>>;
    updateAvatar: (id: string, request: Request) => Promise<NetworkResponse<UserDto>>;
}