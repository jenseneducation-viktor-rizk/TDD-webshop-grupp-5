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
    margin-left: -150px;
    input{
      width: 300px;
      height: 20px;
      border-radius: 5px;
    }
  }
</style>