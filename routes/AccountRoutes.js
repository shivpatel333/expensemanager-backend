const express = require('express');
const router = express.Router();
const accountController = require('../controllers/AccountController');

// Create a new account
router.post('/', accountController.createAccount);

// Get all accounts
router.get('/', accountController.getAllAccounts);

// Get account by ID
router.get('/:id', accountController.getAccountById);

// Update account by ID
router.put('/:id', accountController.updateAccountById);

// Delete account by ID
router.delete('/:id', accountController.deleteAccountById);

module.exports = router;
