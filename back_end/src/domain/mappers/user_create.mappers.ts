import User from "../entities/user.entities.js";
import { injectable } from "inversify";
import IUserCreateMapper from "src/interface/mappers/user_create.mappers.js";
import UserCreateDto from "../dtos/user_create.dtos.js";

@injectable()
export default class UserCreateMapper implements IUserCreateMapper{

    toResponse(entity: User) {
        return new UserCreateDto({
            id: entity.id,
            firebaseId: entity.firebaseId,
            type: entity.type,
            refreshToken: entity.refreshToken,
            email: entity.email,
            avatar: entity.avatar,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    }

    toDomain(dto: UserCreateDto): User {
        return new User({
            id: dto.id,
            firebaseId: dto.firebaseId,
            type: dto.type,
            refreshToken: dto.refreshToken,
            email: dto.email,
            avatar: dto.avatar,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }

}