const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RoleController');

// Create a new role
router.post('/role', roleController.createRole);

// Get all roles
router.get('/role', roleController.getAllRoles);

// Get role by ID
router.get('/:id', roleController.getRoleById);

// Update role by ID
router.put('/:id', roleController.updateRoleById);

// Delete role by ID
router.delete('/:id', roleController.deleteRoleById);

module.exports = router;
