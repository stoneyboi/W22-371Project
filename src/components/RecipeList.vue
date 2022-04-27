<template>
  <div>
    <div class="home">
      <nav class="navbar">
        <div id="left">
          <img class="logo" src="../assets/logo.png" />
          <h1 class="title">RecipeMe</h1>
        </div>

        <div id="right">
          <div class="dropdown">
            <button @click="goToHome" id="profile-btn" class="navibar">
              Home
              <i class="fa fa-caret-down"></i>
            </button>

            <button @click="goToCreate" id="recipes-btn" class="navibar">
              Add Recipe
              <i class="fa fa-caret-down"></i>
            </button>

            <button @click="goToRandomRecipes" id="recipes-btn" class="navibar">
              Random Recipes
              <i class="fa fa-caret-down"></i>
            </button>

            <div class="dropdown-content">
              <button id="logout-btn">Log Out</button>
            </div>
          </div>

          <!-- <h2 class="navibar">Log Out</h2> -->
        </div>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Ingredients</th>
              <th>Instructions</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in Recipes" :key="r.key">
              <td>{{ r.name }}</td>
              <td>{{ r.description }}</td>
              <td>{{ r.ingredients }}</td>
              <td>{{ r.instructions }}</td>
              <td>{{ r.time }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: r.key } }"
                  class="btn btn-primary"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteRecipe(r.key)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../myconfig";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  QuerySnapshot,
} from "firebase/firestore";

export default {
  data() {
    return {
      Recipes: [],
    };
  },
  created() {
    const recipeRef = collection(db, "recipes");
    getDocs(recipeRef).then((qResults) => {
      this.Recipes = [];
      qResults.forEach((myDoc) => {
        console.log(myDoc);
        const rData = myDoc.data();
        this.Recipes.push({
          key: myDoc.id,
          name: rData.name,
          description: rData.description,
          ingredients: rData.ingredients,
          instructions: rData.instructions,
          time: rData.time,
        });
      });
    });
    console.log(this.Recipes);
  },
  methods: {
    deleteRecipe(id) {
      if (window.confirm("Do you really want to delete?")) {
        deleteDoc(doc(db, `recipes/${id}`)).then(() => {
          window.location.reload();
        });
      }
    },
    goToHome() {
        this.$router.push('/')
    },
    goToCreate() {
        this.$router.push('/create')
    },
    goToRandomRecipes() {
        this.$router.push('/recipes')
    }
  },
};
</script>
<style scoped>
.btn-primary {
  margin-right: 12px;
}
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
</style>