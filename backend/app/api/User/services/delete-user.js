const { userDao: { deleteUser } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');


/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */

module.exports = async (req, resp, next) => {
  const { params: { user_name } } = req;
  try {
    await deleteUser(user_name);
    resp.status(200).send(messages('deleteUser'));
  } catch (error) {
    console.log('Error in deleting user ', error);
    next(error);
  }
};
