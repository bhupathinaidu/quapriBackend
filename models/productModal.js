const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: [true, 'Product id is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    brand: {
        type: String,
        required: [true, 'Product brand is required']
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {

        type: {
            100: Number,
            200: Number,
            300: Number,
            500: Number,
            1000: Number,
            1: Number,
            small: Number,
            medium: Number,
            large: Number,
            xLarge: Number

        },
        required: [true, 'Product price is required']
    },
    taxes: {
        type: {

            igst: {
                type: String,
                required: [true, 'Product igst is required']
            },
            cgst: {
                type: String,
                required: [true, 'Product cgst is required']
            },
            sgst: {
                type: String,
                required: [true, 'Product sgst is required']
            }
        },
        required: [true, 'Product taxes are required']
    },
    currency: {
        type: String,
        required: [true, 'Product currency is required']
    },
    corners: [String],
    Shape: [String],
    material: String,
    imageUrls: [String],
    rating: Number,
    numReviews: Number,
    availability: Boolean,
    tags: [String],
    category: {
        type: String,
        required: [true, 'Product category is required']
    },
    customizable: Boolean,
    imageTemplateUrls: [String],
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;