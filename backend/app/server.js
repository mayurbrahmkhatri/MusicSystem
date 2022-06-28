const express = require('express');
const apiLogger = require('express-bunyan-logger');
const restServer = require('./commons/apiserver');
const { internalError } = require('./commons/util/response-format/format');
const logger = require('./logger');
const routes = require('./route');
const config = require('./config');
const path = require('path');


const { port, uri } = config;
const name = 'Media Player App';
/**
 * Middleware for handle restful API error
 *
 * @param  {Object} error - Error instance
 * @param  {Object} req - Requests
 * @param  {Object} res - Response
 * @param  {Object} next - Next
 */
const errorHandler = (error, req, res, next) => {
  logger.error(error, `${error.message}`);
  if (error.message) {
    error.code = res.status;
  } else if (error.name && !error.message) {
    error.message = error.name;
  }
  res.body = error;
  internalError(req, res, error);
  next();
};

const server = restServer(
  {
    name,
    uri,
  },
  logger,
);

// Setup request logger
server.use(apiLogger({
  name: 'RequestLog',
  streams: [
    {
      level: 'debug',
      stream: process.stdout,
    },
  ],
}));

server.use(express.static(path.resolve(__dirname, '../assets')));
/**
  *
  * @returns {Promise.<void>}
  */
const startServer = async () => {
  routes(server);
  server.use(errorHandler);
  server.listen(port, () => logger.info(name, { port }));
};

module.exports = { server, startServer, errorHandler };
if (require.main === module) {
  startServer().catch(err => logger.error(err, 'There was a problem starting the server'));
}
