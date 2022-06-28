
const { userPlaylistDao: { deleteUserPlaylistByPlaylistName } } = require('../../../commons/db/dao');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  try {
    const { playlist_name } = req.params;
    const { userName } = req.body;
    const userPlaylists = await deleteUserPlaylistByPlaylistName(playlist_name, userName);
    const answer = {
      records_deleted: userPlaylists,
      statusCode: 200,
      msg: 'user playlists fetched successfully..',
    };
    resp.send(answer);
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
