const express = require('express');
// const { checkSchema } = require('express-validator');
const { saveGenre } = require('./services');
const { addGenreValidation } = require('./validation');
const { getGenre } = require('./services');
const { getGenreById } = require('./services');
const { updateGenre } = require('./services');
const { deleteGenre } = require('./services');

const router = express.Router();

router.post('/', addGenreValidation, saveGenre);
router.get('/', getGenre);
router.get('/:genreId', getGenreById);
router.post('/:genreId', updateGenre);
router.delete('/:genreId', deleteGenre);

module.exports = router;
