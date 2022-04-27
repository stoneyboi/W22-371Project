<template>
    <div>   
        <nav class="navbar">
            <div id="left">
                <img class="logo" src="../assets/logo.png" />
                <h1 class="title">RecipeMe</h1>
            </div>
            <button><h2 id="Signin" v-on:click="goTologin()">Log in</h2></button>
            
        </nav>
        <div class="home">
            <section class="hero is-dark">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Welcome to the Recipe Me
                        </h1>
                        <h2 class="subtitle">
                            Check out some of our awesome recipes below
                        </h2>
                        <div class="button-block">
                            <button class="button is-xl is-dark" v-on:click="goTologin()">
                                Log In to browse recipes
                                
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Entry extends Vue {
    $router: any

    mounted(): void {
        console.log("Hello entry page!");
    }
  
    goTologin(): void {
        console.log("to logIn!");
        this.$router.push({path: "/login"});
    }
  
}
</script>

<style scoped>
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

nav #left{
    width: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: right;
}
#Signin{
    margin-right: 16px;
}
/* nav ul{
    list-style:  none;
        
}

nav li{
    display: inline;

} */

nav .title 
{
    font-family: "Blazed";
    font-size: 56px;
    color: rgb(32, 32, 32);
    text-shadow: 4px 4px 4px rgba(207, 204, 204, 0.6);
}

.logo 
{
    height: inherit;
    width: 88px;
    padding-left: 16px;
    margin-left: 16px;
}

.hero 
{
    text-align: center;
    background-image: url('https://media.istockphoto.com/photos/restaurant-chilling-out-classy-lifestyle-reserved-concept-picture-id643847438?k=20&m=643847438&s=612x612&w=0&h=ManFy0ZQe3Ydxr_Qh8E9XB-NpzA-pbrkMvvzYV1VdXI=');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
}

.hero-body .title 
{
    text-shadow: 4px 4px 4px rgba(207, 204, 204, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
}

.subtitle 
{
    text-shadow: 4px 4px 4px rgba(238, 232, 232, 0.7);
    font-size: 30px;
}

.button-block 
{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
}

.button-block .button 
{
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
}

.is-xl 
{
    font-size: 1.5rem;
}

</style>

