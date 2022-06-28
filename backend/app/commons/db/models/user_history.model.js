module.exports = (sequelize, Sequelize) => {
  const userHistory = sequelize.define('user_history', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    song_id: {
      type: Sequelize.INTEGER,
    },
    timestamp: {
      type: Sequelize.TIME,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      default: true,
    },
  });
  return userHistory;
};
