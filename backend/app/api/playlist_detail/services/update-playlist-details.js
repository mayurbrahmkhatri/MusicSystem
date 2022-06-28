const { playlistDetailsDao: { updatePlaylistDetails } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');

/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { body: { is_active } } = req;
  const { params: { playlist_id } } = req;
  const data = {
    is_active,
  };
  try {
    await updatePlaylistDetails(playlist_id, data);
    const answer = {
      msg: messages('playlistDetailsUpdatedMessage'),
      status_code: 200,
    };

    resp.status(200).send(answer);
  } catch (error) {
    console.log('Error in Update playlist Details Service ', error);
    next(error);
  }
};
