const express = require('express');
const router = express.Router();
const labelController = require('../controllers/LabelController');

// Create a new label
router.post('/', labelController.createLabel);

// Get all labels
router.get('/', labelController.getAllLabels);

// Get label by ID
router.get('/:id', labelController.getLabelById);

// Update label by ID
router.put('/:id', labelController.updateLabelById);

// Delete label by ID
router.delete('/:id', labelController.deleteLabelById);

module.exports = router;
