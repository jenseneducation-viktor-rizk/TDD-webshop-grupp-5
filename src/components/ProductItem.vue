<template>
  <div>
    <div class="price">{{ price }}</div>
    <div class="name">{{ name }}</div>
    <img class="image" :src="image" />
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