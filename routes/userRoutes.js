const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/getUsers', userController.getUsers);
router.post('/insertUser', userController.createUser);
router.post('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);
router.get('/getUserByID', userController.getUserById);
router.post('/validateUser', userController.ValidateUser);

module.exports = router;
