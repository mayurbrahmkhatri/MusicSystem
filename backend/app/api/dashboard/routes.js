const express = require('express');
const { getDashboard } = require('./services');

const router = express.Router();

router.get('/:userName', getDashboard);

module.exports = router;
