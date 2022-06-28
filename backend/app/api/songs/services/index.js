const getSongs = require('./get-songs');
const getSongsById = require('./get-songs-by-id');
const optinalFunction = require('./save-songs');
const deleteSongs = require('./delete-songs');
const searchSongs = require('./search-by-name');

module.exports = {
  getSongs,
  getSongsById,
  optinalFunction,
  deleteSongs,
  searchSongs,
};
