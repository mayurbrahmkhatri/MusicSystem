/* eslint-disable no-unused-vars */
const { db: { albums, sequelize } } = require('../');
const logger = require('../../../logger');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

/**
 * Insert/Save Albums
 *
 * @param {*} data
 */
exports.saveAlbums = async (data) => {
  try {
    console.log(data);
    return albums.create(data).then(res => res).catch(err => err);
  } catch (error) {
    logger.log('Error in Save Albums ', error);
    throw error;
  }
};

exports.updateAlbums = async (id, data) => {
  try {
    await albums.update(data, { where: { id } });
  } catch (error) {
    logger.log('Error in delete albums', error);
    return error;
  }
};

exports.getAlbumById = async (id) => {
  try {
    return albums.findOne({ where: { id } }).then(response => response).catch(err => err);
  } catch (error) {
    logger.log('Error in get album by id', error);
    return error;
  }
};
exports.getAlbums = async (page) => {
  try {
    const data = await albums.findAndCountAll({ raw: true, limit: 20, offset: page * 20 });
    return data;


  } catch (error) {
    conso
    
    
    
    le.log('Error in get albums', error);
    return error;
  }
};
    
exports.deleteById = async (id) => {
  try {
    return await albums.destroy({ where: { id } });
  } catch (error) {
    logger.log('Error in delete albums', error);
    return error;
  }
};

exports.searchAlbum = async (term) => {
  try {
    const data = await albums.findAll({ where: { album_name: { [Op.iLike]: `%${term}%` } } });
    return data;
  } catch (error) {
    logger.log('Error in delete albums', error);
    return error;
  }
};

exports.getTopAlbums = async (numberOfAlbum) => {
  try {
    const data = await sequelize.query(`select * from albums order by id desc limit ${numberOfAlbum}`);
    if (data && data.length && data[0].length) {
      return data[0];
    }
    return [];
  } catch (error) {
    console.log('Error While Getting TopPlaylists', error);
    return error;
  }
};
