const mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String,
});