export default class UserCreateDto {
    id: string;
    firebaseId: string;
    type: string;
    refreshToken?: string;
    name?: string;
    email?: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({
        id,
        firebaseId,
        type,
        refreshToken,
        name,
        email,
        avatar,
        createdAt,
        updatedAt,
    }: {
        id: string;
        firebaseId: string;
        type: string;
        refreshToken?: string;
        name?: string;
        email?: string;
        password?: string;
        avatar?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = id;
        this.firebaseId = firebaseId;
        this.type = type;
        this.refreshToken = refreshToken
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}