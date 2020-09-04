<template>
  <div>
    <img class="image" :src="image" />
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
  },
};
</script>

<style>
</style>