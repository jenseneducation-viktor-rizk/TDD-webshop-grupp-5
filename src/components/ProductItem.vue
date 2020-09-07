<template>
  <div>
    <img class="image" :height="imgHeight"
    :src="require('../assets/' + image)" />
    <div class="name">{{ name }}</div>
    <div class="price">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    name: String,
    image: String,
    imgHeight: String
  },
};
</script>

<style>
</style>