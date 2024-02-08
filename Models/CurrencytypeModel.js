const mongoose = require('mongoose');

const currencyTypeSchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CurrencyType', currencyTypeSchema);