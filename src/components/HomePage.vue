<template>
	<div class="home">
		<nav class="bar">
			<div class="navibar">
				<img src="logo.png" class="logo">
				<ul id="navbar">
					<li>
						<h2>Profile</h2>
					</li>
					<li> 
						<h2>Recipes</h2>
					</li>
				</ul>
			</div>
	
			<div class="Title">
				<h1 class="Title">RecipeMe</h1>
			</div>
			
			<div class="navibarRight">
				<h1>Log Out</h1>
				<input type="text" placeholder="Search!" class="search">  
			</div>
		</nav>

		<div id="insertHere" class="container">
			<div class="divLeft">
				<div class="divLinks">
					<a href = "#">Friends</a>
					<a href = "#">Recipes</a>
					<a href = "#">Something New!</a>
					<a href = "#">I'm Feeling Lucky</a>
					<a href = "#">See More</a>
				</div>
			</div>
		
			<div class="main">
				<div class="write">
					<textarea rows="3" placeholder="What's Cookin' Good Lookin'?"></textarea>
				</div>
			</div>

			<div class="divRight">
				<div class="sideTitle">
					<h4>New Recipes</h4>
					<a href="#"> See All</a>
				</div>

				<div class="example">
					<div class="Rtitle">
						<h3>Mexican Crunchwraps</h3>
						<span>Quick and Easy</span>
					</div>
		
					<div class="details">
						<h4>Ingredients</h4>
						<p>
							<ul>
								<li>Tortillas</li>
								<li>Lettuce</li>
								<li>Pico</li>
								<li>Chips</li>
								<li>Chipotle Mayo</li>
								<li>Guacamole</li>
								<li>Blackbeans</li>
								<li>Cheese</li>
							</ul>
							<a href="#">More info...</a>
						</p>
					</div>
				
					<div class="Rtitle">
						<h3>Ricotta and Arugula Peach Pizza</h3>
						<span>Quick</span>
					</div>
		
					<div class="details">
						<h4>Ingredients</h4>
						<p>
							<ul>
								<li>Naan bread</li>
								<li>Arugula/li>
								<li>Peaches</li>
								<li>Ricotta Cheese</li>
								<li>Lemon Juice</li>
								<li>Balsamic Vinegar</li>
								<li>Spices</li>
							</ul>
							<a href="#">More info...</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from "vue-property-decorator"

@Component
export default class HomePage extends Vue{
/* 	const divRoot = document.getElementById("insertHere");
	const divLeft = document.createElement("div");
	const divMain = document.createElement("div");
	const divRight = document.createElement("div");
	const divLinks = document.createElement("div"); */

	mounted(): void{
		console.log("Hello home page!");
	}

/* 	divLeft.className = "divLeft";
	divMain.className = "Main";
	divRight.className ="divRight";

	divRoot.appendChild(divLeft);
	divRoot.appendChild(divMain);
	divRoot.appendChild(divRight);

	divLeft.appendChild(divLinks); */


}
</script>

<style scoped>
body {
	background-color: hsl(34, 85%, 51%)
}

nav{
	background-color: #21995d;
	max-height: 120px;
	display: flex;
	align-items:center;
	justify-content:space-between; 
	position: sticky;
	top: 0;
	z-index: 100;
}

.navibar, .navibarRight{
	display: flex;
	align-items: center;
	margin: 0 15px;
}

.navibar ul li{
	list-style: none;
	display: inline-block;
	margin: 0 15px;
}

.logo{
	height: 120px;
	width: 120px;
	margin-right: 20px;
}

.search{
	width: 300px;
	padding: 0 15px;
	border-radius: 20px;
	display: inline-block;
	align-items: center;
	margin-left: 20px;
}

.title{
	font-style: italic;
	font-family: cursive;
	font-size: x-large;
	justify-self: center;
	align-self: center;
}

.container{
	display: flex;
	justify-content: space-between;
	padding:13px 5%;
}

.divLeft{
	flex-basis: 25%;
	position: sticky;
	top: 70px;
	align-self: flex-start;
	height: 50vh;
}

.divRight{
	flex-basis: 25%;
	position: sticky;
	top: 70px;
	align-self: flex-start;
	background: rgb(17, 83, 0);
	padding:  15px;
	border-radius: 4px;
	color:rgb(255, 0, 0)
}

.main{
	flex-basis: 47%;
}

.divLinks a{
	text-decoration: none;
	display: flex;
	align-items: center;
	width: fit-content;
	margin-bottom: 30px;
}

.divLinks a:last-child{
	color: #1876f2;
}

.divLinks {
	border-bottom: 1px solid black;
}

.sideTitle {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 18px;
}

.sideTitle h4 {
	font-size: 16px;
	font-weight: 600;
}

.sideTitle a {
	text-decoration: none;
	color: #1876f2;
	font-size: 12px;
}

.divRight h3{
	font-family: Verdana, Geneva, Tahoma, sans-serifx;
	font-size: large;
}

.divRight span{
	font-family: Verdana, Geneva, Tahoma, sans-serifx;
	font-size: large;
	font-style: normal;
}

.example{
	margin-bottom: 20px;
	font-size: 14px;
	border-radius: 10px;
	margin-right: 15px;
	text-align: left;
	position: relative;
}

.Rtitle{
	border-radius: 10px;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.1);
	position: relative;
	margin: 10px;
}

.write{
	width: 100%;
	background: blanchedalmond;
	border-radius: 6px;
	padding: 20px;
	color: black;
	margin: 15px;
	margin-left: 0px;
	margin-right: 10px;
}

textarea{
	width: 100%;
	border: 0;
	outline: 0; 
	border-bottom: 1px solid black;
	background: white;
}

</style>