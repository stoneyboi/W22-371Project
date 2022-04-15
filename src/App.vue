<template>
  <div id="app">
    <home-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue'
import HomePage from './components/HomePage.vue'
import Profile from './components/Profile.vue'


@Component({
  components: {
    Login,
	HomePage,
	Profile
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
  margin-top: 60px;
}
</style>
