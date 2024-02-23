const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');

// Create a new category
router.post('/category', categoryController.createCategory);

// Get all categories
router.get('/category', categoryController.getAllCategories);

// Get category by ID
router.get('/:id', categoryController.getCategoryById);

// Update category by ID
router.put('/:id', categoryController.updateCategoryById);

// Delete category by ID
router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;
