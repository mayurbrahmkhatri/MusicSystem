const { userDao: { getUserById } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');

/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { user_name } = req.params;
  try {
    const response = await getUserById(user_name);
    const answer = {
      data: response,
      msg: messages('getUserById'),
      status_code: 200,
    };
    resp.status(200).send(answer);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

