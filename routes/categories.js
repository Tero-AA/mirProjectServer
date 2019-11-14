const express = require('express');
const router = express.Router();
const categoryController = require('../app/api/controllers/categories');
router.post('/', categoryController.create);
router.put('/:name', categoryController.updateByName)
router.delete('/:name', categoryController.deleteById);
module.exports = router;