const { db: { playlist, sequelize } } = require('../');
const Sequelize = require('sequelize');

const { Op } = Sequelize;


/**
 * Insert/Save playlist
 *
 * @param {*} data
 */
exports.savePlaylist = async (data) => {
  try {
    return await playlist.create(data);
  } catch (error) {
    console.log('Error in Save playlist ', error);
    return error;
  }
};

exports.getPlaylist = async (page) => {
  try {
    const data = await playlist.findAndCountAll({ raw: true, limit: 20, offset: page * 20 });

    return data;
  } catch (error) {
    console.log('Error in get playlist', error);
    return error;
  }
};

exports.getPlaylistById = async (id) => {
  try {
    return await playlist.findAll({
      where: { id },
      raw: true });
  } catch (error) {
    console.log('Error in get playlist', error);
    return error;
  }
};

exports.updatePlaylist = async (id, data) => {
  try {
    return await playlist.update(data, {
      where: { id },
    });
  } catch (error) {
    console.log('Error in Update playlist ', error);
    throw error;
  }
};

exports.deletePlaylistById = async (id) => {
  try {
    return await playlist.destroy({
      where: { id },
    });
  } catch (error) {
    console.log('Error in delete playlist', error);
    return error;
  }
};

exports.searchPlaylist = async (term) => {
  try {
    const data = await playlist.findAll({ where: { playlist_name: { [Op.iLike]: `%${term}%` } } });
    return data;
  } catch (error) {
    console.log('Error in delete playlist', error);
    return error;
  }
};

exports.getTopPlaylist = async (numberOfPlaylist) => {
  try {
    const data = await sequelize.query(`select * from playlists order by id desc limit ${numberOfPlaylist}`);
    if (data && data.length && data[0].length) {
      return data[0];
    }
    return [];
  } catch (error) {
    console.log('Error While Getting TopPlaylists', error);
    return error;
  }
};
