const { songsDao: { getSongsById } } = require('../../../commons/db/dao');
// const logger = require('../../../logger');
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
    const response = await getSongsById(id);
    const answer = {
      data: response,
      msg: messages('getSongsById'),
      status_code: 200,
    };

    resp.status(200).json(answer);
  } catch (error) {
    console.log('Error in get songs Service ', error);
    next(error);
  }
};
