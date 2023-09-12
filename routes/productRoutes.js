const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router
    .route('/')
    .post(productController.addProduct)

router
    .route('/:id')
    .get(productController.getProduct)

module.exports = router;