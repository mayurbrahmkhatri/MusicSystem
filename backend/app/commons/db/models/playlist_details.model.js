module.exports = (sequelize, Sequelize) => {
  const playlistDetails = sequelize.define('playlist_details', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playlist_id: {
      type: Sequelize.INTEGER,

    },
    song_id: {
      type: Sequelize.INTEGER,

    },
    is_active: {
      type: Sequelize.BOOLEAN,
    },
  });

  return playlistDetails;
};
