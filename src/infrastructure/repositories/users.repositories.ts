import IUsersRepository from "src/interface/repositories/users.repositories.js";

import { injectable } from "inversify";
import User from "src/domain/entities/user.entities.js";
import UserModel from "../models/user.models.js";
import { container } from "src/domain/config/dependencies.config.js";
import TYPES from "src/domain/config/types.js";
import UserDto from "src/domain/dtos/user.dtos.js";
import IUserMapper from "src/interface/mappers/user.mappers.js";
import UserCreateDto from "src/domain/dtos/user_create.dtos.js";
import IUserCreateMapper from "src/interface/mappers/user_create.mappers.js";

@injectable()
export default class UsersRepository implements IUsersRepository {

    async create(request: UserCreateDto): Promise<User> {
        const user: User = container.get<IUserCreateMapper>(TYPES.mappers.IUserCreateMapper).toDomain(request);
        const newUser: User = await UserModel.create(user);
        return newUser;
    }

    async read(request: UserDto): Promise<User[]> {
        if(request.id || request.email){
            return UserModel.findAll({
                where: {
                    id: request.id,
                    email: request.email,
                }
            });
        }
        return UserModel.findAll();
    }

    async update(request: UserCreateDto): Promise<User> {
        const user: User = container.get<IUserCreateMapper>(TYPES.mappers.IUserCreateMapper).toDomain(request);
        await UserModel.update(request, {
            where: {
                id: request.id,
            }
        });
        return user;
    }

    async delete(request: UserDto): Promise<boolean> {
        return await UserModel.destroy({
            where: {
                id: request.id,
                email: request.email,
            }
        }) == 1;
    }

}