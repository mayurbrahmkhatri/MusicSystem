const { albumsDao: { searchAlbum } } = require('../../../commons/db/dao');
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
    const term = req.params.name;
    const data = await searchAlbum(term);

    const ans = {
      data,
      msg: messages('ThisIsTheWay'),
      status_code: 200,
    };
    resp.status(200).send(ans);
  } catch (error) {
    logger.log('Error in Save Songs Service ', error);
    next(error);
  }
};
