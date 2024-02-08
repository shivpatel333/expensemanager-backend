const express = require('express');
const router = express.Router();
const payeeController = require('../controllers/PayeeController');

// Create a new payee
router.post('/', payeeController.createPayee);

// Get all payees
router.get('/', payeeController.getAllPayees);

// Get payee by ID
router.get('/:id', payeeController.getPayeeById);

// Update payee by ID
router.put('/:id', payeeController.updatePayeeById);

// Delete payee by ID
router.delete('/:id', payeeController.deletePayeeById);

module.exports = router;
