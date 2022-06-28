const { albumDetailsDao: { getAlbumDetails } } = require('../../../commons/db/dao');
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
    const response = await getAlbumDetails();

    const ans = {
      data: response,
      msg: messages('getAlbumDetailss'),
      status_code: 200,
    };
    resp.status(200).json(ans);
  } catch (error) {
    logger.log('Error in Save Songs Service ', error);
    next(error);
  }
};
