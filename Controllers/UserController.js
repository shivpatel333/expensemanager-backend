const User = require('../models/UserModel');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { firstname, lastname, email, password, roleid } = req.body; // Destructure the request body

  const user = new User({
    firstname,
    lastname,
    email,
    password,
    roleid
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.firstname = req.body.firstname || user.firstname;
      user.lastname = req.body.lastname || user.lastname;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.roleid = req.body.roleid || user.roleid;
      
      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed initial data
// Seed initial data
const seedInitialData = async () => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      // Find or create roles
      let adminRole = await Role.findOne({ name: 'Admin' });
      if (!adminRole) {
        adminRole = new Role({ name: 'Admin' });
        await adminRole.save();
      }

      let userRole = await Role.findOne({ name: 'User' });
      if (!userRole) {
        userRole = new Role({ name: 'User' });
        await userRole.save();
      }

      // Create Tejas with Admin role
      const tejas = new User({
        firstname: 'Tejas',
        lastname: 'Patel',
        email: 'tejas@example.com',
        password: 'password123',
        roleid: adminRole._id // Assign Admin role ID
      });
    }
  } catch (error) {
    console.error('Error seeding initial data:', error);
  }
};

// Seed initial data when the server starts
seedInitialData();

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};