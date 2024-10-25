import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from 'src/common/config/database.config.js';
import User from 'src/domain/entities/user.entities.js';

class UserModel extends Model<User> implements User {
    id: string;
    firebaseId: string;
    type: string;
    refreshToken?: string;
    name?: string;
    email: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

UserModel.init(
    {
        id: {
            type: DataTypes.STRING(36),
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        firebaseId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'firebaseId',
        },
        type: {
            type: DataTypes.ENUM('google', 'facebook'),
            allowNull: false,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true,
    }
);


(async () => {
    await UserModel.sync({alter: true});
    console.log('User table synced successfully.');
})();

export default UserModel;
