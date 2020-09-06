<template>
  <div class="product">
    <Nav />
    <Size :myProduct="products[this.myId]"/>
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import Size from '@/components/Size.vue'
import { mapGetters } from 'vuex'

export default {
  data(){return{
    myId: 2
  }},
  components: {
    Nav, Size
  },
  computed: {
    ...mapGetters(["products"]),
  } 
}

</script>

<style>

</style>
