// server/models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
