const pack = require('../package');
const Git = require('nodegit');
const fs = require('fs');
const path = require('path');
const logger = require('../app/logger');

const repoPath = path.resolve(__dirname, '../../');

/**
 * Genearte build.json file on given path and JSON data.
 *
 * @param {Object} data - JSON data.
 */
const writeJsonToFile = (data) => {
  let arg;
  if (process.argv[2] && process.argv[2] !== null && process.argv[2] !== '') {
    arg = `${process.argv[2]}/build.json`;
  } else {
    arg = '../app/build.json';
  }

  fs.writeFileSync(arg, JSON.stringify(data));
};

/**
 * Fetch Repository details from .git folder.
 *
 * @param {string} rPath - Path to repository (.git folder).
 */
const generateBuild = async (rPath) => {
  try {
    const repository = await Git.Repository.open(rPath);
    const commit = await repository.getHeadCommit();
    const commitDate = await commit.date();
    const hash = await commit.sha();
    const json = {
      gitCommit: hash,
      appVersion: pack.version,
      date: commitDate,
    };
    writeJsonToFile(json);
  } catch (error) {
    logger.error(`Error: Fetch Git data: ${error}`);
  }
};
generateBuild(repoPath);

module.exports = { writeJsonToFile, generateBuild };
