export default class UserUpdateDto {
    id: string;
    refreshToken?: string;
    name?: string;
    email?: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({
        id,
        refreshToken,
        name,
        email,
        avatar,
        createdAt,
        updatedAt,
    }: {
        id: string;
        refreshToken?: string;
        name?: string;
        email?: string;
        password?: string;
        avatar?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = id;
        this.refreshToken = refreshToken
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}