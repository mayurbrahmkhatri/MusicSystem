const express = require('express');

const { createUserPlaylists,
  getUserPlaylist,
  deleteUserPlaylist,
  getAllUserPlaylists,
  updateUserPlaylistName,
  addSongsToYourPlaylist } = require('./services');

const { userPlaylistsSchema, songSchemaJs } = require('./validations');

const router = express.Router();

router.get('/', getAllUserPlaylists);
router.get('/:user_name', getUserPlaylist);
router.post('/', userPlaylistsSchema, createUserPlaylists);
router.put('/:playlist_name', updateUserPlaylistName);
router.delete('/:playlist_name', deleteUserPlaylist);
router.post('/songs', songSchemaJs, addSongsToYourPlaylist);

module.exports = router;
