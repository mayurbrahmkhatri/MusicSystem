// Router declarations
const {
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

} = require('./api');


/**
 * initialize routes
 *
 * @param  {Object} server
 */
module.exports = (server) => {
  server.use('/songs', songsRoute);
  server.use('/genre', genreRoute);
  server.use('/search', searchRoute);
  server.use('/playlist', playlistRoute);
  server.use('/playlist_details', playlistDetailsRoute);
  server.use('/user', userRoute);
  server.use('/favourite', userFavRoute);
  server.use('/albums', albumsRoute);
  server.use('/albumdetails', albumDetailsRoute);
  server.use('/dashboard', dashBoard);
  server.use('/user_playlists', userPlaylistsRoute);
 
  server.use('/user_histories', userHistoryRoute)
};
