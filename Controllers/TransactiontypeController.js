const TransactionType = require('../models/TransactiontypeModel');

// Controller function to create a new transaction type
const createTransactionType = async (req, res) => {
  try {
    const newTransactionType = new TransactionType(req.body);
    await newTransactionType.save();
    res.status(201).json(newTransactionType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all transaction types
const getAllTransactionTypes = async (req, res) => {
  try {
    const transactionTypes = await TransactionType.find();
    res.json(transactionTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a transaction type by ID
const getTransactionTypeById = async (req, res) => {
  try {
    const transactionType = await TransactionType.findById(req.params.id);
    if (!transactionType) {
      return res.status(404).json({ message: 'Transaction type not found' });
    }
    res.json(transactionType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a transaction type by ID
const updateTransactionTypeById = async (req, res) => {
  try {
    const updatedTransactionType = await TransactionType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTransactionType) {
      return res.status(404).json({ message: 'Transaction type not found' });
    }
    res.json(updatedTransactionType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a transaction type by ID
const deleteTransactionTypeById = async (req, res) => {
  try {
    const deletedTransactionType = await TransactionType.findByIdAndDelete(req.params.id);
    if (!deletedTransactionType) {
      return res.status(404).json({ message: 'Transaction type not found' });
    }
    res.json({ message: 'Transaction type deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransactionType,
  getAllTransactionTypes,
  getTransactionTypeById,
  updateTransactionTypeById,
  deleteTransactionTypeById
};
