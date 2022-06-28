/*
 * Copyright (c) 2019 Volansys - All rights reserved.
 * This software is authored by Volansys and is Volansys intellectual
 * property, including the copyrights in all countries in the world.
 * This software is provided under a license to use only with all other rights,
 * including ownership rights, being retained by Volansys.
 * This file may not be distributed, copied, or reproduced in any manner,
 * electronic or otherwise, without the written consent of Volansys.
 * Developed By: Volansys Inc.
 */


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * Restify server with common configuration for REST Apis.
 *
 * @param {Object} opts - options for the Express server
 * @param {Object} logger
 * @returns {*|Server}
 */
const restServer = (opts, logger) => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());

  process.on('uncaughtException', (error) => {
    logger.error('Error: %s', error);
    if (error.stack) {
      logger.error(error.stack);
    }
  });

  return server;
};

module.exports = restServer;
