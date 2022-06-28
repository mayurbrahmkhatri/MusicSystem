const { genreDao: { updateGenre } } = require('../../../commons/db/dao');
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
  const { params: { genreId } } = req;
  const data = {
    genreName,
    is_active: 1,
  };
  try {
    await updateGenre(genreId, data);
    const answer = {
      msg: messages('genreUpdatedMessage'),
      status_code: 200,
    };

    resp.status(200).send(answer);
  } catch (error) {
    logger.log('Error in Update Genre Service ', error);
    next(error);
  }
};
