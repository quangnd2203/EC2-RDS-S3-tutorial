import IUsersRepository from "src/interface/repositories/users.repositories.js";

import { injectable } from "inversify";
import CreateUserDto from "src/domain/dtos/create_user.dtos.js";
import User from "src/domain/entities/user.entities.js";
import UserModel from "../models/user.models.js";
import ICreateUserMapper from "src/interface/mappers/create_user.mappers.js";
import { container } from "src/domain/config/dependencies.config.js";
import TYPES from "src/domain/config/types.js";

@injectable()
export default class UsersRepository implements IUsersRepository {
    
    async create(request: CreateUserDto): Promise<User> {
        const user = container.get<ICreateUserMapper>(TYPES.mappers.CreateUserMapper).toDomain(request);
        const userModel = new UserModel(user);
        await userModel.save();
        console.log(userModel.toObject());
        return userModel.toObject();
    }
}