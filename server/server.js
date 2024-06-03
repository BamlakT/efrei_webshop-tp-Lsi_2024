const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/webshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(5002, () => {
  console.log('Server is running on port: 5002');
});
