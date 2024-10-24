import User from "src/domain/entities/user.entities.js";
import Mapper from "./mapper.js";
import UserUpdateDto from "src/domain/dtos/user_update.dtos.js";

export default interface IUserUpdateMapper extends Mapper<User, UserUpdateDto> {
    toResponse(entity: User): UserUpdateDto;

    toDomain(dto: UserUpdateDto): User;
}