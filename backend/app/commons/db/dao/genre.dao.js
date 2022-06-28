const { db: { genre } } = require('../');
const logger = require('../../../logger');

/**
 * Insert/Save Genre
 *
 * @param {*} data
 */
exports.saveGenre = async (data) => {
  try {
    return genre.create(data).then(response => response).catch(err => err);
  } catch (error) {
    logger.log('Error in Save Genre ', error);
    throw error;
  }
};

exports.updateGenre = async (id, data) => {
  try {
    return genre.update(data, {
      where: { id },
    }).then(response => response).catch(err => err);
  } catch (error) {
    logger.log('Error in Update Genre ', error);
    throw error;
  }
};

exports.getGenre = async () => {
  try {
    return await genre.findAll({ raw: true });
  } catch (error) {
    logger.log('Error in get Genre', error);
    return error;
  }
};

exports.getGenreById = async (id) => {
  try {
    return await genre.findAll({
      where: { id },
      raw: true });
  } catch (error) {
    logger.log('Error in get Genre', error);
    return error;
  }
};

exports.deleteGenreById = async (id) => {
  try {
    return await genre.destroy({
      where: { id },
    });
  } catch (error) {
    console.log('Error in delete genre', error);
    return error;
  }
};
