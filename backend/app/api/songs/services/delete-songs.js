const { songsDao: { deleteSongsById } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { params: { id } } = req;
  try {
    await deleteSongsById(id);
    resp.status(200).send(messages('deleteSongsById'));
  } catch (error) {
    console.log('Error in delete songs Service ', error);
    next(error);
  }
};
