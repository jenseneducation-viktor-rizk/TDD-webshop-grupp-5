<template>
  <div class="product">
    <Nav />
    <Size :myProduct="products[this.myId]" />
    <Color :color="products[this.myId].color" />
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import Size from '@/components/Size.vue'
import Color from '@/components/Color.vue'
import { mapGetters } from 'vuex'

export default {
  data(){return{
    myId: 1
  }},
  components: {
    Nav, Size, Color
  },
  computed: {
    ...mapGetters(["products"]),
  } 
}

</script>

<style>

</style>
