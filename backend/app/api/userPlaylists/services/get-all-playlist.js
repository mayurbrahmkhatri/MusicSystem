/* eslint-disable radix */
/* eslint-disable no-unused-vars */
const res = require('express/lib/response');
const { userPlaylistDao: { getUserPlaylists } } = require('../../../commons/db/dao');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  try {
    const userPlaylists = await getUserPlaylists();
    const answer = {
      data: userPlaylists,
      statusCode: 200,
      msg: 'user playlists fetched successfully..',
    };
    resp.send(answer);
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
