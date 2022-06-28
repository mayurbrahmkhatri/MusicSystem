const express = require('express');
const cors = require('cors');
const { getAlbumDetails } = require('./services');
const { getAlbumDetailsById } = require('./services');
const { optinalFunction } = require('./services');
const { deleteAlbumDetailsById } = require('./services');

const router = express.Router();

const { addAlbumDetailsValidation } = require('./validation');

router.get('/', getAlbumDetails);
router.get('/:id', getAlbumDetailsById);
router.post('/:id?', addAlbumDetailsValidation, optinalFunction);
router.delete('/:id', deleteAlbumDetailsById);
router.use(cors());
module.exports = router;
