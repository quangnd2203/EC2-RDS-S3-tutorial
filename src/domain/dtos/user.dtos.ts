export default class UserDto {
    id: string;
    email: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({
        id,
        email,
        avatar,
        createdAt,
        updatedAt,
    }: {
        id: string;
        email: string;
        avatar?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = id;
        this.email = email;
        this.avatar = avatar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}