const categoryModel = require('../models/categories');
module.exports = {
  updateByName: function (req, res, next) {
    categoryModel.findByIdAndUpdate(req.params.name, { name: req.body.name }, function (err, categoryInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "category updated successfully!!!", data: categoryInfo });
      }
    });
  },
  deleteById: function (req, res, next) {
    categoryModel.find({ name: req.params.name }, function (err, categoryInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "category deleted successfully!!!", data: null });
      }
    });
  },
  create: function (req, res, next) {
    categoryModel.create({ name: req.body.name, createdBy: req.body.createdBy }, function (err, result) {
      if (err)
        next(err);
      else
        res.json({ status: "success", message: "category added successfully!!!", data: null });

    });
  },
}