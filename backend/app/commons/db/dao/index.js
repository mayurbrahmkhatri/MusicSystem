const songsDao = require('./songs.dao');
const genreDao = require('./genre.dao');
const playlistDao = require('./playlist.dao');
const playlistDetailsDao = require('./playlist_details.dao');
const userDao = require('./user.dao');
const userFav = require('./user-fav.dao');
const albumsDao = require('./albums-dao');
const albumDetailsDao = require('./album-details-dao');
const dashboardDao = require('./dashboard.dao');
const userPlaylistDao = require('./userplaylists.dao');
const userHistoryDao = require('./user-histories.dao');

module.exports = {
  songsDao,
  genreDao,
  playlistDao,
  playlistDetailsDao,
  userDao,
  userFav,
  albumsDao,
  albumDetailsDao,
  dashboardDao,
  userPlaylistDao,
  userHistoryDao,
};
