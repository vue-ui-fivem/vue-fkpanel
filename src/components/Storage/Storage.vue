<template>
    <div id="storageContainer">
        <div id="canBeOrderItems">
            <p>Megrendelhető tárgyak!</p>
            <div style="overflow: overlay;width: 100%; height: 88%;">
                <CanBeOrder v-for="(value, index) in canBeOrderStorage" :price="value.price" :label="value.label" :name="value.name" :key="index" />
            </div>
        </div>
        <div id="existsItems">
            <p>Meglévő tárgyak tárgyak! ({{exitsStorage.length}}db)</p>
            <div style="overflow: overlay;width: 100%; height: 90%;">
                <ExistsOrderCard v-for="(value, index) in exitsStorage" :count="value.count" :name="value.name" :key="index" />
            </div>
        </div>
    </div>
</template>

<script>
import CanBeOrder from './CanBeOrderCard.vue'
import ExistsOrderCard from './ExistsOrderCard.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Storage',
    components: {
        CanBeOrder,
        ExistsOrderCard
    },
    computed: {
        ...mapGetters(['canBeOrderStorage', 'exitsStorage'])
    }
}
</script>

<style scoped>
#storageContainer {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
}
#canBeOrderItems {
    width: 100%;
    height: 60%;
}
#existsItems {
    width: 100%;
    height: 40%;
}
p {
    font-weight: 700;
    margin-left: 1vmin;
}
</style>