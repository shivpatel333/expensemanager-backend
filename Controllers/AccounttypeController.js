const AccountType = require('../models/AccounttypeModel');

// Controller function to create a new account type
const createAccountType = async (req, res) => {
  try {
    const newAccountType = new AccountType(req.body);
    await newAccountType.save();
    res.status(201).json(newAccountType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all account types
const getAllAccountTypes = async (req, res) => {
  try {
    const accountTypes = await AccountType.find();
    res.json(accountTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get an account type by ID
const getAccountTypeById = async (req, res) => {
  try {
    const accountType = await AccountType.findById(req.params.id);
    if (!accountType) {
      return res.status(404).json({ message: 'Account type not found' });
    }
    res.json(accountType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update an account type by ID
const updateAccountTypeById = async (req, res) => {
  try {
    const updatedAccountType = await AccountType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAccountType) {
      return res.status(404).json({ message: 'Account type not found' });
    }
    res.json(updatedAccountType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete an account type by ID
const deleteAccountTypeById = async (req, res) => {
  try {
    const deletedAccountType = await AccountType.findByIdAndDelete(req.params.id);
    if (!deletedAccountType) {
      return res.status(404).json({ message: 'Account type not found' });
    }
    res.json({ message: 'Account type deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAccountType,
  getAllAccountTypes,
  getAccountTypeById,
  updateAccountTypeById,
  deleteAccountTypeById
};
