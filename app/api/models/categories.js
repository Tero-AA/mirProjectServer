const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  createAt: { type: Date, trim: true, default: Date.now },
  createdBy: {
    type: String,
    trim: true,
    required: true,
  }
});
module.exports = mongoose.model('Category', CategorySchema)