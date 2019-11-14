const cartModel = require('../models/carts');
module.exports = {
  getByUserId: function (req, res, next) {
    console.log(req.body);
    cartModel.findById(req.params.userId, function (err, cartInfo) {
      if (err) {
        next(err);
      } else {
        res.json({ status: "success", message: "cart found!!!", data: { carts: cartInfo } });
      }
    });
  },
  updateById: function (req, res, next) {
    cartModel.findByIdAndUpdate(req.params.cartId, { productId: req.body.productId, quantity: req.body.quantity }, function (err, cartInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "cart updated successfully!!!", data: null });
      }
    });
  },
  deleteByUserId: function (req, res, next) {
    cartModel.findByIdAndRemove(req.params.userId, function (err, cartInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "cart deleted successfully!!!", data: null });
      }
    });
  },
  create: function (req, res, next) {
    cartModel.create({ userId: req.body.userId, productId: req.body.userId, quantity: req.body.quantity }, function (err, result) {
      if (err)
        next(err);
      else
        res.json({ status: "success", message: "cart added successfully!!!", data: null });

    });
  },
}