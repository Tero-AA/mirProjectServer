const categoryModel = require('../models/categories');
module.exports = {
  updateById: function (req, res, next) {
    categoryModel.findByIdAndUpdate(req.params.id, { name: req.body.name }, function (err, categoryInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "category updated successfully!!!", data: categoryInfo });
      }
    });
  },
  deleteById: function (req, res, next) {
    categoryModel.deleteOne({ _id: req.params.id }, function (err, categoryInfo) {
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