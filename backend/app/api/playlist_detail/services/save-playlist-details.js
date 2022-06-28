const { playlistDetailsDao: { savePlaylistDetails } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { body: { playlist_id, song_id } } = req;
  const data = {
    playlist_id,
    song_id,
    is_active: 1,
  };
  try {
    await savePlaylistDetails(data);
    const answer = {
      msg: messages('playlistDetailsSavedMessage'),
      status_code: 200,
    };
    resp.status(200).send(answer);
  } catch (error) {
    console.log('Error in Save playlist Service ', error);
    next(error);
  }
};
