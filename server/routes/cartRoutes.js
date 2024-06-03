const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');

// Get cart
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('products.productId');
    console.log('GET /api/cart: Cart fetched:', cart);
    res.json(cart || { products: [] });
  } catch (err) {
    console.error('GET /api/cart: Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Add to cart
router.post('/add', async (req, res) => {
  const { productId, quantity } = req.body;
  console.log('POST /api/cart/add: Request body:', req.body);
  try {
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ products: [] });
    }
    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    await cart.save();
    console.log('POST /api/cart/add: Cart after adding product:', cart);
    res.json(cart);
  } catch (err) {
    console.error('POST /api/cart/add: Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Remove from cart
router.post('/remove', async (req, res) => {
  const { productId } = req.body;
  console.log('POST /api/cart/remove: Request body:', req.body);
  try {
    let cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      if (cart.products[productIndex].quantity > 1) {
        cart.products[productIndex].quantity -= 1;
      } else {
        cart.products.splice(productIndex, 1);
      }
    }

    await cart.save();
    console.log('POST /api/cart/remove: Cart after removing product:', cart);
    res.json(cart);
  } catch (err) {
    console.error('POST /api/cart/remove: Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
