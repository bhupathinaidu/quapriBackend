const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
const Product = require("../models/productModal");
const factory = require('./handlerFactory');

exports.getProduct = catchAsync(async (req, res, next) => {
    const productId = req.params.id
    let query = Product.findOne({ productId });
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })

});

exports.addProduct = factory.createOne(Product);