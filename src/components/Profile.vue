<template>
	<div class="profile">
		<h1>Profile</h1>
        <button class="navibar" id="home-btn" @click="goToHome">&lt; Home Page</button>
		<h2>{{userInfo}}</h2>
		<h3>@{{username}}</h3>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  getAuth,
  onAuthStateChanged,
  User,
  Auth,
  signOut,
} from "firebase/auth";

@Component
export default class Profile extends Vue {
    $router: any;
	userPhotoURL = ""
	auth: Auth | null = null
	userInfo = ""

	mounted(): void {
		this.auth = getAuth();
		onAuthStateChanged(this.auth, (user: User | null ) => {
			console.log("Auth changed", user);
			if (user){
				this.userPhotoURL = user.photoURL ?? "";
				this.userInfo = `${user.displayName ?? "No Name"}`;
			}
		});
	}

	goToHome(): void {
		this.$router.push('/');
	}

}
</script>
