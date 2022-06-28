/* eslint-disable radix */
/* eslint-disable no-unused-vars */
const res = require('express/lib/response');
const { userPlaylistDao: { getUserPlaylistsByUserName } } = require('../../../commons/db/dao');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  try {
    const { user_name } = req.params;
    console.log('username ->', user_name);
    const userPlaylists = await getUserPlaylistsByUserName(user_name);
    const answer = {
      data: userPlaylists,
      statusCode: 200,
      msg: 'user playlists fetched successfully..',
    };
    resp.send(answer);
    if (res.status === 200) {
      console.log(res);
    } else {
      console.log('something went wrong');
    }
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
