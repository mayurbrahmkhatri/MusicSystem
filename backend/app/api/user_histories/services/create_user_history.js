const { userHistoryDao: { createUserHistory } } = require('../../../commons/db/dao');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  const { user_name, song_id } = req.params;
  const data = {
    user_name, song_id,
  };

  try {
    await createUserHistory(data);
    resp.send(data);
  } catch (error) {
    console.log('Error while creating user history ', error);
    next(error);
  }
};
