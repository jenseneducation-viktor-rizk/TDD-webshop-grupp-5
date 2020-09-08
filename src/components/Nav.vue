<template>
  <div id="nav">
    <img @click="$emit('search-btn-clicked')" src="@/assets/search.png" class="search-btn"/>
    <Logo @clicked="toHomePage" />
    <CartButton @clicked="$emit('cart-btn-clicked')" />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import CartButton from '@/components/CartButton.vue'

export default {
  components: {
    Logo, CartButton
  },
  methods: {
    toHomePage() {
      if(this.$router.history.current.name === "Home") {
        this.$router.go()
      }
      else {
        this.$router.push('/')
      }
  }
  }
  }

</script>

<style lang="scss" scoped>
  #nav {
    padding: 5px 20px 5px 20px;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-content: center;
    align-items: center;
    justify-items: center;
    img{
      height: 25px;
      cursor: pointer;
    }
  }
</style>