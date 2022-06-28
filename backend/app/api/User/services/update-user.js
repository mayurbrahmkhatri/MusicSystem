const { userDao: { updateUser } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { body: { user_name, first_name, last_name,
    email, password, contact_num, profile_pic } } = req;
  const data = {
    user_name,
    first_name,
    last_name,
    email,
    password,
    contact_num,
    profile_pic,
  };
  try {
    await updateUser(data);
    resp.status(200).send(messages('upateUserMessage'));
  } catch (error) {
    logger.log('Error in Update playlist Service ', error);
    next(error);
  }
};
