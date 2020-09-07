<template>
  <div class="product">
    <Nav />
    <ProductItem 
      :price="product.price"
      :name="product.name"
      :image="require('@/assets/' + product.image)"
      :imgHeight="'500px'"/> 
    <Size :myProduct="product" />
    <Color :color="product.color" />
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import ProductItem from '@/components/ProductItem.vue'
import Size from '@/components/Size.vue'
import Color from '@/components/Color.vue'

export default {
  data(){return{
    product: {}
  }},
  components: {
    Nav, Size, Color, ProductItem
  },
  created() {
    this.product = this.$store.getters.product(this.$route.params.id)
  }
}

</script>

<style>

</style>
