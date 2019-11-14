// Requiring libraries
const express = require('express');
const logger = require('morgan');
const orders = require('./routes/orders');
const users = require('./routes/users');
const carts = require('./routes/carts');
const products = require('./routes/products');
const categories = require('./routes/categories')
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
let jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 3100;
const SECRET = process.env.SECRET || 'Es un super secreto';

app.set('secretKey', SECRET); // jwt secret token

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.json({ "Hello": "Server is running" });
});

// public route
app.use('/users', users);

// private route orders
app.use('/orders', validateUser, orders);

// private route cart
app.use('/carts', validateUser, carts);

// private route products
app.use('/products', validateUser, products);

// private route categories
app.use('/categories', validateUser, categories);

function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
};

// handle 404 error
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404)
    res.status(404).json({ message: "Not found" });
  else
    res.status(500).json({ message: "Something looks wrong :( !!!" });
});
//Schemas and Models


// const favoritesSchema = mongoose.Schema({
//   userId: {
//     type: String,
//     required: [true, "is required"]
//   },
//   productId: {
//     type: String,
//     required: [true, "is required"]
//   }
// });

// const Favorites = mongoose.model("Favorites", favoritesSchema);


// const categoriesSchema = mongoose.Schema({
//   name: String,
//   createAt: { type: Date, default: Date.now },
//   createdBy: {
//     type: String,
//     required: true
//   }
// })



app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
