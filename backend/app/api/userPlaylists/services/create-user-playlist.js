/* eslint-disable radix */
/* eslint-disable no-unused-vars */
const { userPlaylistDao: { createUserPlaylist, getUserPlaylistsByPlaylistName } } = require('../../../commons/db/dao');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  const { body: { userName, playlistName } } = req;

  const data = {
    user_name: userName,
    playlist_name: playlistName,
  };
  console.log(data);

  try {
    const userPlaylist = await getUserPlaylistsByPlaylistName(data.playlist_name, data.user_name);
    if (userPlaylist) {
      const response2 = {
        msg: 'user playlist already exists',
        statusCode: 422,
      };
      resp.send(response2);
    } else {
      const answer = await createUserPlaylist(data);
      const respone = {
        data: answer,
        statusCode: 200,
        msg: 'user created successfully',
      };
      console.log(respone.statusCode);
      resp.send(respone);
    }
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
