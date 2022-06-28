module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define('genre', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    genre_name: {
      type: Sequelize.STRING,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Genre;
};

