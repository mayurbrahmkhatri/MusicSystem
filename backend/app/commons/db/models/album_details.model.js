module.exports = (sequelize, Sequelize) => {
  const albumsDetails = sequelize.define('album_details', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    album_id: {
      type: Sequelize.INTEGER,
    },
    song_id: {
      type: Sequelize.INTEGER,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      default: true,
    },
  });
  return albumsDetails;
};
