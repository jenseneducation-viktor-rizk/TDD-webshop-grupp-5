<template>
  <div class="productsContainer">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :price="product.price"
      :name="product.name"
      :image="product.image"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  props: {
    products: Array,
  },
  components: {
    ProductItem,
  },
};
</script>


<style>
</style>