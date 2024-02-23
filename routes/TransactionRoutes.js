const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/TransactionController');

// Create a new transaction
router.post('/transaction', transactionController.createTransaction);

// Get all transactions
router.get('/transaction', transactionController.getAllTransactions);

// Get transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update transaction by ID
router.put('/:id', transactionController.updateTransactionById);

// Delete transaction by ID
router.delete('/:id', transactionController.deleteTransactionById);

module.exports = router;
