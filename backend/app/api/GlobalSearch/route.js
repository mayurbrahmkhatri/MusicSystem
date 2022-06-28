const express = require('express');

const searchApi = require('./services/getSearch');

const router = express.Router();

router.get('/:name', searchApi);

module.exports = router;
