const { userPlaylistDao: { updateUserPlaylistByPlaylistName } } = require('../../../commons/db/dao');

module.exports = async (req, resp, next) => {
  try {
    const { playlist_name } = req.params;
    const { userName, playlistName } = req.body;

    // eslint-disable-next-line max-len
    const userPlaylists = await updateUserPlaylistByPlaylistName(playlist_name, userName, playlistName);
    const answer = {
      data: userPlaylists,
      statusCode: 200,
      msg: 'user playlists fetched successfully..',
    };
    resp.send(answer);
    if (resp.status === 200) {
      console.log('resp', resp);
    }
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
