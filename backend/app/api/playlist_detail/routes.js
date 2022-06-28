const express = require('express');
const { savePlaylistDetails } = require('./services');
const { getPlaylistDetails } = require('./services');
const { getPlaylistDetailsById } = require('./services');
const { addPlaylistDetailsValidation } = require('./validations');
const { updatePlaylistDetails } = require('./services');
const { deletePlaylistDetails } = require('./services');

const router = express.Router();

router.post('/', addPlaylistDetailsValidation, savePlaylistDetails);
router.post('/:id', updatePlaylistDetails);
router.get('/', getPlaylistDetails);
router.get('/:id', getPlaylistDetailsById);
router.delete('/:id', deletePlaylistDetails);

module.exports = router;
