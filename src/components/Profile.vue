<template>
	<div class="profile">
		<h1>Profile</h1>
		<h2>{{userInfo}}</h2>
		<h3>@{{username}}</h3>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { component } from 'vue/types/umd';
import {
  getAuth,
  onAuthStateChanged,
  User,
  Auth,
  signOut,
} from "firebase/auth";

@Component
export default class Profile extends Vue {
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

}
</script>
