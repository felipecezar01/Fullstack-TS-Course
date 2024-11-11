const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas para CRUD de usuários
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;