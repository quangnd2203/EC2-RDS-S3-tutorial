import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/domain/config/database.config.js';
import User from 'src/domain/entities/user.entities.js';

class UserModel extends Model<User> implements User {
  id: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
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
  await UserModel.sync({ alter: true });
  console.log('User table synced successfully.');
})();

export default UserModel;
