const { albumsDao: { getAlbums } } = require('../../../commons/db/dao');
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
    const response = await getAlbums(page);

    const ans = {
      data: response,
      msg: messages('getAlbum'),
      status_code: 200,
    };
    resp.status(200).json(ans);
  } catch (error) {
    console.log('Error in Save Songs Service ', error);
    next(error);
  }
};
