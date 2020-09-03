<template>
  <div class="cart">
    <div class="cart-item">
      <select v-model="amount" name="amount" class="amount">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: "1",
    };
  },
};
</script>

<style>
</style>