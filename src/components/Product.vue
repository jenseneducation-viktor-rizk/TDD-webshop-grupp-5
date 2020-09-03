<template>
  <div>
    <div class="price">{{ price }}</div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    name: String,
  },
};
</script>

<style>
</style>