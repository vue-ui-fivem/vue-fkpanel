<template>
    <div id="employeeContainer">
        <Card v-for="(value, index) in employeeList" :identifier="value.identifier" :name="value.name" :rangLabel="value.rangLabel" :rangId="value.rangId" :key="index" />
    </div>
</template>

<script>
import Card from './EmployeeCard.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Employee',
    components: {
        Card
    },
    computed: {
        ...mapGetters(['employeeList'])
    }
}
</script>

<style scoped>
#employeeContainer {
	display: flex;
	flex-wrap: wrap;
    height: 100%;
    width: 100%;
}
</style>