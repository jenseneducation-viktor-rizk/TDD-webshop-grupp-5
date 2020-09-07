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
      // or generate/simulate a native events (not sure how, but its outside Vue's realm I think
    },
  },
};
</script>

<style>
</style>