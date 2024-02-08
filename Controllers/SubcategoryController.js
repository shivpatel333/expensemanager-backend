const Subcategory = require('../models/SubcategoryModel');

// Controller function to create a new subcategory
const createSubcategory = async (req, res) => {
  try {
    const newSubcategory = new Subcategory(req.body);
    await newSubcategory.save();
    res.status(201).json(newSubcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all subcategories
const getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a subcategory by ID
const getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a subcategory by ID
const updateSubcategoryById = async (req, res) => {
  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSubcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.json(updatedSubcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a subcategory by ID
const deleteSubcategoryById = async (req, res) => {
  try {
    const deletedSubcategory = await Subcategory.findByIdAndDelete(req.params.id);
    if (!deletedSubcategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.json({ message: 'Subcategory deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSubcategory,
  getAllSubcategories,
  getSubcategoryById,
  updateSubcategoryById,
  deleteSubcategoryById
};
