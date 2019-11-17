const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    type: String,
    trim: true,
    required: true
  },
  state: {
    type: String, trim: true,
    default: "onReview"
  },
  createAt: { type: Date, trim: true, default: Date.now },
  deliverAt: {
    date: { type: Date, trim: true, default: Date.now },
    time: { type: String, trim: true, default: "Morning" }
  }
});
module.exports = mongoose.model('Order', OrderSchema)