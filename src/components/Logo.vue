<template>
  <div @click="$emit('clicked')" class="logo">
      <h2>T-shirt Shop</h2>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
 .logo{
   cursor: pointer;
 }
</style>