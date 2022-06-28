/* eslint-disable radix */
/* eslint-disable no-unused-vars */
const { userDao: { createUser, getUserByName } } = require('../../../commons/db/dao');
const { utill: { hashingPassword } } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */


module.exports = async (req, resp, next) => {
  const { body: { userName, firstName, lastName, email, password, contactNum } } = req;
  const phoneNum = parseInt(contactNum);
  const data = {
    user_name: userName,
    first_name: firstName,
    last_name: lastName,
    email,
    password: hashingPassword(password),
    contact_num: phoneNum,
  };
  console.log(data);

  try {
    const user = await getUserByName(data.user_name);
    if (user) {
      const response2 = {
        msg: 'user already exists',
        statusCode: 422,
      };
      resp.send(response2);
    } else {
      const answer = await createUser(data);
      const respone = {
        data: answer,
        statusCode: 200,
        msg: 'user created successfully',
      };
      console.log(respone.statusCode);
      resp.send(respone);
    }
  } catch (error) {
    console.log('Error while creating user ', error);
    next(error);
  }
};
