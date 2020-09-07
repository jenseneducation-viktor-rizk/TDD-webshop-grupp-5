<template>
  <div class="cart">
    <p class="close" @click="$emit('cart-btn-clicked')">+</p>
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

<style lang="scss">
  .cart{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(255, 255, 255);
    z-index: 2;
    .close {
      transform: rotate(45deg);
      position: absolute;
      font-size: 4rem;
      opacity: .5;
      margin: 0;
      top: 10px;
      right: 20px;
      cursor: pointer;
    }
  }
</style>