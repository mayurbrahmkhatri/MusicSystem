const { userPlaylistsSchema } = require('./userPlaylistsValidation');
const { songSchemaJs } = require('./your-playlist-songs-validation');

module.exports = {
  userPlaylistsSchema,
  songSchemaJs,
};
