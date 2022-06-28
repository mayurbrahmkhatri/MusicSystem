const { songsDao: { getSongs } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');

/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  try {
    const page = (req.query.page) ? Number.parseInt(req.query.page, 10) : 0;
    const response = await getSongs(page);
    const ans = {
      data: response,
      msg: messages('getSongs'),
      status_code: 200,
    };
    resp.status(200).json(ans);
  } catch (error) {
    console.log('Error in Save Songs Service ', error);
    next(error);
  }
};
