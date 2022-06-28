// const { playlistDao: { updatePlaylist } } = require('../../../commons/db/dao');
// const logger = require('../../../logger');
// const { messages } = require('../../../commons/util');
// /**
//  *
//  * @param {*} req
//  * @param {*} resp
//  * @param {*} next
//  */
// module.exports = async (req, resp, next) => {
//   const { body: { playlist_name, is_private } } = req;
//   const { params: { playlist_id } } = req;
//   const data = {
//     playlist_name,
//     is_private,
//   };
//   try {
//     await updatePlaylist(playlist_id,data);
//     const answer = {
//       msg: messages('playlistUpdatedMessage'),
//       status_code: 200,
//     };

//     resp.status(200).send(answer);
//   } catch (error) {
//     logger.log('Error in Update playlist Service ', error);
//     next(error);
//   }
// };
