<template>
  <div class="home">
    <Nav @cart-btn-clicked="toggleCart" />
    <Cart class="cart" v-show="cartVisible" />
    <Products class="products" :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Cart from "@/components/Cart.vue";
import Products from "@/components/Products.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      cartVisible: false,
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  components: {
    Nav,
    Cart,
    Products,
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
  },
};
</script>
