<template>
    <div class="size">
        <Dropdown class="size-dropdown" :options="myProduct.sizes" :preSelected="myProduct.sizes[0]"/>
    </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
    components: { Dropdown },
    data(){return{
        productId: 2
    }},
    props: {
        myProduct: Object
    },
    // computed: {
    //     myProduct: this.products[this.productId]
    // }

}
</script>

<style>

</style>