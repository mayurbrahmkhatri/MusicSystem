const { db: { songs, sequelize } } = require('../');
const logger = require('../../../logger');
const Sequelize = require('sequelize');

const { Op } = Sequelize;


/**
 * Insert/Save Songs
 *
 * @param {*} data
 */
exports.saveSongs = async (data) => {
  try {
    return await songs.create(data);
  } catch (error) {
    logger.log('Error in Save Songs ', error);
    throw error;
  }
};

exports.updateSongs = async (id, data) => {
  try {
    return songs.update(data, {
      where: { id },
    }).then(response => response).catch(err => err);
  } catch (error) {
    logger.log('Error in Update Songs ', error);
    throw error;
  }
};

exports.getSongs = async (page) => {
  try {
    const data = await songs.findAndCountAll({ raw: true, limit: 20, offset: page * 20 });

    return data;
  } catch (error) {
    console.log('Error in get songs', error);
    return error;
  }
};


exports.getSongsById = async (songId) => {
  try {
    return await songs.findAll({
      where: { songId },
      raw: true });
  } catch (error) {
    logger.log('Error in get playlist', error);
    return error;
  }
};

exports.deleteSongsById = async (songId) => {
  try {
    return await songs.destroy({
      where: { songId },
    });
  } catch (error) {
    console.log('Error in delete songs', error);
    return error;
  }
};
exports.searchSongs = async (term) => {
  try {
    const data = await songs.findAll({ where: { song_name: { [Op.iLike]: `%${term}%` } } });
    return data;
  } catch (error) {
    console.log('Error in search song', error);
    return error;
  }
};

exports.searchApi = async (term) => {
  try {
    const data = await songs.query("select * from songs where songName like '$1%' or movieName like '$1%' or artistName like '$1%'", [term]);
    console.log(data);
    return data;
  } catch (error) {
    logger.log('Error in Search Songs ', error);
    throw error;
  }
};

exports.getTopSongs = async (numberOfSongs) => {
  try {
    const data = await sequelize.query(`select * from songs order by id desc limit ${numberOfSongs}`);
    if (data && data.length && data[0].length) {
      return data[0];
    }
    return [];
  } catch (error) {
    console.log('Error While Getting TopSongs', error);
    return error;
  }
};

