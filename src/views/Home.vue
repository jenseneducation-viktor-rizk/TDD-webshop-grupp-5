<template>
  <div class="home">
    <Nav @cart-btn-clicked="toggleCart" />
    <Cart class="cart" v-show="cartVisible"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'Home',
  data() {return{
    cartVisible: false
  }},
  components: {
    Nav, Cart
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible
    }
  }
}
</script>
