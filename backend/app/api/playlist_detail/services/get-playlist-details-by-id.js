const { playlistDetailsDao: { getPlaylistDetailsById } } = require('../../../commons/db/dao');
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
    const response = await getPlaylistDetailsById(id);
    
    const answer = {
      data: response,
      msg: messages('getPlaylistDetailsById'),
      status_code: 200,
    };
    console.log(answer);
    resp.status(200).json(answer);
  } catch (error) {
    console.log('Error in Save playlist Details Service ', error);
    next(error);
  }
};





