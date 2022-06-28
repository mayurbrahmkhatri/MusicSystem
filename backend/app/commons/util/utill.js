const bcrypt = require('bcrypt');

const hashingPassword = password => bcrypt.hashSync(password, 10);

const checkPassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

module.exports = {
  hashingPassword,
  checkPassword,
};
