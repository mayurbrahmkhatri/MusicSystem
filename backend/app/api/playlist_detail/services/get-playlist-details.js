const { playlistDetailsDao: { getPlaylistDetails } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  try {
    const response = await getPlaylistDetails();
    const ans = {
      data: response,
      msg: messages('getPlaylistDetails'),
      status_code: 200,
    };
    resp.status(200).json(ans);
  } catch (error) {
    logger.log('Error in get playlist Details Service ', error);
    next(error);
  }
};

