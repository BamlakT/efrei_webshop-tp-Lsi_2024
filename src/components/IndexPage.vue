<template>
  <div class="IndexPage">
    <br>
    <div class="row">
      <div class="col-md-9">
        <div class="row gx-4 gy-4 row-cols-3">
          <div class="col" v-for="product in list_products" :key="product._id">
            <div class="p-3 border bg-light">
              <h5>{{ product.name }}</h5>
              <p>{{ product.desc }}</p>
              <p>{{ product.price }} $</p>
              <button type="button" class="btn btn-success btn-sm" @click="add_to_cart(product._id)">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 border bg-success">
          <h5>Cart</h5>
          <div v-for="cartItem in list_cart" :key="cartItem.productId">
            <div class="p-3 border bg-light">
              {{ get_info_product(cartItem.productId)?.name || "Unknown Product" }}
              <h6>Quantité: {{ cartItem.quantity }}</h6>
              <button type="button" class="btn btn-danger btn-sm" @click="remove_from_cart(cartItem.productId)">Supprimer</button>
            </div>
          </div>
          <div class="p-3 border bg-success">
            <h5>Total: {{ total_price }} $</h5>
            <h6>Nombre de produits: {{ nbr_product }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Stock, Cart } from '../manager';

export default {
  name: 'IndexPage',
  data() {
    return {
      stock: new Stock(),
      cart: new Cart(),
      list_products: [],
      list_cart: [],
      total_price: 0,
      nbr_product: 0,
    };
  },
  async created() {
    console.log('Hello World from created()');
    await this.stock.init();
    this.list_products = this.stock.get_list_product();
    console.log('IndexPage.created: Products loaded:', this.list_products);
    await this.cart.init();
    this.update_cart();
  },
  methods: {
    async add_to_cart(productId) {
      console.log(`IndexPage.add_to_cart: Adding product with id ${productId} to cart`);
      await this.cart.addInCart(productId, 1);
      this.update_cart();
    },
    async remove_from_cart(productId) {
      console.log(`IndexPage.remove_from_cart: Removing product with id ${productId} from cart`);
      await this.cart.removeFromCart(productId);
      this.update_cart();
    },
    update_cart() {
      this.list_cart = this.cart.get_list_cart();
      console.log('IndexPage.update_cart: Cart updated:', this.list_cart);
      this.update_total();
    },
    update_total() {
      this.total_price = this.cart.get_total_price(this.stock);
      this.nbr_product = this.cart.get_nbr_product();
      console.log(`IndexPage.update_total: Total price: ${this.total_price}, Number of products: ${this.nbr_product}`);
    },
    get_info_product(id) {
      const product = this.stock.get_prod_by_id(id);
      console.log(`IndexPage.get_info_product: Fetching info for product id ${id}:`, product);
      return product;
    },
  },
};
</script>

<style scoped>
</style>
