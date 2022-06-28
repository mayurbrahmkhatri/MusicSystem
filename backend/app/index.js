
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const logger = require('./logger');
const server = require('./server');
const { db } = require('./commons/db');

db.sequelize.sync();
server.startServer();
module.exports = server;
// PM2 will restart the server in production
if (process.env.NODE_ENV === 'production') {
  process.on('uncaughtException', (err) => {
    logger.error(`\n\nUncaught Exception thrown! Exiting with status 1...\n\n${err}`);
    process.exit(1);
  });
}
