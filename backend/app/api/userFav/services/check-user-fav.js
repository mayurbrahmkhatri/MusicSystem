// const { userFav: { getUserFavById } } = require('../../../commons/db/dao');
const { checkUserFavExists } = require('../../../commons/db/dao/user-fav.dao');

/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */

// eslint-disable-next-line no-unused-vars
module.exports = async (req, resp, next) => {
  const { params: { user_name, song_id } } = req;
  try {
    const response = await checkUserFavExists(user_name, song_id);
    const answer = {
      data: response,
      msg: 'Exists',
      status_code: 200,
    };
    resp.status(200).send(answer);
  } catch (error) {
    console.log(error);
  }
};
