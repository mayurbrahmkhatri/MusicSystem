module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: 4,
      },
    },
    contact_num: {
      type: Sequelize.BIGINT,
      validate: {
        isInt: true,
      },
    },
    profile_pic: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return User;
};
