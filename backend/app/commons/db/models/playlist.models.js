module.exports = (sequelize, Sequelize) => {
  const playlist = sequelize.define('playlist', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playlist_name: {
      type: Sequelize.STRING,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    path: {
      type: Sequelize.STRING,
    },
    is_private: {
      type: Sequelize.STRING,
      default: true,
    },
  });

  return playlist;
};

