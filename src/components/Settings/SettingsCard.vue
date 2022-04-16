<template>
    <div class="card" >
        <div style="width: 10%;">
            <img src="https://cdn.discordapp.com/attachments/921068126924333076/927510817199493180/DIAMONDLOGOKESZ_kopieren.png" alt="">
        </div>
        <div style="width: 25%;">
            <p @click="setJobRangLabel()" class="nameTitle">{{label}}</p>
        </div>
        <div style="width: 25%;">
            <p @click="setJobRangSalary()" class="amount">{{salary}}$</p>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'SettingsCard',
    props: {
        rangId: Number,
        label: String,
        salary: Number
    },
    methods: {
        setJobRangLabel() {
            Swal.fire({
                title: 'Név?',
                icon: 'warning',
                html: 'Milyen rangra szeretnéd ánevezni a rangot?',
                input: 'text',
                color: 'white',
                background: 'linear-gradient(217deg, #28736E, rgb(0,0,0) 60.71%), linear-gradient(127deg, #1B1A1F, rgb(0,0,0) 70.71%), linear-gradient(336deg, #1B1A1F, rgb(0, 0, 0) 70.71%)',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Módosítás',
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.isConfirmed) {
                    for (let i = 0; i < this.$store.state.settingsList.length; i++) {
                        if (this.$store.state.settingsList[i].rangId == this.rangId) {
                            this.$store.state.settingsList[i].label = result.value
                        }
                    }
                    // fetch('https://demir_faction/rankRename', {
                    //     method: 'POST',
                    //     body: JSON.stringify({
                    //         id: this.rangId,
                    //         value: result.value,
                    //         type: 'label'
                    //     })
                    // })
                }
            })
        },
        setJobRangSalary() {
            Swal.fire({
                title: 'Összeg?',
                icon: 'warning',
                html: 'Mennyi összegre szeretnéd beállítani a rang fizetését?',
                input: 'number',
                color: 'white',
                background: 'linear-gradient(217deg, #28736E, rgb(0,0,0) 60.71%), linear-gradient(127deg, #1B1A1F, rgb(0,0,0) 70.71%), linear-gradient(336deg, #1B1A1F, rgb(0, 0, 0) 70.71%)',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Módosítás',
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.isConfirmed) {
                    for (let i = 0; i < this.$store.state.settingsList.length; i++) {
                        if (this.$store.state.settingsList[i].rangId == this.rangId) {
                            this.$store.state.settingsList[i].salary = result.value
                        }
                    }
                    // fetch('https://demir_faction/rankRename', {
                    //     method: 'POST',
                    //     body: JSON.stringify({
                    //         id: this.rangId,
                    //         value: result.value,
                    //         type: 'salary'
                    //     })
                    // })
                }
            })
        }
    }
}
</script>

<style scoped>
.card {
    color: white;
    width: 70%;
    height: 5vmin;
    background-color: #1B1A1F;
    border-radius: 1.5vmin;
    background: linear-gradient(217deg, #28736E, rgba(255,0,0,0) 60.71%), linear-gradient(127deg, #1B1A1F, rgba(0,255,0,0) 70.71%), linear-gradient(336deg, #1B1A1F, rgba(0, 0, 0, 0) 70.71%);
    border-right: 0.3vmin #28736E solid;
    border-top: 0.3vmin #28736E solid;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1vmin;
    margin: 2vmin auto;
    margin-top: 1vmin;
}
.card img {
    width: 5vmin;
    height: 5vmin;
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
    font-size: 1.8vmin;
    letter-spacing: 0.1vmin;
}
.amount {
    font-weight: 700;
    font-size: 1.6vmin;
    letter-spacing: 0.1vmin;
}
button {
    text-align: center;
    width: 20vmin;
    background-color: rgb(39, 39, 39);
    border: 0.1vmin solid #000;
    color: white;
    border-radius: 0.5vmin;
    display: inline-block;
    height: 3vmin;
    font-weight: 700;
    font-size: 1.5vmin;
    outline: none;
}
button:hover {
    cursor: pointer;
    background-color: rgba(39, 39, 39, 0.692);;
}
</style>