module.exports = (sequlize, Sequelize) => {
  const userPlaylists = sequlize.define('user_playlists', {
    user_playlist_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    playlist_name: {
      type: Sequelize.STRING,
    },
    is_active: {
      type: Sequelize.BOOLEAN,

    },
  });
  return userPlaylists;
};
