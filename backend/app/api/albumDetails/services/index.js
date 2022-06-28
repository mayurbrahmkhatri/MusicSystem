const getAlbumDetails = require('./get-album-details');

const getAlbumDetailsById = require('./get-album-details-by-id');
const deleteAlbumDetailsById = require('./delete-album-details-by-id');

const optinalFunction = require('./save-album-details');

module.exports = {

  getAlbumDetails,
  getAlbumDetailsById,
  deleteAlbumDetailsById,
  optinalFunction,
};
