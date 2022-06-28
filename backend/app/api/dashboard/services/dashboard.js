
const { dashboardDao: { getDashboard } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */

module.exports = async (req, resp, next) => {
  try {
    const { params: { userName } } = req;
    resp.status(200).send(await getDashboard(userName));
  } catch (error) {
    logger.log('Error while showing users ', error);
    next(error);
  }
};
