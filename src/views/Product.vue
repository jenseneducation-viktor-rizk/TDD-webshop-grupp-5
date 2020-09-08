<template>
  <div class="product">
    <Nav @cart-btn-clicked="toggleCart" class="product-nav"/>
    <ProductItem 
      :price="product.price"
      :name="product.name"
      :image="require('@/assets/' + product.image)"
      :imgHeight="'330px'"/>
    <div class="change">
      <Dropdown :preSelected="product.sizes[0]" :options="product.sizes"/>
      <Dropdown :preSelected="'1'" :options="quantityOptions"/> 
    </div>
    <Cart @cart-btn-clicked="toggleCart" class="cart" v-show="cartVisible" />
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import ProductItem from '@/components/ProductItem.vue'
import Cart from '@/components/Cart.vue'
import Dropdown from '@/components/Dropdown.vue'

export default {
  data(){return{
    product: {},
    cartVisible: false,
    quantity: 1,
    quantityOptions: ["1", "2", "3", "4"]
  }},
  components: {
    Nav, ProductItem, Cart, Dropdown
  },
  created() {
    this.product = this.$store.getters.product(this.$route.params.id)
    this.product.size = this.product.sizes[0]
    this.product.quantity = 1
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
  }
}

</script>

<style lang="scss">
  .product{

    .product-item{
      margin-top: 30px;
    }
    .product-nav{
      .logo{
        grid-column-start: 2;
      }
      .search-btn {
        display: none;
      }
    }
  }
</style>
