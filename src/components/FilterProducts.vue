<template>
  <div>
      <Dropdown class="size-filter" :options="sizes" :preSelected="sizes[0]"/>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
export default {
    components: { Dropdown },
    data(){return{
        sizes: ["S", "M", "L", "XL"]
    }}
}
</script>

<style>

</style>