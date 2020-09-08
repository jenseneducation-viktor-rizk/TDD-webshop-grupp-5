<template>
  <div class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
          <ProductItem
            :class="'cart-item-' + item.id"
            :price="item.price"
            :name="item.name"
            :image="require('@/assets/' + item.image)"
            :imgHeight="'150px'"
          /> 
          <Dropdown class="change-quantity" 
            :preSelected="'1'" 
            :options="quantityOptions"/>
          <p>Ta bort</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "@/components/ProductItem";
import Dropdown from "@/components/Dropdown";

export default {
    components: {ProductItem, Dropdown},
    data() {return{
        quantityOptions: ["1", "2", "3", "4"]
    }},
    computed: {
        ...mapGetters(["cart"]),
    },
    methods: {
        // changeQuantity(payload) {
        //     console.log(payload)
        //     const number = parseInt(payload)
        //     this.$store.dispatch('changeQuantity', number)
        // }
    }
}
</script>

<style lang="scss" scoped>
    // .cart-item{
    //     display: flex;
    //     flex-direction: row;
    // }
</style>