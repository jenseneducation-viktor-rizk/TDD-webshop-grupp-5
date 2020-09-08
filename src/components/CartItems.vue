<template>
  <div class="cart-items">
    <div v-for="item in cart" :key="item.id" class="cart-container">
      <ProductItem
        :class="'cart-item-' + item.id"
        :price="item.price"
        :name="item.name"
        :image="require('@/assets/'+ item.image)"
        :imgHeight="'150px'"
      />
      <p>{{item.size}}</p>
      <Dropdown class="change-quantity" :preSelected="'' + item.quantity" :options="quantityOptions" />
      <p>Ta bort</p>
    </div>
    <p>Total: {{totalSum}} kr</p>
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
    };
  },
  created() {},
  computed: {
    ...mapGetters(["cart", "totalSum"]),
  },
  methods: {
    
    // changeQuantity(payload) {
    //     console.log(payload)
    //     const number = parseInt(payload)
    //     this.$store.dispatch('changeQuantity', number)
    // }
  },
};
</script>

<style lang="scss">
.cart-container{
      display: flex;
      flex-direction: row; 
      justify-content: center;
      align-items: center;
      p{
        margin-top: auto;
      }
      select {
        height: 20px;
      }
}
</style>