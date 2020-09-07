<template>
  <div class="home">
    <Nav @cart-btn-clicked="toggleCart" />
    <Search @search-text-updated="filterProducts" />
    <Cart class="cart" v-show="cartVisible" />

    <FilterProducts />
    <Products
      class="products"
      :selectedSize="selectedSize"
      :products="filteredProducts !== null ? filteredProducts : products"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Cart from "@/components/Cart.vue";
import Products from "@/components/Products.vue";
import FilterProducts from "@/components/FilterProducts.vue";
import { mapGetters } from "vuex";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  data() {
    return {
      cartVisible: false,
      filteredProducts: null,
      selectedSize: "",
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  components: {
    Nav,
    Cart,
    Products,
    Search,
    FilterProducts,
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
    filterProducts(searchTerm) {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
};
</script>
