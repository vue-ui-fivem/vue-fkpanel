<template>
    <div id="settingsContainer">
        <Card v-for="(value, index) in settingsList" :rangId="value.rangId" :label="value.label" :salary="value.salary" :key="index" />
    </div>
    <div id="newEmployee">
        <input type="number" placeholder="Játékos azonosístója" min="0" v-model="newPlayerId"> 
        <button type="button" @click="newPlayer()">Játékos felvétele</button>
    </div>
</template>

<script>
import Card from './SettingsCard.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Settings',
    components: {
        Card
    },
    data() {
        return {
            newPlayerId: ''
        }
    },
    computed: {
        ...mapGetters(['settingsList'])
    },
    methods: {
        newPlayer() {
            if (this.newPlayerId != '' || this.newPlayerId != 0 || this.newPlayerId != '0') {
                fetch('https://demir_faction/invitePlayer', {
                    method: 'POST',
                    body: JSON.stringify({
                        value: this.newPlayerId
                    })
                })
            }
        }
    }
}
</script>

<style scoped>
#settingsContainer {
    width: 100%;
    height: 88%;
    overflow: overlay;
    color: white;
    display: flex; 
    flex-direction: column;
}
#newEmployee {
    margin: 1.5vmin auto;
    width: 60%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
input {
    width: 20vmin;
    height: 4vmin;
    background-color: rgb(87, 87, 87) !important;
    outline: none;
    border: none;
    background: linear-gradient(rgb(0, 201, 0) 0 0) bottom /var(--d, 0) 0.4vmin no-repeat;
    transition:0.3s;
    text-align: left;
    border-radius: 0.5vmin;
    letter-spacing: 0.2vmin;
    color: white;
    padding-left: 1vmin;
}
::placeholder {
    color: white ;
    font-size: 1.4vmin;
}
button {
    width: 15vmin;
    background-color: rgb(39, 39, 39);
    border: 0.1vmin solid #000;
    color: white;
    border-radius: 0.5vmin;
    display: inline-block;
    height: 3vmin;
    font-weight: 700;
    font-size: 1.5vmin;
    color: white;
}
button:hover {
    cursor: pointer;
    background-color: rgb(58, 58, 58);
}
</style>
