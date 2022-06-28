const { genreDao: { saveGenre } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { body: { genreName } } = req;
  const data = {
    genreName,
    is_active: 1,
  };
  try {
    await saveGenre(data);
    const answer = {
      data,
      msg: messages('genreSavedMessage'),
      status_code: resp.status,
    };
    resp.status(200).send(answer);
  } catch (error) {
    logger.log('Error in Save Genre Service ', error);
    next(error);
  }
};
