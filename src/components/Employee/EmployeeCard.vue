<template>
    <div class="card">
        <img src="https://cdn.discordapp.com/attachments/921068126924333076/927510817199493180/DIAMONDLOGOKESZ_kopieren.png" alt="">
        <p class="nameTitle">{{name}}</p>
        <p class="rangTitle">{{rangLabel}}({{rangId}})</p>
        <div class="controlContainer">
            <i @click="changeRank('up')" style="color: green;" class="fas fa-angle-up"></i>
            <i @click="changeRank('down')" style="color: grey;" class="fas fa-angle-down"></i>
            <i @click="kickPlayer()" style="color: red;" class="fa-solid fa-xmark"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmployeeCard',
    props: {
        identifier: String,
        name: String,
        rangLabel: String,
        rangId: Number,
        key: Number
    },
    methods: {
        kickPlayer() {
            fetch('https://demir_faction/kickPlayer', {
					method: 'POST',
                    body: JSON.stringify({
                        identifier: this.identifier
                    })
            })
            for (let i = 0; i < this.$store.state.employeeList.length; i++) {
                if (this.$store.state.employeeList[i].identifier == this.identifier) {
                    this.$store.state.employeeList.splice(i, 1);
                }
            }
        },
        changeRank(type) {
            if (this.$store.state.settingsList[0].rangId <= (type == 'down' ? this.rangId - 1 : this.rangId + 1) && this.$store.state.settingsList[this.$store.state.settingsList.length - 1].rangId >= (type == 'down' ? this.rangId - 1 : this.rangId + 1)) {
                fetch('https://demir_faction/changeRank', {
                        method: 'POST',
                        body: JSON.stringify({
                            identifier: this.identifier,
                            value: type == 'down' ? this.rangId - 1 : this.rangId + 1
                        })
                })
                for (let i = 0; i < this.$store.state.employeeList.length; i++) {
                    if (this.$store.state.employeeList[i].identifier == this.identifier) {
                        this.$store.state.employeeList[i].rangLabel = this.$store.state.settingsList[type == 'down' ? this.rangId - 1 : this.rangId + 1].label
                        this.$store.state.employeeList[i].rangId = this.$store.state.settingsList[type == 'down' ? this.rangId - 1 : this.rangId + 1].rangId
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
.card {
    color: white;
    width: 20vmin;
    height: 17vmin;
    background-color: #1B1A1F;
    border-radius: 1.5vmin;
    background: linear-gradient(217deg, #ae8e64a6, rgba(255,0,0,0) 45.71%), linear-gradient(127deg, #1B1A1F, rgba(0,255,0,0) 70.71%), linear-gradient(336deg, #1B1A1F, rgba(0, 0, 0, 0) 70.71%);
    border-right: 0.3vmin #ae8e64e0 solid;
    border-top: 0.3vmin #ae8e64e0 solid;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1vmin;
    padding-top: 0;
    margin: 1.5vmin;
    margin-left: 3vmin;
}
.card img {
    width: 8vmin;
    height: 8vmin;
}
.card p {
    margin: 0;
}
.controlContainer {
    margin-top: 1vmin;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.nameTitle {
    font-weight: 700;
    font-size: 1.8vmin;
    letter-spacing: 0.1vmin;
}
.rangTitle {
    font-size: 1.6vmin;
    letter-spacing: 0.1vmin;
}
i {
    font-size: 2vmin;
}
i:hover {
    transform: scale(1.1);
    cursor: pointer;
}
</style>