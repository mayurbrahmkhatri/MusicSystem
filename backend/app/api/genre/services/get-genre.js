const { genreDao: { getGenre } } = require('../../../commons/db/dao');
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
    const response = await getGenre();
    const ans = {
      data: response,
      msg: messages('getGenre'),
      status_code: 200,
    };
    resp.status(200).json(ans);
  } catch (error) {
    logger.log('Error in get Genre Service ', error);
    next(error);
  }
};
