<template>
  <div class="product">
    <Nav @cart-btn-clicked="toggleCart" class="product-nav" />
    <ProductItem
      :price="product.price"
      :name="product.name"
      :image="require('@/assets/' + product.image)"
      :imgHeight="'350px'"
    />
    <Size :myProduct="product" />
    <Color :color="product.color" />
    <Cart @cart-btn-clicked="toggleCart" class="cart" v-show="cartVisible" />
    <BigButton class="BigButton" v-on:click.native="addToCart" />
  </div>
</template>


<script>
import Nav from "@/components/Nav.vue";
import ProductItem from "@/components/ProductItem.vue";
import Size from "@/components/Size.vue";
import Color from "@/components/Color.vue";
import Cart from "@/components/Cart.vue";
import BigButton from "@/components/BigButton.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      product: {},
      cartVisible: false,
    };
  },
  components: {
    Nav,
    Size,
    Color,
    ProductItem,
    Cart,
    BigButton,
  },
  computed: {
    ...mapGetters(["cart"]),
  },

  created() {
    this.product = this.$store.getters.product(this.$route.params.id);
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },

    ...mapActions(["addToCart"]),
  },
};
</script>

<style lang="scss">
.product {
  .product-item {
    margin-top: 30px;
  }
  .product-nav {
    .logo {
      grid-column-start: 2;
    }
    .search-btn {
      display: none;
    }
  }
}
</style>
