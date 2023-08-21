const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    }
})

const TestUser = mongoose.model('TestUser', testSchema)

module.exports = TestUser;