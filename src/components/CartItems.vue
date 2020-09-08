<template>
  <div class="cart-items">
    <!-- <div v-for="item in getProducts()" :key="item.id" class="cart-item"> -->
    <ProductItem
      v-for="item in getProducts()"
      :key="item.id"
      :class="'cart-item-' + item.id"
      :price="item.price"
      :name="item.name"
      :image="require('@/assets/'+ item.image)"
      :imgHeight="'150px'"
    />
    <Dropdown class="change-quantity" :preSelected="'1'" :options="quantityOptions" />
    <p>Ta bort</p>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "./ProductItem";
import Dropdown from "./Dropdown";

export default {
  components: { ProductItem, Dropdown },
  data() {
    return {
      quantityOptions: ["1", "2", "3", "4"],
      productsInCart: [],
    };
  },
  created() {},
  computed: {
    ...mapGetters(["cart", "products"]),
  },
  methods: {
    getProducts() {
      let productsInCart = [];
      for (let id in this.cart) {
        let match = this.products.find((item) => item.id == id);
        if (match) {
          productsInCart.push(match);
        }
      }
      return productsInCart;
    },
    // changeQuantity(payload) {
    //     console.log(payload)
    //     const number = parseInt(payload)
    //     this.$store.dispatch('changeQuantity', number)
    // }
  },
};
</script>

<style lang="scss" scoped>
// .cart-item{
//     display: flex;
//     flex-direction: row;
// }
</style>