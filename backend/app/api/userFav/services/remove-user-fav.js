const { userFav: { removeUserFav } } = require('../../../commons/db/dao');


/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */

module.exports = async (req, resp, next) => {
  const { user_name, song_id } = req.params;
  try {
    await removeUserFav(user_name, song_id);
    resp.status(200).send('Removed song from favourites');
  } catch (error) {
    console.log('Error in removing song from favourite ', error);
    next(error);
  }
};
