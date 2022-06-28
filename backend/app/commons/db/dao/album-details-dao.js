/* eslint-disable camelcase */
const { db: { album_details, songs } } = require('../');

const Sequelize = require('sequelize');

const { Op } = Sequelize;

/**
 * Insert/Save Albums_album_details
 *
 * @param {*} data
 */
exports.saveAlbumDetails = async (data) => {
  try {
    return album_details.create(data).then(res => res).catch(err => err);
  } catch (error) {
    console.log('Error in Save Albums_album_details ', error);
    throw error;
  }
};

// eslint-disable-next-line consistent-return
exports.updateAlbumDetails = async (id, data) => {
  try {
    await album_details.update(data, { where: { album_id: id } });
  } catch (error) {
    console.log('Error in delete album_details', error);
    return error;
  }
};

exports.getAlbumDetailsById = async (id) => {
  try {
    const viewTotalSongsOfAlbumByAlbumId = await album_details.findAll({
      where: { album_id: id },
    });
    const getSongsIdArray = [];
    viewTotalSongsOfAlbumByAlbumId.map(val => getSongsIdArray.push(val.song_id));
    const getSongsbySongId = await songs.findAll({
      where: {
        id: {
          [Op.in]: getSongsIdArray,
        },
      },
    });
    return getSongsbySongId;
  } catch (error) {
    console.log('Error in get album details', error);
    return error;
  }
};

exports.getAlbumDetails = async () => {
  try {
    return await album_details.findAll({ raw: true });
  } catch (error) {
    console.log('Error in get album_details', error);
    return error;
  }
};

exports.deleteAlbumDetailsById = async (id) => {
  try {
    return await album_details.destroy({ where: { album_id: id } });
  } catch (error) {
    console.log('Error in delete album_details', error);
    return error;
  }
};
