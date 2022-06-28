const { userDao: { getUserByName } } = require('../../../commons/db/dao');
const { utill: { checkPassword } } = require('../../../commons/util');

module.exports = async (req, resp, next) => {
  try {
    const { body: { username, password } } = req;
    const respone = {
      msg: '',
      statusCode: 200,
    };
    const data = await getUserByName(username);
    if (data) {
      if (data.user_name === username && checkPassword(password, data.password)) {
        respone.msg = 'Login Successfully';
        resp.send(respone);
      } else {
        respone.statusCode = 400;
        respone.msg = 'Invalid Credentials';
        resp.send(respone);
      }
    } else {
      respone.statusCode = 404;
      respone.msg = 'No User Found';
      resp.send(respone);
    }
  } catch (error) {
    console.log('Error While Login ', error);
    next(error);
  }
};
