const { db: { userPlaylist, sequelize } } = require('../');
const logger = require('../../../logger');
const Sequelize = require('sequelize');

const { Op } = Sequelize;


/**
 * Insert/Save Songs
 *
 * @param {*} data

const { db: { userPlaylist, userPlaylistDetails, sequelize } } = require('../');


/**
 *
 * @param { * } data
 */

exports.createUserPlaylist = async (data) => {
  try {
    return await userPlaylist.create(data);
  } catch (error) {
    console.log('Error in creating user', error);
    throw error;
  }
};

exports.getUserPlaylists = async () => {
  try {
    return await userPlaylist.findAll({ raw: true });
  } catch (error) {
    console.log('Error while getting all userPlaylist', error);
    return error;
  }
};

exports.getUserPlaylistsByUserName = async (user_name) => {
  try {
    return await userPlaylist.findAll({
      where: { user_name },
      raw: true,
    }).then(response => response).catch(err => err);
  } catch (error) {
    console.log('Error while getting user with id', error);
    return error;
  }
};

exports.getUserPlaylistsByPlaylistName = async (playlist_name, user_name) => {
  try {
    return await userPlaylist.findOne({
      where: { playlist_name, user_name },
      raw: true,
    }).then(response => response).catch(err => err);
  } catch (error) {
    console.log('Error while getting plaist name with user name', error);
    return error;
  }
};

exports.updateUserPlaylistByPlaylistName = async (playlist_name, userName, playlistName) => {
  try {
    const abc = await userPlaylist.update({ playlist_name: playlistName }, {
      where: { playlist_name, user_name: userName },
    });


    return abc;
  } catch (error) {
    console.log('Error while updateing user information', error);
    return error;
  }
};

exports.deleteUserPlaylistByPlaylistName = async (playlist_name, userName) => {
  try {
    return await userPlaylist.destroy({
      where: { playlist_name, user_name: userName },
    });
    // console.log('in the dao file', playlistName, userName);
  } catch (error) {
    console.log('Error while deleting use playlist by playlist name', error);
    return error;
  }
};

exports.deleteUserAllPlaylist = async (user_name) => {
  try {
    return await userPlaylist.destroy({
      where: { user_name },
    });
  } catch (error) {
    console.log('Error while deleting user', error);
    return error;
  }
};


exports.addSongsInUserPlaylist = async (data) => {
  try {
    return await userPlaylistDetails.create(data);
  } catch (error) {
    console.log('err', error);
    throw error;
  }
};

exports.getYourPlaylist = async (userName) => {
  try {
    const data = await sequelize.query(`select * from user_playlists where user_name='${userName}' order by user_playlist_id desc `);
    if (data && data.length && data[0].length) {
      return data[0];
    }
    return [];
  } catch (error) {
    console.log('Error While Getting liked songs', error);
    return error;
  }
};
