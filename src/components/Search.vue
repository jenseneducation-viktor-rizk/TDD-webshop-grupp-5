<template>
  <div class="searchContainer">
    <input type="text" v-model="currentText" />
  </div>
</template>

<script>
export default {
  data() {
    return { currentText: "" };
  },
  watch: {
    currentText(value) {
      this.$emit("search-text-updated", value);
    },
  },
};
</script>

<style lang="scss">
  .searchContainer {
    position: fixed;
    top: 65px;
    left: 50%;
    width: 300px;
    margin-left: -200px;
    input{
      width: 400px;
      height: 20px;
      border-radius: 5px;
    }
  }
</style>