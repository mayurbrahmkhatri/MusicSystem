
const { db: { userFav, Sequelize, sequelize } } = require('../');
const { db: { songs } } = require('../');

const { Op } = Sequelize;


/**
 * Insert/Save Songs
 *
 * @param {*} data
 */


exports.createUserFav = async (data) => {
  try {
    return await userFav.create(data).then(response => response).catch(err => err);
  } catch (error) {
    console.log('Error in creating favourite', error);
    throw error;
  }
};


exports.getAllUserFav = async (user_name) => {
  try {
    const getSongId = await userFav.findAll({ where: { user_name } });
    const getSongsIdArray = [];
    getSongId.map(val => getSongsIdArray.push(val.song_id));
    const getSongsbySongId = await songs.findAll({
      where: {
        id: {
          [Op.in]: getSongsIdArray,
        },
      },
    });
    console.log('data--->', getSongsbySongId);
    return getSongsbySongId;
  } catch (error) {
    console.log('Error while getting user favourite list', error);
    return error;
  }
};

exports.checkUserFavExists = async (user_name, song_id) => {
  try {
    return await userFav.findAll({
      where: { user_name, song_id },
      raw: true,
    });
  } catch (error) {
    console.log('Error while getting user favourite song', error);
    return error;
  }
};

exports.getUserFavById = async (user_name, song_id) => {
  try {
    return await userFav.findAll({
      where: { user_name, song_id },
      raw: true,
    });
  } catch (error) {
    console.log('Error while getting user favourite song', error);
    return error;
  }
};

exports.removeUserFav = async (user_name, song_id) => {
  try {
    return await userFav.destroy({
      where: { user_name, song_id },
    });
  } catch (error) {
    console.log('Error while removing song from favourits', error);
    return error;
  }
};

exports.getLikedSongs = async (number, userName) => {
  try {
    const data = await sequelize.query(`select * from user_favorites where user_name='${userName}'`);
    if (data && data.length && data[0].length) {
      return data[0];
    }
    return [];
  } catch (error) {
    console.log('Error While Getting liked songs', error);
    return error;
  }
};
