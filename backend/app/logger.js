const config = require('./config');
// eslint-disable-next-line import/extensions
const { name } = require('../package');
const logger = require('./commons/util/logger');

module.exports = logger(name, config);
