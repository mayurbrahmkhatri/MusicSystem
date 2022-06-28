const express = require('express');
const { createUserHistory, getRecentlyPlayed } = require('./services');

const router = express.Router();

router.post('/:user_name/:song_id', createUserHistory);
router.get('/:user_name', getRecentlyPlayed);

module.exports = router;
