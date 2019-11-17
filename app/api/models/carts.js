const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CartSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: true,
  },
  productId: {
    type: String,
    trim: true,
    required: true,
  },
  quantity: {
    type: Number,
    trim: true,
    default: 1,
  }
});
module.exports = mongoose.model('Cart', CartSchema)