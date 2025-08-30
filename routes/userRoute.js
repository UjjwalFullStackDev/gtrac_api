const express = require('express');
const { getUsers, updateUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers)
router.put('/user/:id', updateUser)

module.exports = router