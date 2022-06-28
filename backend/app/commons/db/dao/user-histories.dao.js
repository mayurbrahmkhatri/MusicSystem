const { db: { user_histories, sequelize } } = require('../');
const { db: { songs } } = require('../');

const Sequelize = require('sequelize');

const { Op } = Sequelize;


/**
 *
 * @param { * } data
 */

exports.createUserHistory = async (data) => {
  try {
    return await user_histories.create(data).then(response => response).catch(err => err);
  } catch (error) {
    console.log('Error in creating history', error);
    throw error;
  }
};


exports.getUserHistory = async (user_name) => {
  try {
    const getSongId = await user_histories.findAll({ where: { user_name } });
    const getSongsIdArray = [];
    getSongId.map(val => getSongsIdArray.push(val.id));
    console.log(getSongsIdArray);
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
    console.log('Error while getting user history', error);
    return error;
  }
};

exports.getRecentlyPlayed = async (userName) => {
  try {
    const data = await sequelize.query(`select * from songs left join user_histories on songs.id  = user_histories.song_id  where user_histories.user_name = '${userName}'`);
    console.log('data--->', data);
    if (data && data.length && data[0].length) {
      return data[0];
    }
    return [];
  } catch (error) {
    console.log('Error While Getting liked songs', error);
    return error;
  }
};
