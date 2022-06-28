const { albumDetailsDao: { saveAlbumDetails, updateAlbumDetails } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async function optinalFunction(req, resp, next) {
  const { id } = req.params;
  const { body: { album_id, song_id } } = req;
  const data = {
    album_id,
    song_id,
    isActive: 1,
  };
  const answer = {
    msg: messages('albumDetailSavedMessage'),
    status_code: 200,
  };
  try {
    if (id) {
      await updateAlbumDetails(id, data);
      answer.msg = messages('albumDetailssUpdated');
    } else {
      const response = await saveAlbumDetails(data);
      answer.data = response;
    }
    resp.status(200).send(answer);
  } catch (error) {
    console.log('Error in Save Songs Service ', error);
    next(error);
  }
};
