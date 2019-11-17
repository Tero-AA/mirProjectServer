const express = require('express');
const router = express.Router();
const categoryController = require('../app/api/controllers/categories');
router.post('/', categoryController.create);
router.put('/:id', categoryController.updateById)
router.delete('/:id', categoryController.deleteById);
module.exports = router;