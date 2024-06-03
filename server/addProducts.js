const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/webshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  { id: 2, name: 'Germinal 2', desc: 'description germinal 2', price: 20 },
  { id: 3, name: 'Germinal 3', desc: 'description germinal 3', price: 30 },
  { id: 4, name: 'Germinal 4', desc: 'description germinal 4', price: 40 },
  { id: 5, name: 'Germinal 5', desc: 'description germinal 5', price: 50 },
  { id: 6, name: 'Germinal 6', desc: 'description germinal 6', price: 60 },
  { id: 7, name: 'Germinal 7', desc: 'description germinal 7', price: 70 },
  { id: 8, name: 'Germinal 8', desc: 'description germinal 8', price: 80 },
  { id: 9, name: 'Germinal 9', desc: 'description germinal 9', price: 90 },
];

Product.insertMany(products)
  .then(() => {
    console.log('Products added successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error adding products:', err);
    mongoose.connection.close();
  });
