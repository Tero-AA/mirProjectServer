const express = require('express');
const router = express.Router();
const cartController = require('../app/api/controllers/carts');
router.post('/', cartController.create);
router.get('/:userId', cartController.getByUserId);
router.put('/:cartId', cartController.updateById);
router.delete('/:userId', cartController.deleteByUserId);
module.exports = router;