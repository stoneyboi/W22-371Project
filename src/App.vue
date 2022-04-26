<template>
	<div id="app">
		<home-page />
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './components/Login.vue'
import HomePage from './components/HomePage.vue'
import Profile from './components/Profile.vue'
import Recipes from './components/Recipes.vue'

@Component({
	components: {
		Login,
	HomePage,
	Profile,
	Recipes
	},
})
export default class App extends Vue {}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

@font-face {
	font-family: 'Blazed';
	src: local('Blazed'), url('fonts/Blazed.ttf') format('truetype');
}

@font-face {
	font-family: 'Give Away';
	src: local('Give Away'), url('fonts/GiveAway.ttf') format('truetype');
}

@font-face {
	font-family: 'simplicity';
	src: local('simplicity'), url('fonts/simplicity.ttf') format('truetype');
}
</style>
