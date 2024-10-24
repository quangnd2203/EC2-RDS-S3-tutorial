import User from "src/domain/entities/user.entities.js";
import Mapper from "./mapper.js";
import UserCreateDto from "src/domain/dtos/user_create.dtos.js";

export default interface IUserCreateMapper extends Mapper<User, UserCreateDto> {
    toResponse(entity: User): UserCreateDto;

    toDomain(dto: UserCreateDto): User;
}