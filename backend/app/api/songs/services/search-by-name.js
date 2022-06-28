const { songsDao: { searchSongs } } = require('../../../commons/db/dao');
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
    const data = await searchSongs(term);

    const ans = {
      data,
      msg: messages('searchSongs'),
      status_code: 200,
    };
    resp.status(200).send(ans);
  } catch (error) {
    console.log('Error in Search Songs Service ', error);
    next(error);
  }
};
