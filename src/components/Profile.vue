<template>
	<div class="profile">

		<nav class="navbar">

			<div id="left">
				<button @click="goToHome" class="home-img-btn">
					<img class="logo" src="../assets/logo.png" />
					<h1 class="title">RecipeMe</h1>
				</button>
			</div>

			<div id="center">
				<input class="search" type="text" placeholder="Search!" />
			</div>

			<div id="right">
				<div class="dropdown">

					<button @click="logout" id="profile-btn" class="navibar">Log Out
						<i class="fa fa-caret-down"></i>
					</button>

					<button @click="goToRecipes" id="recipes-btn" class="navibar">Recipes
						<i class="fa fa-caret-down"></i>
					</button>

					<div class="dropdown-content">
						<button id="logout-btn">Log Out</button>
					</div>
				</div>

			</div>

		</nav>

		<div class="page-content">
			<div class="user-info" id="left">
				<img id="profile-pic" src="../assets/jackle_lantern.png" />
				<h2>{{userInfo}}</h2>
				<!-- <h2 v-else>{{userInfo}}</h2> -->
			</div>
			<div class="user-posts" id="right">
				<h1>Posts</h1>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';
import {
  getAuth,
  onAuthStateChanged,
  User,
  Auth,
  signOut,
} from "firebase/auth";
import { DocumentReference, doc, setDoc} from '@firebase/firestore';
import {db} from "../myconfig";

@Component
export default class Profile extends Vue {
    $router: any;
	//userPhotoURL = ""
	auth: Auth | null = null
	userInfo = "Jacqueline Antorn"

	currAccDoc: DocumentReference | null = null;
	mounted(): void {
		this.auth = getAuth();

		onAuthStateChanged(this.auth, (user: User | null ) => {
			console.log("Auth changed", user);
			if (user){
				//this.userPhotoURL = user.photoURL ?? "";
				this.userInfo = `${user.displayName ?? "Jack O'Lantern"}`;
				this.currAccDoc = doc(db, "users", this.userInfo);
				setDoc(this.currAccDoc, { name: this.userInfo })
					.then(() => { console.log("User Added.") });
			}
		});
	}

	logout(): void {
		const auth = getAuth();
		signOut(auth).then(() => {
			// Sign-out successful.
			this.$router.push({path: "/"});
		}).catch((err) => {
		// An error happened.
			alert(`ERROR: LOGGING OUT UNAVAILABLE`);
		});
	}

	goToRecipes(): void {
		this.$router.push({path: '/recipes'});
	}

	goToHome(): void {
		this.$router.push({path: '/home'});
	}

}
</script>

<style scoped>
.profile {
  background-color: hsl(32, 69%, 69%);
}
nav {
  background-color: #246a42;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
nav #left {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav .title {
  font-family: "Blazed";
  font-size: 56px;
  color: rgb(32, 32, 32);
  text-shadow: 4px 4px 4px rgba(207, 204, 204, 0.6);
}
.logo {
  height: inherit;
  width: 88px;
}
.home-img-btn{
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	background: none;
	padding: 0px;
}
nav #center {
  display: inline-block;
  justify-content: space-between;
  align-items: center;
}
.search {
  width: 300px;
  font-size: 24px;
  padding: 4px;
  padding-left: 12px;
  border: 2px solid hsl(32, 69%, 69%);
  border-radius: 8px;
}
nav #right {
  height: inherit;
  align-content: right;
  width: fit-content;
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  background-color: #246a42;
}
nav #right button {
  height: inherit;
  padding: 16px;
  border: none;
  color: hsl(32, 69%, 69%);
  background-color: inherit;
  font-size: 24px;
}
nav .dropdown button {
  height: inherit;
  padding: 16px;
  border: none;
  color: hsl(32, 69%, 69%);
  background-color: inherit;
  align-content: center;
  font-size: 24px;
}
nav #right button:hover {
  background-color: #1b5032;
}
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
}
#logout-btn {
  float: none;
  align-self: right;
  display: block;
}
#profile_btn:hover .dropdown-content {
  display: block;
}
.page-content{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32px;
}
.user-info{
	flex-basis: 33%;
	position:sticky;
	padding-top: 64px;
	align-self: flex-start;
	background: rgb(170, 135, 96);
	border-radius: 16px;
}
.user-info #profile-pic{
	width: 250px;
	height: 250px;
}
.user-posts{
	flex-basis: 60%;
	border-radius: 16px;
	position:sticky;
	padding-top: 32px;
	align-self: flex-start;
	background: #246a4286;
	text-shadow: 4px 4px 4px rgba(207, 204, 204, 0.6);
}
.user-posts h1{
	justify-content:space-between;
	font-family: "Blazed";
	font-size: 64px;
	color: rgb(32, 32, 32);
	margin: 0;
	padding: 0px;
}
</style>