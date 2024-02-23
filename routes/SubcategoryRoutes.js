const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/SubcategoryController');

// Create a new subcategory
router.post('/subcategory', subcategoryController.createSubcategory);

// Get all subcategories
router.get('/subcategory', subcategoryController.getAllSubcategories);

// Get subcategory by ID
router.get('/:id', subcategoryController.getSubcategoryById);

// Update subcategory by ID
router.put('/:id', subcategoryController.updateSubcategoryById);

// Delete subcategory by ID
router.delete('/:id', subcategoryController.deleteSubcategoryById);

module.exports = router;
