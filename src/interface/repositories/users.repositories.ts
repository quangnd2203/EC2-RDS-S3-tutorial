import UserDto from "src/domain/dtos/user.dtos.js"
import UserCreateDto from "src/domain/dtos/user_create.dtos.js"
import UserUpdateDto from "src/domain/dtos/user_update.dtos.js"
import User from "src/domain/entities/user.entities.js"

export default interface IUsersRepository {
    create(request: UserCreateDto): Promise<User>
    read(request: UserDto): Promise<User[]>
    update(request: UserUpdateDto): Promise<User>
    delete(request: UserDto): Promise<boolean>
}