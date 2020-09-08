<template>
  <img @click="$emit('clicked')" 
  src="@/assets/shopping-bag.png" 
  class="cart-button">
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .cart-button{
    height: 25px;
  }
</style>