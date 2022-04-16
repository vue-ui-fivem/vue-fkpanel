<template>
    <div id="carsContainer">
        <Card v-for="(value, index) in carsList" :vehicle_name="value.vehicle_name" :vehicle_label="value.vehicle_label" :vehicle_price="value.vehicle_price" :type="value.type" :key="index" />
    </div>
</template>

<script>
import Card from './CarCard.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Cars',
    components: {
        Card
    },
    computed: {
        ...mapGetters(['carsList'])
    }
}
</script>

<style scoped>
#carContainer {
    display: flex; 
    flex-direction: column; 
    height: 100%; 
    width: 100%;
}
</style>