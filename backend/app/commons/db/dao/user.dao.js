const { db: { users } } = require('../');


/**
 *
 * @param { * } data
 */

exports.createUser = async (data) => {
  try {
    return await users.create(data);
  } catch (error) {
    console.log('Error in creating user', error);
    throw error;
  }
};

exports.getUsers = async () => {
  try {
    return await users.findAll({ raw: true });
  } catch (error) {
    console.log('Error while getting all users', error);
    return error;
  }
};

exports.getUserByName = async (user_name) => {
  try {
    return await users.findOne({
      where: { user_name },
      raw: true }).then(response => response).catch(err => err);
  } catch (error) {
    console.log('Error while getting user with id', error);
    return error;
  }
};

exports.updateUser = async (user_name, data) => {
  try {
    return await users.update(data, {
      where: { user_name },
    });
  } catch (error) {
    console.log('Error while updateing user information', error);
    throw error;
  }
};

exports.deleteUser = async (user_name) => {
  try {
    return await users.destroy({
      where: { user_name },
    });
  } catch (error) {
    console.log('Error while deleting user', error);
    throw error;
  }
};
