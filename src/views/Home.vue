<template>
  <div class="home">
    <Nav @cart-btn-clicked="toggleCart" />
    <Cart class="cart" v-show="cartVisible" />
    <FilterProducts />
    <Products class="products" :products="products" :selectedSize="selectedSize" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Cart from "@/components/Cart.vue";
import Products from "@/components/Products.vue";
import FilterProducts from "@/components/FilterProducts.vue"
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      cartVisible: false,
      selectedSize: ""
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  components: {
    Nav,
    Cart,
    Products,
    FilterProducts
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
  },
};
</script>
