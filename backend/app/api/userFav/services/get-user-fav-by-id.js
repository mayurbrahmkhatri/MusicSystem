const { userFav: { getUserFavById } } = require('../../../commons/db/dao');

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
    const response = await getUserFavById(user_name, song_id);
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
