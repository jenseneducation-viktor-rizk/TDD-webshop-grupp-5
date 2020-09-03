<template>
  <div id="nav">
    <Logo  @logo-clicked="toHomePage"/>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    toHomePage() {
      if(this.$router.history.current.name == "Home") {
        this.$router.go()
      }
      else {
        this.$router.push('/')
      }
  }
}}

</script>

<style>
</style>