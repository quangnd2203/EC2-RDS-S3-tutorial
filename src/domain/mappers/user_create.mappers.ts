import IUserMapper from "src/interface/mappers/user.mappers.js";
import UserDto from "../dtos/user.dtos.js";
import User from "../entities/user.entities.js";
import { injectable } from "inversify";
import IUserCreateMapper from "src/interface/mappers/user_create.mappers.js";
import UserCreateDto from "../dtos/user_create.dtos.js";

@injectable()
export default class UserCreateMapper implements IUserCreateMapper{

    toResponse(entity: User) {
        return new UserCreateDto({
            id: entity.id,
            email: entity.email,
            password: entity.password,
            avatar: entity.avatar,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    }

    toDomain(dto: UserCreateDto): User {
        return new User({
            id: dto.id,
            email: dto.email,
            password: dto.password,
            avatar: dto.avatar,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }

}