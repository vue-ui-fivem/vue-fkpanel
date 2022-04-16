<template>
    <div class="card" >
        <div style="width: 10%;">
            <img :src="require(`/imgs/${name}.png`)"  alt="">
        </div>
        <div style="width: 25%;">
            <p class="nameTitle">{{label}}</p>
        </div>
        <div style="width: 25%;">
            <p class="amount">{{price}}$</p>
        </div>
        <div style="width: 25%;">
            <button @click="buyItem()" type="button">Megrendelés</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CanBeOrderCard',
    props: {
        label: String,
        name: String,
        price: Number
    },
    methods: {
        buyItem() {
            const itemIndex = this.$store.state.exitsStorage.findIndex(el => el.name == this.name);
            if (itemIndex != -1) {
                this.$store.state.exitsStorage[itemIndex].count += 1;
            } else {
                this.$store.state.exitsStorage.push(
                    {
                        name: this.name,
                        count: 1
                    }
                )
            }
            fetch('https://demir_faction/buyItem', {
                method: 'POST',
                body: JSON.stringify({
                    price: this.price,
                    name: this.name
                })
            })
        }
    }
}
</script>

<style scoped>
.card {
    color: white;
    width: 90%;
    height: 5vmin;
    background-color: #1B1A1F;
    border-radius: 1.5vmin;
    background: linear-gradient(217deg, #EC786C, rgba(255,0,0,0) 60.71%), linear-gradient(127deg, #1B1A1F, rgba(0,255,0,0) 70.71%), linear-gradient(336deg, #1B1A1F, rgba(0, 0, 0, 0) 70.71%);
    border-right: 0.3vmin #EC786C solid;
    border-top: 0.3vmin #EC786C solid;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1vmin;
    margin: 1vmin auto;
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
    width: 12vmin;
    background-color: rgb(39, 39, 39);
    border: 0.1vmin solid #000;
    color: white;
    border-radius: 0.5vmin;
    display: inline-block;
    height: 3vmin;
    font-weight: 700;
    font-size: 1.5vmin;
}
button:hover {
    cursor: pointer;
    background-color: rgba(39, 39, 39, 0.692);;
}
</style>