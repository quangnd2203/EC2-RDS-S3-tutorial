import User from "../entities/user.entities.js";
import { injectable } from "inversify";
import IUserUpdateMapper from "src/interface/mappers/user_update.mappers.js";
import UserUpdateDto from "../dtos/user_update.dtos.js";

@injectable()
export default class UserUpdateMapper implements IUserUpdateMapper{

    toResponse(entity: User) {
        return new UserUpdateDto({
            id: entity.id,
            refreshToken: entity.refreshToken,
            email: entity.email,
            avatar: entity.avatar,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        });
    }

    toDomain(dto: UserUpdateDto): User {
        return new User({
            id: dto.id,
            firebaseId: null,
            type: null,
            refreshToken: dto.refreshToken,
            email: dto.email,
            avatar: dto.avatar,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt,
        });
    }

}