const { playlistDao: { getPlaylistById } } = require('../../../commons/db/dao');
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
    const response = await getPlaylistById(id);
    const answer = {
      data: response,
      msg: messages('getPlaylistById'),
      status_code: 200,
    };

    resp.status(200).json(answer);
  } catch (error) {
    console.log('Error in Save playlist Service ', error);
    next(error);
  }
};
