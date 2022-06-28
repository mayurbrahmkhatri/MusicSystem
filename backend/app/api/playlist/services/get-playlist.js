/* eslint-disable radix */
const { playlistDao: { getPlaylist } } = require('../../../commons/db/dao');
// const logger = require('../../../logger');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  try {
    const pageAsNumber = Number.parseInt(req.query.page);
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    const response = await getPlaylist(page);

    const ans = {
      data: response,
      msg: messages('getPlaylist'),
      status_code: 200,
    };
    resp.status(200).json(ans);
  } catch (error) {
    console.log('Error in Save Playlist Service ', error);
    next(error);
  }
};
