const CurrencyType = require('../models/CurrencyTypeModel');

// Controller function to create a new currency type
const createCurrencyType = async (req, res) => {
  try {
    const newCurrencyType = new CurrencyType(req.body);
    await newCurrencyType.save();
    res.status(201).json(newCurrencyType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all currency types
const getAllCurrencyTypes = async (req, res) => {
  try {
    const currencyTypes = await CurrencyType.find();
    res.json(currencyTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a currency type by ID
const getCurrencyTypeById = async (req, res) => {
  try {
    const currencyType = await CurrencyType.findById(req.params.id);
    if (!currencyType) {
      return res.status(404).json({ message: 'Currency type not found' });
    }
    res.json(currencyType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a currency type by ID
const updateCurrencyTypeById = async (req, res) => {
  try {
    const updatedCurrencyType = await CurrencyType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCurrencyType) {
      return res.status(404).json({ message: 'Currency type not found' });
    }
    res.json(updatedCurrencyType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a currency type by ID
const deleteCurrencyTypeById = async (req, res) => {
  try {
    const deletedCurrencyType = await CurrencyType.findByIdAndDelete(req.params.id);
    if (!deletedCurrencyType) {
      return res.status(404).json({ message: 'Currency type not found' });
    }
    res.json({ message: 'Currency type deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCurrencyType,
  getAllCurrencyTypes,
  getCurrencyTypeById,
  updateCurrencyTypeById,
  deleteCurrencyTypeById
};
