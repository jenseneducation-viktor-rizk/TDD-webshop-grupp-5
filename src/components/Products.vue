<template>
  <div class="productsContainer">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :price="product.price"
      :name="product.name"
      :image="product.image"
      :imgHeight="'300px'"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  props: {
    products: Array,
  },
  computed: {
    
  },
  components: {
    ProductItem,
  },
};
</script>


<style lang='scss'>

</style>