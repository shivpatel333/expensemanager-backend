const Role = require('../models/RoleModel');

// Function to get all roles
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to create a new role
const createRole = async (req, res) => {
  const { name } = req.body;

  try {
    const roleExists = await Role.findOne({ name });

    if (roleExists) {
      return res.status(400).json({ message: 'Role already exists' });
    }

    const newRole = new Role({ name });
    const savedRole = await newRole.save();

    res.status(201).json(savedRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to seed initial roles
const seedInitialRoles = async () => {
  try {
    const rolesCount = await Role.countDocuments();

    if (rolesCount === 0) {
      const adminRole = new Role({ name: 'Admin' });
      await adminRole.save();

      const userRole = new Role({ name: 'User' });
      await userRole.save();
    }
  } catch (error) {
    console.error('Error seeding initial roles:', error);
  }
};

// Seed initial roles when the server starts
seedInitialRoles();

module.exports = {
  getRoles,
  createRole
};