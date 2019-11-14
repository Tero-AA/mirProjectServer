const productModel = require('../models/products');
module.exports = {
  getByCategory: function (req, res, next) {
    console.log(req.body);
    productModel.find({ category: req.params.category }, function (err, productInfo) {
      if (err) {
        next(err);
      } else {
        res.json({ status: "success", message: "products found!!!", data: { products: productInfo } });
      }
    });
  },
  updateById: function (req, res, next) {
    productModel.findByIdAndUpdate(req.params.productId, {
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    },
      function (err, productInfo) {
        if (err)
          next(err);
        else {
          res.json({ status: "success", message: "product updated successfully!!!", data: productInfo });
        }
      });
  },
  deleteById: function (req, res, next) {
    productModel.findByIdAndRemove(req.params.productId, function (err, productInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "product deleted successfully!!!", data: null });
      }
    });
  },
  create: function (req, res, next) {
    productModel.create({
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      description: req.body.description,
      picture: req.body.picture,
      category: req.body.category,
      createdBy: req.body.createdBy
    },
      function (err, result) {
        if (err)
          next(err);
        else
          res.json({ status: "success", message: "product added successfully!!!", data: null });

      });
  },
}