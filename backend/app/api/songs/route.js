const express = require('express');
const { fileUpload: { song_upload } } = require('../../commons/util');
const { addSongsValidation } = require('./validation');
const { getSongs } = require('./services');
const { getSongsById } = require('./services');
const { optinalFunction } = require('./services');
const { deleteSongs } = require('./services');
const { searchSongs } = require('./services');

const router = express.Router();

router.get('/', getSongs);
router.get('/:id', getSongsById);
router.post('/:id?', song_upload.single('img_path'), addSongsValidation, optinalFunction);
router.delete('/:id', deleteSongs);
router.get('/search/:name', searchSongs);

module.exports = router;
