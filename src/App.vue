<template>
	<div id="container">
		<nav id="navBar">
			<div id="clientInfo">
				<p id="titleText">Frakció panel</p>
				<img src="https://cdn.discordapp.com/attachments/921068126924333076/927510817199493180/DIAMONDLOGOKESZ_kopieren.png">
				<p id="nameTitle">{{nameTitle}}</p>
				<p id="rangTitle">{{rangTitle}}</p>
				<p id="societyMoney">Frakció kassza: {{societyMoney}}$</p>
			</div>
			<div id="navbarItems">
				<div class="navbarItemsDiv" :class="this.$route.path == '/employee' ? 'activeBorder': ''">
					<p @click="$router.push('/employee')" class="itemP"><i class="fa-solid fa-person"></i>Alkalmazottak</p>
				</div>
				<div class="navbarItemsDiv" :class="this.$route.path == '/storage' ? 'activeBorder': ''">
					<p @click="$router.push('/storage')" class="itemP"><i class="fa-solid fa-box"></i>Raktár</p>
				</div>
				<div class="navbarItemsDiv" :class="this.$route.path == '/cars' ? 'activeBorder': ''">
					<p @click="$router.push('/cars')" class="itemP"><i class="fa-solid fa-car"></i>Járművek</p>
				</div>
				<div class="navbarItemsDiv" :class="this.$route.path == '/settings' ? 'activeBorder': ''">
					<p @click="$router.push('/settings')" class="itemP" id="settings"><i class="fa-solid fa-screwdriver-wrench"></i>Beállítások</p>
				</div>
				<p style="margin: 0px;
				padding-bottom: 1vmin;
				font-size: 1.5vmin;
				color: white;
				margin-top: 10vmin;
				opacity: 0.6;">© Created by !&!Beni#0864</p>
			</div>
		</nav>
		<div id="selectedTypeContainer">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			nameTitle: 'Luis Keane',
			rangTitle: 'Vezérezredes',
			societyMoney: 47658572435
		}
	},
	mounted() {
		document.onkeyup = (data) => {
			if (data.which == 27) {
				fetch('https://demir_faction/exit', {
					method: 'POST'
				})
			}
		};
		window.addEventListener('message', (event) => {
			let display = document.getElementById('container');

			if (event.data.type == 'ui') {
				if (event.data.status == true) {
					display.style.display = 'flex';
				} else {
					display.style.display = 'none';
				}
			} else if (event.data.type == 'updateData') {
				this.$store.state.settingsList = event.data.rankData
				this.$store.state.canBeOrderStorage = event.data.orderableItems
				this.$store.state.carsList = event.data.vehicleTable
				this.$store.state.employeeList = event.data.factionData
				this.$store.state.canBeOrderStorage = event.data.orderableItems
				this.societyMoney = event.data.factionMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
				this.rangTitle = event.data.jobName
				this.nameTitle = event.data.clientName
			}
		})
	},
	created() {
		this.societyMoney = this.societyMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		let itemCount = this.$store.state.exitsStorage
		this.$store.state.exitsStorage = []
		for(let i = 0; i < itemCount.length;i++){
			const itemIndex = this.$store.state.exitsStorage.findIndex(el => el.name == itemCount[i].name);
			if (itemIndex != -1){
				this.$store.state.exitsStorage[itemIndex].count += itemCount[i].count;
			} else{ 
				this.$store.state.exitsStorage.push(
					{
						name: itemCount[i].name,
						count: itemCount[i].count
					}
				)
			}
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 2vh);
}
::-webkit-scrollbar {
	width: 0px;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
	display: none;
}
</style>

<style scoped>
#container {
	height: 80vmin;
	width: 120vmin;
	background-color: #0C0B10;
	border-radius: 3vmin;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
#navBar {
	height: 100%;
	width: 23%;
	padding: 0;
	margin: 0;
	border-radius: 3vmin 0 0 3vmin;
	display: flex;
	flex-direction: column;
	color: white;
}
#selectedTypeContainer {
	background-color: #232227;
	width: 68%;
	height: 81%;
	border-radius: 3vmin;
	padding: 3vmin;
	overflow: overlay;
}
/* CLIENTINFO */
#clientInfo {
	height: 40%;
	width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: center;
}
#clientInfo #titleText {
	margin: 0;
	font-weight: 700;
	letter-spacing: 0.1vmin;
	margin-bottom: 0.8vmin;
	font-size: 1.8vmin;
}
#clientInfo img {
	width: 10vmin;
	height: 10vmin;
}
#clientInfo #nameTitle {
	font-size: 2vmin;
	letter-spacing: 0.3vmin;
}
#clientInfo #rangTitle {
	margin: 0;
	font-size: 1.5vmin;
}
#clientInfo #societyMoney {
	margin: 0;
	font-size: 1.5vmin;
	margin-top: 1vmin;
}
/* NAVBARITEM */
#navbarItems {
	height: 60%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
}
.navbarItemsDiv {
	width: 98%;
	float: right;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
.itemP {
	width: 50%;
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.7vmin;
}
.itemP i {
	margin: 0 1.5vmin 0 0;
}
.itemP:hover {
	cursor: pointer;
}
.activeBorder {
	border-left: 0.7vmin #21BFA9 solid;
}
</style>