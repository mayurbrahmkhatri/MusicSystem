const songsRoute = require('./songs/route');
const genreRoute = require('./genre/route');
const playlistRoute = require('./playlist/routes');
const playlistDetailsRoute = require('./playlist_detail/routes');
const albumsRoute = require('./albums/routes');
const albumDetailsRoute = require('./albumDetails/route');
const userRoute = require('./User/route');
const userFavRoute = require('./userFav/route');
const searchRoute = require('./GlobalSearch/route');
const dashBoard = require('./dashboard/routes');
const userPlaylistsRoute = require('./userPlaylists/route');
const userHistoryRoute = require('./user_histories/routes');

module.exports = {
  songsRoute,
  genreRoute,
  searchRoute,
  playlistRoute,
  playlistDetailsRoute,
  userRoute,
  userFavRoute,
  albumsRoute,
  albumDetailsRoute,
  dashBoard,
  userPlaylistsRoute,
  userHistoryRoute,
};
