const getPlaylist = require('./get-playlist');
const getPlaylistById = require('./get-playlist-by-id');
const deletePlaylist = require('./delete-playlist-by-id');
const optinalFunction = require('./save-playlist');
const searchPlaylist = require('./search-by-name');


module.exports = {
  getPlaylist,
  getPlaylistById,
  deletePlaylist,
  searchPlaylist,
  optinalFunction,
};
