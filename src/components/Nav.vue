<template>
  <div id="nav">
    <button @click="toHomePage" class="logo">HOME</button>
  </div>
</template>

<script>

export default {
  methods: {
    toHomePage() {
      // if(this.$router.history.current.name == "Home") {
      //   this.$router.go()
      // }
      // else {
      //   this.$router.push('/')
      // }{
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>