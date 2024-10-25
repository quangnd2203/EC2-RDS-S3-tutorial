import { injectable, inject } from "inversify";
import "reflect-metadata";
import { NetworkResponse, STATUS_CODE } from "src/domain/entities/network_response.entities.js";
import IUsersController from "src/interface/controllers/users.controllers.js";
import TYPES from "src/common/config/types.js";
import UserCreateDto from "src/domain/dtos/user_create.dtos.js";
import UserDto from "src/domain/dtos/user.dtos.js";
import IUserUseCases from "src/interface/usercases/user.usecases.js";
import { Request } from "express";

@injectable()
export default class UsersController implements IUsersController {
    @inject(TYPES.useCases.IUserUseCases) private userUseCases: IUserUseCases;

    async create(request: UserCreateDto): Promise<NetworkResponse<UserDto>> {
        try {
            const userDto = await this.userUseCases.create(request);
            return NetworkResponse.success<UserDto>(userDto);
        } catch (e) {
            return NetworkResponse.fromErrors(STATUS_CODE.bad_request, e.message || 'create_user_error');
        }
    }

    async updateAvatar(id: string, request: Request): Promise<NetworkResponse<UserDto>> {
        try {
            const userDto = await this.userUseCases.updateAvatar(id, request);
            return NetworkResponse.success<UserDto>(userDto);
        } catch (e) {
            return NetworkResponse.fromErrors(STATUS_CODE.bad_request, e.message || 'update_avatar_error');
        }
    }

    async getAll(): Promise<NetworkResponse<UserDto[]>> {
        try {
            const usersDto = await this.userUseCases.getAll();
            return NetworkResponse.success<UserDto[]>(usersDto);
        } catch (e) {
            return NetworkResponse.fromErrors(STATUS_CODE.bad_request, e.message || 'get_all_users_error');
        }
    }
}