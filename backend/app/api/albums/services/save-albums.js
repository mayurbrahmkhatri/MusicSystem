const { albumsDao: { saveAlbums, updateAlbums } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async function optinalFunction(req, resp, next) {
  try {
    const { body: { album_name }, params: { id } } = req;
    const path = (req.file.path && req.file.path.indexOf('assets') > -1) ?
      req.file.path.replace('assets/', '') : req.file.path;
    const data = {
      album_name,
      path,
    };
    const response = {
      msg: messages('AlbumSavedMessage'),
      status_code: 200,
    };
    if (id) {
      await updateAlbums(id, data);
      response.msg = messages('albumUpdated');
    } else {
      response.data = await saveAlbums(data);
    }
    resp.status(200).send(response);
  } catch (error) {
    console.log('Error While Saving Album ', error);
    next(error);
  }
};
