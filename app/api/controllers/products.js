const productModel = require('../models/products');
module.exports = {
  getByCategory: function (req, res, next) {
    console.log(req.body);
    productModel.find({ categoryId: req.params.categoryId }, function (err, productInfo) {
      if (err) {
        next(err);
      } else {
        res.json({ status: "success", message: "products found!!!", data: { products: productInfo } });
      }
    });
  },
  updateById: function (req, res, next) {
    productModel.findByIdAndUpdate(req.params.productId, {
      productName: req.body.productName,
      description: req.body.description,
      brand: req.body.brand,
      price: req.body.price,
      categoryId: req.body.categoryId,
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
      description: req.body.description,
      price: req.body.price,
      picture: req.body.picture,
      productName: req.body.productName,
      brand: req.body.brand,
      categoryId: req.body.categoryId,
      createdBy: req.body.createdBy,
    },
      function (err, result) {
        if (err)
          next(err);
        else
          res.json({ status: "success", message: "product added successfully!!!", data: null });
      });
  }
}