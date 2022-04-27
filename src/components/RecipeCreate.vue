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

            <button @click="goToRecipes" id="recipes-btn" class="navibar">
              Recipe List
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

    <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">Add Recipe</h3>
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="recipe.name"
              required
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              type="text"
              class="form-control"
              v-model="recipe.description"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label>Ingredients</label>
            <textarea
              type="text"
              class="form-control"
              v-model="recipe.ingredients"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label>Instructions</label>
            <textarea
              type="text"
              class="form-control"
              v-model="recipe.instructions"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label>Time</label>
            <input
              type="number"
              class="form-control"
              v-model="recipe.time"
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Add Recipe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { DocumentReference } from "@firebase/firestore";
import { db } from "../myconfig";
import { addDoc, collection } from "firebase/firestore";
export default {
  data() {
    return {
      recipe: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      const recipeColl = collection(db, "recipes");
      addDoc(recipeColl, this.recipe)
        .then((recipeColl) => {
          console.log("inserted with id", recipeColl.id);
        })
        .then(() => {
          alert("Recipe successfully added!");
          this.recipe.name = "";
          this.recipe.description = "";
          this.recipe.ingredients = "";
          this.recipe.instructions = "";
          this.recipe.time = 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToRecipes() {
      this.$router.push("/list");
    },
    goToRandomRecipes() {
      this.$router.push("/recipes");
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
};
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