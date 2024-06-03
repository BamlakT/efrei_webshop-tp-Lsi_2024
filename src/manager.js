import axios from 'axios';

class Product {
  constructor(id = "", name = "", desc = "", price = 0) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}

class Stock {
  constructor() {
    this.list_product = [];
    this.init();
  }

  async init() {
    try {
      const response = await axios.get('http://localhost:5002/api/products');
      this.list_product = response.data;
      console.log('Stock.init: Product list fetched:', this.list_product);
    } catch (error) {
      console.error('Stock.init: Error fetching product data:', error);
    }
  }

  get_list_product() {
    return this.list_product;
  }

  get_prod_by_id(id) {
    const product = this.list_product.find(product => product._id === id);
    console.log(`Stock.get_prod_by_id: Fetching product with id ${id}:`, product);
    return product || null;
  }
}

class Cart {
  constructor() {
    this.list_cart = [];
    this.init();
  }

  async init() {
    try {
      const response = await axios.get('http://localhost:5002/api/cart');
      this.list_cart = response.data?.products || [];
      console.log('Cart.init: Cart fetched:', this.list_cart);
    } catch (error) {
      console.error('Cart.init: Error fetching cart data:', error);
    }
  }

  get_list_cart() {
    return this.list_cart;
  }

  async addInCart(productId, quantity) {
    console.log(`Cart.addInCart: Adding product with id: ${productId} and quantity: ${quantity}`);
    try {
      const response = await axios.post('http://localhost:5002/api/cart/add', { productId, quantity });
      this.list_cart = response.data.products;
      console.log('Cart.addInCart: Cart after adding product:', this.list_cart);
    } catch (error) {
      console.error('Cart.addInCart: Error adding product to cart:', error);
    }
  }

  async removeFromCart(productId) {
    console.log(`Cart.removeFromCart: Removing product with id: ${productId}`);
    try {
      const response = await axios.post('http://localhost:5002/api/cart/remove', { productId });
      this.list_cart = response.data.products;
      console.log('Cart.removeFromCart: Cart after removing product:', this.list_cart);
    } catch (error) {
      console.error('Cart.removeFromCart: Error removing product from cart:', error);
    }
  }

  get_nbr_product() {
    return this.list_cart.reduce((total, product) => total + product.quantity, 0);
  }

  get_total_price(stock) {
    return this.list_cart.reduce((total, cartItem) => {
      const product = stock.get_prod_by_id(cartItem.productId);
      if (product) {
        return total + cartItem.quantity * product.price;
      }
      console.warn(`Cart.get_total_price: Product with id ${cartItem.productId} not found in stock`);
      return total;
    }, 0);
  }
}

export { Product, Stock, Cart };
