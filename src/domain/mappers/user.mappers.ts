import IUserMapper from "src/interface/mappers/user.mappers.js";
import UserDto from "../dtos/user.dtos.js";
import User from "../entities/user.entities.js";
import { injectable } from "inversify";

@injectable()
export default class UserMapper implements IUserMapper{

    toResponse(entity: User) {
        return new UserDto({
            id: entity.id,
            email: entity.email,
            avatar: entity.avatar,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    }

    toDomain(dto: UserDto): User {
        return new User({
            id: dto.id,
            email: dto.email,
            password: null,
            avatar: dto.avatar,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }

}