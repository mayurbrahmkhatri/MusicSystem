const express = require('express');
const { fileUpload: { album_upload } } = require('../../commons/util');
const { getAlbums } = require('./services');
const { getAlbumById } = require('./services');
const { deleteById } = require('./services');

const { optinalFunction } = require('./services');
const { searchAlbum } = require('./services');

const router = express.Router();

const { addAlbumNameValidation } = require('./validation');


router.get('/', getAlbums);
router.get('/:id', getAlbumById);
router.post('/:id?', album_upload.single('path'), addAlbumNameValidation, optinalFunction);
router.delete('/:id', deleteById);
router.get('/search/:name', searchAlbum);
module.exports = router;
