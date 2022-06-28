const { getTopSongs } = require('../dao/songs.dao');
const { getTopPlaylist } = require('../dao/playlist.dao');
const { getTopAlbums } = require('../dao/albums-dao');
const { getLikedSongs } = require('../dao/user-fav.dao');
const { getYourPlaylist } = require('../dao/userplaylists.dao');
const { getRecentlyPlayed } = require('../dao/user-histories.dao');

exports.getDashboard = async (userName) => {
  try {
    const responseObj = [];
    console.log('User Name ===>', userName);
    if (userName === 'guest') {
      // Get Top 5 Songs
      const songsData = await getTopSongs(5);
      responseObj.push({
        section_name: 'Top Songs',
        section_link: '/songs',
        data: songsData,
      });

      // Get Top 5 Playlists
      const playlistData = await getTopPlaylist(5);
      responseObj.push({
        section_name: 'Top Playlists',
        section_link: '/playlist',
        data: playlistData,
      });

      // Get Top 5 Albums
      const albumData = await getTopAlbums(5);
      responseObj.push({
        section_name: 'Top Albums',
        section_link: '/albums',
        data: albumData,
      });
    } else {
      // Get Your Playlists
      const yourPlaylist = await getYourPlaylist(userName);
      if (yourPlaylist && yourPlaylist.length) {
        responseObj.push({
          section_name: 'Your Playlist',
          section_link: '/your-playlist',
          data: yourPlaylist,
        });
      } else {
        const songsData = await getTopSongs(5)
        ;
        responseObj.push({
          section_name: 'Top Songs',
          section_link: '/songs',
          data: songsData,
        });
      }

      // Get liked songs
      const userFav = await getLikedSongs(userName);
      console.log("user fav", userFav)
      if (userFav && userFav.length) {
        responseObj.push({
          section_name: 'Your Liked Songs',
          section_link: '/favourite',
          data: userFav,
        });
      } else {
        const playlistData = await getTopPlaylist(5);
        responseObj.push({
          section_name: 'Top Playlists',
          section_link: '/playlist',
          data: playlistData,
        });
      }

      // Get recently played songs
      const recentlyPlayed = await getRecentlyPlayed(userName);
      if (recentlyPlayed && recentlyPlayed.length) {
        responseObj.push({
          section_name: 'Your Recently Played Songs',
          section_link: '',
          data: recentlyPlayed,
        });
      } else {
        const albumData = await getTopAlbums(5);
        responseObj.push({
          section_name: 'Top Albums',
          section_link: '/albums',
          data: albumData,
        });
      }
    }
    return responseObj;
  } catch (error) {
    console.log('Error in Get Dashboard ', error);
    return error;
  }
};

