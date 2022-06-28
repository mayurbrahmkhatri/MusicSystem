
module.exports = (sequelize, Sequelize) => {
  const Songs = sequelize.define('songs', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    song_name: {
      type: Sequelize.STRING,
    },
    movie_name: {
      type: Sequelize.STRING,
    },
    artist_name: {
      type: Sequelize.STRING,
    },
    path: {
      type: Sequelize.STRING,
    },
    img_path: {
      type: Sequelize.STRING,
    },
    
    song_duration: {
      type:Sequelize.STRING,
    },
    genre_id: {
      type: Sequelize.INTEGER,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      default: true,
    },
    video_path: {
      type: Sequelize.STRING,
    },
  });
  return Songs;
}
