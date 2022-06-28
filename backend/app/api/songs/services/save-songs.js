const { songsDao: { saveSongs, updateSongs } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');

/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async function optinalFunction(req, resp, next) {
  try {
    const { id } = req.params;
    const { body: { song_name, movie_name, artist_name, path, video_path} } = req;
    const response = {
      msg: messages('songSavedMessage'),
      status_code: 200,
    };
    const img_path = (req.file.path && req.file.path.indexOf('assets') > -1) ?
      req.file.path.replace('assets/', '') : req.file.path;
    const data = {
      song_name,
      movie_name,
      artist_name,
      path,
      img_path,
      video_path,
      is_active: 1,
    };
    if (id) {
      await updateSongs(id, data);
      response.msg = messages('songsUpdatedMessage');
    } else {
      response.data = await saveSongs(data);
    }
    resp.status(200).send(response);
  } catch (error) {
    console.log('Error While Saving/Updating Song ', error);
    next(error);
  }
};
