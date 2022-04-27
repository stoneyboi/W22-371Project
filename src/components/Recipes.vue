<template>
  <div class="recipe">
    <nav class="navbar">
      <div id="left">
        <img class="logo" src="../assets/logo.png" />
        <h1 class="title">RecipeMe</h1>
      </div>
      <div id="right">
        <button @click="goToHome" id="recipes-btn" class="navibar">
          Home
          <i class="fa fa-caret-down"></i>
        </button>

        <button @click="goToList" id="profile-btn" class="navibar">
          Recipe List
          <i class="fa fa-caret-down"></i>
        </button>

        <button @click="goToCreate" id="fire-recipes-btn" class="navibar">
          Add Recipe
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-content">
          <button id="logout-btn">Log Out</button>
    <div class="recipe">
        <nav class="navbar">
			<div id="left">
				<button @click="goToHome" class="home-img-btn">
					<img class="logo" src="../assets/logo.png" />
					<h1 class="title">RecipeMe</h1>
				</button>
			</div>
			<div id="right">
					<button @click="goToHome" id="recipes-btn" class="navibar">Home
						<i class="fa fa-caret-down"></i>
					</button>

					<button @click="goToProfile" id="profile-btn" class="navibar">Profile
						<i class="fa fa-caret-down"></i>
					</button>

					<button @click="goToFireRecipes" id="fire-recipes-btn" class="navibar">Add Recipe
						<i class="fa fa-caret-down"></i>
					</button>

					<div class="dropdown-content">
						<button id="logout-btn">Log Out</button>
					</div>
			</div>
		</nav>
        <div class="content">
            <div class="input-section">
                <label>Recipes per page</label>
                <input type="number" v-model.lazy="numRecipes">
                <button @click="fetchRecipes">Fetch</button>

            </div>
            <table class="recipes-table">
                <tr id="first-row">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Cook Time(min)</th>
                    <th>Description</th>
                    <th>Instructions</th>
                </tr>
                <tr v-for="(u,pos) in recipeArr" :key="a-`${pos}`">
                    <td><img width="200" height="200" v-bind:src=u.thumbnail_url /></td>
                    <td><p>{{u.slug}}</p></td>
                    <td>{{u.cook_time_minutes}}</td>
                    <td>{{u.description}}</td>
                    <td>
                        <ol>
                            <li v-for="i in u.instructions" :key="i">{{i.display_text}}</li>
                        </ol>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    </nav>
    <div class="content">
      <div class="input-section">
        <label>Recipes per page</label>
        <input type="number" v-model.lazy="numRecipes" />
        <button @click="fetchRecipes">Fetch</button>
      </div>
      <table class="recipes-table">
        <tr id="first-row">
          <th>Image</th>
          <th>Name</th>
          <th>Cook Time(min)</th>
          <th>Description</th>
          <th>Instructions</th>
        </tr>
        <tr v-for="(u, pos) in recipeArr" :key="a - `${pos}`">
          <td><img width="200" height="200" v-bind:src="u.thumbnail_url" /></td>
          <td>
            <p>{{ u.slug }}</p>
          </td>
          <td>{{ u.cook_time_minutes }}</td>
          <td>{{ u.description }}</td>
          <td>
            <ol>
              <li v-for="i in u.instructions" :key="i">{{ i.display_text }}</li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";
import { RandomRecipes, Recipe } from "../datatypes";

@Component
export default class Recipes extends Vue {
  $router: any;
  recipeArr: Array<Recipe> = [];
  numRecipes = 5;
  searchTerm = "chicken";

  mounted(): void {
    this.fetchRecipes();
  }

  goToHome(): void {
    this.$router.push({ path: "/" });
  }

  goToList(): void {
    this.$router.push({ path: "/list" });
  }

  goToCreate(): void {
    this.$router.push({ path: "/create" });
  }

  logout(): void {
    this.$router.push({ path: "/login" });
  }

  fetchRecipes(): void {
    axios
      .request({
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/list",
        params: {
          from: Math.floor(Math.random() * 20),
          size: this.numRecipes,
          prefix: this.searchTerm,
        },
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key":
            "0ba11f7329msh7be47b4be5b3d2dp1a3f29jsn187257194c85",
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((ru: RandomRecipes) => {
        this.recipeArr.splice(0);
        this.recipeArr.push(...ru.results);
      });
  }
}
</script>


<style scoped>
.home {
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

nav #right button:hover {
  background-color: #1b5032;
}
#logout-btn {
  float: none;
  align-self: right;
  display: block;
}

.content {
  background-color: hsl(32, 69%, 69%);
}

.input-section {
  background-color: hsl(32, 79%, 85%);
  border: 1px solid black;
  border-radius: 0.5em;
  padding: 0.5em;
  margin-left: 3em;
  display: -webkit-inline-flex;
}
.inputSection > input {
  margin-left: 1em;
}
#controls {
  margin-left: 3em;
  margin-top: 16px;
}
#first-row {
  font-size: large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
table tr:nth-child(even) {
  background-color: hsl(143, 68%, 77%);
}
table tr > td {
  padding: 0.5em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
td > li {
  text-align: right;
  margin: 0 0.4em;
  padding: 0.25em;
  border: 1px solid black;
  border-radius: 1em;
  font-style: italic;
  font-size: 75%;
}
td > li:hover {
  background-color: white;
}
</style>
