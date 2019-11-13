// Requiring libraries
const express = require("express");
const mongoose = require("mongoose");
//Assign express to app
const app = express();
const PORT = process.env.PORT || 3000;

//Connect mongoose to mongolocally
mongoose.connect("mongodb://localhost:27017/pets", { useNewUrlParser: true, useUnifiedTopology: true });

//Schemas and Models
const usersSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "is required"]
  },
  password: String,
  address: {
    type: String,
    required: [true, "is required"]
  },
  admin: {
    type: Boolean,
    default: false
  }
});

const Users = mongoose.model("Users", usersSchema);

const ordersSchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "is required"]
  },
  address: {
    type: String,
    required: [true, "is required"]
  },
  state: {
    type: String,
    default: "onReview"
  },
  createAt: { type: Date, default: Date.now },
  deliverAt: {
    date: Date,
    time: { type: String, default: "Morning" }
  }
});

const Orders = mongoose.model("Orders", ordersSchema);

const cartSchema = mongoose.Schema({
  orderId: {
    type: String,
    required: [true, "is required"]
  },
  productId: {
    type: String,
    required: [true, "is required"]
  },
  state: {
    type: Number,
    default: 1
  },
});

const Cart = mongoose.model("Cart", cartSchema);

const favoritesSchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "is required"]
  },
  productId: {
    type: String,
    required: [true, "is required"]
  }
});

const Favorites = mongoose.model("Favorites", favoritesSchema);


app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
