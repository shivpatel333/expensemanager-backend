const Label = require('../models/LabelModel');

// Controller function to create a new label
const createLabel = async (req, res) => {
  try {
    const newLabel = new Label(req.body);
    await newLabel.save();
    res.status(201).json(newLabel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all labels
const getAllLabels = async (req, res) => {
  try {
    const labels = await Label.find();
    res.json(labels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a label by ID
const getLabelById = async (req, res) => {
  try {
    const label = await Label.findById(req.params.id);
    if (!label) {
      return res.status(404).json({ message: 'Label not found' });
    }
    res.json(label);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a label by ID
const updateLabelById = async (req, res) => {
  try {
    const updatedLabel = await Label.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLabel) {
      return res.status(404).json({ message: 'Label not found' });
    }
    res.json(updatedLabel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a label by ID
const deleteLabelById = async (req, res) => {
  try {
    const deletedLabel = await Label.findByIdAndDelete(req.params.id);
    if (!deletedLabel) {
      return res.status(404).json({ message: 'Label not found' });
    }
    res.json({ message: 'Label deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLabel,
  getAllLabels,
  getLabelById,
  updateLabelById,
  deleteLabelById
};
