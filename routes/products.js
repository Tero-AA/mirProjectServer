const express = require('express');
const router = express.Router();
const productController = require('../app/api/controllers/products');
router.post('/', productController.create);
router.get('/:categoryId', productController.getByCategory);
router.put('/:productId', productController.updateById);
router.delete('/:productId', productController.deleteById);
module.exports = router;