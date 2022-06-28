module.exports = (sequlize, Sequelize) => {
  const userFav = sequlize.define('user_favorites', {
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
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return userFav;
};
