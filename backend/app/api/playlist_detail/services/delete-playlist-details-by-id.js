const { playlistDetailsDao: { deletePlaylistDetailsById } } = require('../../../commons/db/dao');
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
    await deletePlaylistDetailsById(id);
    resp.status(200).send(messages('deletePlaylistById'));
  } catch (error) {
    console.log('Error in delete playlist Service ', error);
    next(error);
  }
};
