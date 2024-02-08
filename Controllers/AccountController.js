const Account = require('../models/AccountModel');

// Controller function to create a new account
const createAccount = async (req, res) => {
  try {
    const newAccount = new Account(req.body);
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all accounts
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get an account by ID
const getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update an account by ID
const updateAccountById = async (req, res) => {
  try {
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json(updatedAccount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete an account by ID
const deleteAccountById = async (req, res) => {
  try {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    if (!deletedAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.json({ message: 'Account deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAccount,
  getAllAccounts,
  getAccountById,
  updateAccountById,
  deleteAccountById
};
