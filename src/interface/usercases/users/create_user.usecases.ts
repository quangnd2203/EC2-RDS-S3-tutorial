import CreateUserDto from "src/domain/dtos/user_create.dtos.js";
import User from "src/domain/entities/user.entities.js";

export default interface ICreateUserUseCases {
    execute(request: CreateUserDto): Promise<User>;
}