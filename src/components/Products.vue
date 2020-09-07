<template>
  <div class="productsContainer">
    <ProductItem
      @click.native="$router.push('/product/' + product.id)"
      v-for="product in filteredProducts"
      :key="product.id"
      :class="'item-' + product.id"
      :price="product.price"
      :name="product.name"
      :image="require('@/assets/' + product.image)"
      :imgHeight="'250px'"
    />
    
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  props: {
    products: Array,
    selectedSize: String
  },
  computed: {
    filteredProducts() {
      if(this.selectedSize == "") {
        return this.products
      }else{
      return this.products.filter(shirt => shirt.sizes.some(size => size === this.selectedSize))}
      
    }
    
  },
  components: {
    ProductItem,
  },
};
</script>


<style lang='scss' scoped>
  .productsContainer {
    display: grid;
    grid-template-columns: 1fr;
    .product-item {
      &:hover {
        cursor: pointer;
      }
      margin: 20px 5px 0 5px
    }
  }
  @media only screen and (min-width: 600px) {
    .productsContainer {
      grid-template-columns: 1fr 1fr;
      }
  } 
  @media only screen and (min-width: 800px) {
    .productsContainer {
      grid-template-columns: repeat(3, 1fr);
      }
  } 
</style>