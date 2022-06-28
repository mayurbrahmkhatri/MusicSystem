const { playlistDao: { savePlaylist, updatePlaylist } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');

/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async function optinalFunction(req, resp, next) {
  try {
    const { body: { playlist_name }, params: { id } } = req;
    console.log('hello', req.file);
    const response = {
      msg: messages('playlistUpdatedMessage'),
      status_code: 200,
    };
    const path = (req.file.path && req.file.path.indexOf('assets') > -1) ?
      req.file.path.replace('assets/', '') : req.file.path;
    const data = {
      playlist_name,
      path,
      user_name: 'admin',
      is_private: 1,
    };
    if (id) {
      await updatePlaylist(id, data);
    } else {
      response.data = await savePlaylist(data);
      response.msg = messages('PlaylistSavedMessage');
    }
    resp.status(200).send(response);
  } catch (error) {
    console.log('Error while Save playlist ', error);
    next(error);
  }
};
