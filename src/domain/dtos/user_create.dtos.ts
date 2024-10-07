export default class UserCreateDto {
    id: string;
    email: string;
    password: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({
        id,
        email,
        password,
        avatar,
        createdAt,
        updatedAt,
    }: {
        id: string;
        email: string;
        password: string;
        avatar?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}