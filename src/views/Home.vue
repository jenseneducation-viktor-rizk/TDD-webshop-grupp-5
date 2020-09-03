<template>
  <div class="home">
    <Nav/>
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'Home',
  components: { Nav, Cart }
}
</script>
