export default class UserDto {
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({
        id,
        name,
        email,
        avatar,
        createdAt,
        updatedAt,
    }: {
        id: string;
        name?: string;
        email?: string;
        avatar?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}