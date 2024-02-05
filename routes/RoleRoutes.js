const roleController = require('../controllers/RoleController');
const router = require('express').Router();
router.post("/role", roleController.createRole);
router.get("/role", roleController.getRoles);
module.exports = router;