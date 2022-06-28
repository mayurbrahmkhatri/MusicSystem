const { db: { playlistDetails, songs } } = require('../');
const logger = require('../../../logger');
const Sequelize = require('sequelize');

const { Op } = Sequelize;
/**
 * Insert/Save playlist
 *
 * @param {*} data
 */
exports.savePlaylistDetails = async (data) => {
  try {
    return await playlistDetails.create(data);
  } catch (error) {
    console.log('Error in Save playlist_deatils ', error);
    return error;
  }
};

exports.getPlaylistDetails = async () => {
  try {
    return await playlistDetails.findAll({ raw: true });
  } catch (error) {
    logger.log('Error in get playlist details', error);
    return error;
  }
};

exports.getPlaylistDetailsById = async (id) => {
  try {
    const viewTotalSongsOfAlbumByAlbumId = await playlistDetails.findAll({
      where: { playlist_id: id },
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
    console.log('Error in get playlist details', error);
    return error;
  }
};

exports.updatePlaylistDetails = async (id, data) => {
  try {
    return await playlistDetails.update(data, {
      where: { playlist_id: id },
    });
  } catch (error) {
    console.log('Error in Update playlist ', error);
    throw error;
  }
};

exports.deletePlaylistDetailsById = async (id) => {
  try {
    return await playlistDetails.destroy({
      where: { playlist_id: id },
    });
  } catch (error) {
    console.log('Error in delete playlist', error);
    return error;
  }
};
