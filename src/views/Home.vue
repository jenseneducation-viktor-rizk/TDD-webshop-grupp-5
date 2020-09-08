<template>
  <div class="home">
    <Nav @cart-btn-clicked="toggleCart" @search-btn-clicked="toggleSearch" />
    <Search 
      class="search" 
      @search-text-updated="searchProducts" 
      v-show="searchVisible" />
    <FilterProducts 
      @size-filtered="filterSize"
      @color-filtered="filterColor" />
    <Products
      class="products"
      :selectedSize="selectedSize"
      :selectedColor="selectedColor"
      :products="filteredProducts !== null ? filteredProducts : products"
    />
    <Cart @cart-btn-clicked="toggleCart" class="cart" v-show="cartVisible" />
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
      searchVisible: false,
      filteredProducts: null,
      selectedSize: "Size",
      selectedColor: "Color"
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
    toggleSearch() {
      this.searchVisible = !this.searchVisible;
    },
    searchProducts(searchTerm) {
      this.filteredProducts = this.products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    filterSize(size) {
      this.selectedSize = size
    },
    filterColor(color) {
      this.selectedColor = color
    }
  },
};
</script>
