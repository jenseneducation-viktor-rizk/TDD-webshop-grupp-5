<template>
  <div class="cart">
    <div class="cart-item">
    <Dropdown :options="quantity" :preSelected="itemQuant" />
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue"
export default {
  components: { Dropdown },
  data() {
    return {
      itemQuant: "1",
      quantity: ["1", "2", "3", "4"]
    };
  },
};
</script>

<style>
</style>