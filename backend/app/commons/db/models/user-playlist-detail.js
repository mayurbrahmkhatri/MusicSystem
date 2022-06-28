module.exports = (sequlize, Sequelize) => {
  const userPlaylistDetails = sequlize.define('user_playlist_details', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_playlist_id: {
      type: Sequelize.INTEGER,
    },
    song_id: {
      type: Sequelize.INTEGER,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return userPlaylistDetails;
};
