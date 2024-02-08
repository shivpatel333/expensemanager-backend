const Payee = require('../models/PayeeModel');

// Controller function to create a new payee
const createPayee = async (req, res) => {
  try {
    const newPayee = new Payee(req.body);
    await newPayee.save();
    res.status(201).json(newPayee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all payees
const getAllPayees = async (req, res) => {
  try {
    const payees = await Payee.find();
    res.json(payees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a payee by ID
const getPayeeById = async (req, res) => {
  try {
    const payee = await Payee.findById(req.params.id);
    if (!payee) {
      return res.status(404).json({ message: 'Payee not found' });
    }
    res.json(payee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a payee by ID
const updatePayeeById = async (req, res) => {
  try {
    const updatedPayee = await Payee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPayee) {
      return res.status(404).json({ message: 'Payee not found' });
    }
    res.json(updatedPayee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a payee by ID
const deletePayeeById = async (req, res) => {
  try {
    const deletedPayee = await Payee.findByIdAndDelete(req.params.id);
    if (!deletedPayee) {
      return res.status(404).json({ message: 'Payee not found' });
    }
    res.json({ message: 'Payee deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPayee,
  getAllPayees,
  getPayeeById,
  updatePayeeById,
  deletePayeeById
};
