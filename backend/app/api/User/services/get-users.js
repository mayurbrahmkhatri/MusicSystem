const { userDao: { getUsers } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  try {
    const userData = await getUsers();
    resp.status(200).send(userData);
  } catch (error) {
    logger.log('Error while showing users ', error);
    next(next);
  }
};
