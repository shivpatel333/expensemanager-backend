const mongoose = require('mongoose');

const accountTypeSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AccountType', accountTypeSchema);