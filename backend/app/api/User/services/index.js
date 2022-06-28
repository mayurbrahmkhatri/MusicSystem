const createUser = require('./create-user');
const getUserById = require('./get-user-by-id');
const getUsers = require('./get-users');
const deleteUser = require('./delete-user');
const updateUser = require('./update-user');
const userLogin = require('./user-login');

module.exports = {
  createUser, getUsers, getUserById, deleteUser, updateUser, userLogin,
};
