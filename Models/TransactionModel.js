const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  transDateTime: {
    type: Date,
    default: Date.now,
    required: true
  },
  payee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payee'
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory'
  },
  paymentMethod: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending'
  },
  description: {
    type: String
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TransactionType'
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);