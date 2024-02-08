const express = require('express');
const router = express.Router();
const accountTypeController = require('../controllers/AccounttypeController');

// Create a new account type
router.post('/', accountTypeController.createAccountType);

// Get all account types
router.get('/', accountTypeController.getAllAccountTypes);

// Get account type by ID
router.get('/:id', accountTypeController.getAccountTypeById);

// Update account type by ID
router.put('/:id', accountTypeController.updateAccountTypeById);

// Delete account type by ID
router.delete('/:id', accountTypeController.deleteAccountTypeById);

module.exports = router;
