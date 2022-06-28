/* eslint-disable import/no-unresolved */
const { database: { host, user, password, databaseName,
  pool: { max, min, acquire, idle } } } = require('../../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(databaseName, user, password, {
  host,
  dialect: 'postgres',
  pool: {
    max,
    min,
    acquire,
    idle,
  },
});

const db = {};

// for songs table
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.songs = require('./models/songs_table.model')(sequelize, Sequelize);
db.genre = require('./models/genre.model')(sequelize, Sequelize);
db.playlist = require('./models/playlist.models')(sequelize, Sequelize);
db.playlistDetails = require('./models/playlist_details.model')(sequelize, Sequelize);
db.users = require('./models/user.model')(sequelize, Sequelize);
db.userFav = require('./models/user-fav.model')(sequelize, Sequelize);
db.album_details = require('./models/album_details.model')(sequelize, Sequelize);
db.albums = require('./models/album.model')(sequelize, Sequelize);
db.userPlaylist = require('./models/user_playlists.model')(sequelize, Sequelize);
db.userPlaylistDetails = require('./models/user-playlist-detail')(sequelize, Sequelize);
db.user_histories = require('./models/user_history.model')(sequelize, Sequelize);

module.exports = {
  db,
};
