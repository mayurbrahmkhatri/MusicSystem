const express = require('express');
const { createUserFav, getAllUserFav, getUserFavById, removeUserFav } = require('./services');

const router = express.Router();

router.post('/:user_name/:song_id', createUserFav);
router.get('/:user_name', getAllUserFav);
router.get('/:user_name/:song_id', getUserFavById);
router.delete('/:user_name/:song_id', removeUserFav);


module.exports = router;
