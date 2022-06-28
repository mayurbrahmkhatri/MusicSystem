const express = require('express');
const { getPlaylist } = require('./services');
const { getPlaylistById } = require('./services');
const { deletePlaylist } = require('./services');
const { addPlaylistValidation } = require('./validation');
const { optinalFunction } = require('./services');
const { fileUpload: { playlist_upload } } = require('../../commons/util');
const { searchPlaylist } = require('./services');

const router = express.Router();

router.post('/:id?', playlist_upload.single('path'), addPlaylistValidation, optinalFunction);
router.get('/', getPlaylist);
router.get('/:id', getPlaylistById);
router.delete('/:id', deletePlaylist);
router.get('/search/:name', searchPlaylist);

module.exports = router;
