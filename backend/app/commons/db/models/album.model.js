module.exports = (sequelize, Sequelize) => {
  const Albums = sequelize.define('albums', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    album_name: {
      type: Sequelize.STRING,
    },
    path: {
      type: Sequelize.STRING,
    },
    genre_id: {
      type: Sequelize.INTEGER,

    },
    is_active: {
      type: Sequelize.BOOLEAN,
      default: true,
    },
  });
  return Albums;
};
