const express = require('express');
const router = express.Router();
const transactionTypeController = require('../controllers/TransactiontypeController');

// Create a new transaction type
router.post('/transactiontype', transactionTypeController.createTransactionType);

// Get all transaction types
router.get('/transactiontype', transactionTypeController.getAllTransactionTypes);

// Get transaction type by ID
router.get('/:id', transactionTypeController.getTransactionTypeById);

// Update transaction type by ID
router.put('/:id', transactionTypeController.updateTransactionTypeById);

// Delete transaction type by ID
router.delete('/:id', transactionTypeController.deleteTransactionTypeById);

module.exports = router;
