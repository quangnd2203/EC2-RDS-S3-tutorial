import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/domain/config/database.config.js';
import User from 'src/domain/entities/user.entities.js';

// Định nghĩa class Model cho User với TypeScript
class UserModel extends Model<User> implements User {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;

}

// Định nghĩa bảng User
UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);


(async () => {
  await UserModel.sync({ alter: true });
  console.log('User table synced successfully.');
})();

export default UserModel;
