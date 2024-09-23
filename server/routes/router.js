const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/RegisterUser');
const { listUser } = require('../controllers/ListUser');
const { loginUser } = require('../controllers/LoginUser')
const { deleteUser } = require('../controllers/DeletUser')
const { updateUser } = require('../controllers/UpdateUser')
const { logoutUser } = require('../controllers/LogoutUser')

router.post('/register', registerUser);
router.get('/list', listUser);
router.get('/login', loginUser)
router.delete('/delete/:id', deleteUser)
router.put('/update/:id', updateUser)
router.get('/logout/:id', logoutUser)

module.exports = router;

