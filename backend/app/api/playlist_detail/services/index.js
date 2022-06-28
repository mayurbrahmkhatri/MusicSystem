const savePlaylistDetails = require('./save-playlist-details');
const getPlaylistDetails = require('./get-playlist-details');
const getPlaylistDetailsById = require('./get-playlist-details-by-id');
const updatePlaylistDetails = require('./update-playlist-details');
const deletePlaylistDetails = require('./delete-playlist-details-by-id');

module.exports = {
  savePlaylistDetails,
  getPlaylistDetails,
  getPlaylistDetailsById,
  updatePlaylistDetails,
  deletePlaylistDetails,
};
