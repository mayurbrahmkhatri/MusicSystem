const { albumDetailsDao: { getAlbumDetailsById } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { id } = req.params;
  try {
    const response = await getAlbumDetailsById(id);
    const answer = {
      data: response,
      msg: messages('getAlbumDetailssById'),
      status_code: 200,
    };
    resp.status(200).send(answer);
  } catch (error) {
    logger.log('Error in Save Songs Service ', error);
    next(error);
  }
};
