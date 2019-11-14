const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const productSchema = new Schema({
  description: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  picture: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  brand: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    trim: true,
    required: true
  },
  createAt: { type: Date, trim: true, default: Date.now },
  createBy: { type: String, trim: true },
});
module.exports = mongoose.model('product', productSchema)