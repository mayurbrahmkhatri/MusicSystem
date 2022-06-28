const express = require('express');
const { createUser, getUsers, getUserById, deleteUser, updateUser,
  userLogin } = require('./services');

const app = express();
const router = express.Router();

app.use(express.json());

router.post('/login', userLogin);
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:user_name', getUserById);
router.post('/:user_name', updateUser);
router.delete('/:user_name', deleteUser);
module.exports = router;
