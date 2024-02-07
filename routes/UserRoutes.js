const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UserController');

// GET all users
router.get('/', usersController.getUsers);

// GET a single user by ID
router.get('/:id', usersController.getUserById);

// POST a new user
router.post('/', usersController.createUser);

// PUT update an existing user
router.put('/:id', usersController.updateUser);

// DELETE a user
router.delete('/:id', usersController.deleteUser);

module.exports = router;