const express = require('express');
const router = express.Router();
const currencyTypeController = require('../controllers/CurrencyTypeController');

// Create a new currency type
router.post('/', currencyTypeController.createCurrencyType);

// Get all currency types
router.get('/', currencyTypeController.getAllCurrencyTypes);

// Get currency type by ID
router.get('/:id', currencyTypeController.getCurrencyTypeById);

// Update currency type by ID
router.put('/:id', currencyTypeController.updateCurrencyTypeById);

// Delete currency type by ID
router.delete('/:id', currencyTypeController.deleteCurrencyTypeById);

module.exports = router;
