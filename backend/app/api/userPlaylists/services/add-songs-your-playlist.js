/* eslint-disable radix */
/* eslint-disable no-unused-vars */
const { userPlaylistDao: { addSongsInUserPlaylist } } = require('../../../commons/db/dao');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  const { body: { id, songId } } = req;

  const data = {
    user_playlist_id: id,
    song_id: songId,
  };
  console.log('data--->', data);

  try {
    const answer = await addSongsInUserPlaylist(data);
    console.log("'jdjkadajd", answer);
    const respone = {
      data: answer,
      statusCode: 200,
      msg: 'user created successfully',
    };
    console.log(respone.statusCode);
    resp.send(respone);
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
