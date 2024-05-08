const express = require('express');
const productsController = require('../controllers/products.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/products', productsController.index);
router.get('/products/create', authMiddleware, productsController.create);
router.get('/products/:id', productsController.show);
router.post('/products', authMiddleware, productsController.store);
router.get('/products/:id/edit', authMiddleware, productsController.edit);
router.post('/products/:id', authMiddleware, productsController.update);
router.get('/products/:id/delete', authMiddleware, productsController.delete);

module.exports = router;