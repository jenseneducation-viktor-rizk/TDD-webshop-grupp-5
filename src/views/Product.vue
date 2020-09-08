<template>
  <div class="product">
    <Nav @cart-btn-clicked="toggleCart" />
    <ProductItem
      :price="product.price"
      :name="product.name"
      :image="require('@/assets/' + product.image)"
      :imgHeight="'350px'"
    />
    <Size :myProduct="product" />
    <Color :color="product.color" />
    <Cart @cart-btn-clicked="toggleCart" class="cart" v-show="cartVisible" />
    <BigButton />
  </div>
</template>


<script>
import Nav from "@/components/Nav.vue";
import ProductItem from "@/components/ProductItem.vue";
import Size from "@/components/Size.vue";
import Color from "@/components/Color.vue";
import Cart from "@/components/Cart.vue";
import BigButton from "@/components/BigButton.vue";

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

  created() {
    //console.log(this.$store);
    this.product = this.$store.getters.product(this.$route.params.id);
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
  },
};
</script>

<style>
</style>
