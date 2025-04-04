const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Rota para obter todos os usuários
router.get('/', userController.getAllUsers);

// Rota para obter um usuário por ID
router.get('/:id', userController.getUserById);

// Rota para criar um novo usuário
router.post('/', userController.createUser);

// Rota para atualizar um usuário existente
router.put('/:id', userController.updateUser);

// Rota para deletar um usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;
