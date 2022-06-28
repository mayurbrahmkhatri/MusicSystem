const getAlbums = require('./get-albums');

const getAlbumById = require('./get-album-by-id');
const deleteById = require('./delete-by-id');

const optinalFunction = require('./save-albums');
const searchAlbum = require('./search-by-name');

module.exports = {

  getAlbums,
  getAlbumById,
  deleteById,
  searchAlbum,
  optinalFunction,
};
