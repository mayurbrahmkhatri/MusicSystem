const { genreDao: { deleteGenreById } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { params: { genreId } } = req;
  try {
    await deleteGenreById(genreId);
    resp.status(200).send(messages('deleteGenreById'));
  } catch (error) {
    console.log('Error in delete genre Service ', error);
    next(error);
  }
};
