const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/RoleController');

// GET all roles
router.get('/', rolesController.getRoles);

// POST create a new role
router.post('/', rolesController.createRole);

module.exports = router;