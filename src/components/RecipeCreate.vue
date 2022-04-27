<template>
<div>
<div class="home">
		<nav class="navbar">

			<div id="left">
				<img class="logo" src="../assets/logo.png" />
				<h1 class="title">RecipeMe</h1>
			</div>

			<div id="center">
				<input class="search" type="text" placeholder="Search!" />
			</div>

			<div id="right">
				<button id="explore-btn" class="navibar">Hot Food</button>
				<div class="dropdown">

					<button @click="goToProfile" id="profile-btn" class="navibar">Profile
						<i class="fa fa-caret-down"></i>
					</button>

					<button @click="goToRecipes" id="recipes-btn" class="navibar">Recipes
						<i class="fa fa-caret-down"></i>
					</button>

					<button @click="goToRandomRecipes" id="recipes-btn" class="navibar">Random Recipes
						<i class="fa fa-caret-down"></i>
					</button>

					<button @click="goToFireRecipes" id="fire-recipes-btn" class="navibar">Add Recipe
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
                    <input type="text" class="form-control" v-model="recipe.name" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="recipe.description" required>
                </div>
                <div class="form-group">
                    <label>Ingredients</label>
                    <input type="text" class="form-control" v-model="recipe.ingredients" required>
                </div>
                <div class="form-group">
                    <label>Instructions</label>
                    <input type="text" class="form-control" v-model="recipe.instructions" required>
                </div>
                <div class="form-group">
                    <label>Time</label>
                    <input type="number" class="form-control" v-model="recipe.time" required>
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
import { DocumentReference } from '@firebase/firestore'
    import { db } from '../myconfig'
    import {
        addDoc,
        collection
    } from 'firebase/firestore'
    export default {
        data() {
            return {
                recipe: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                const recipeColl = collection(db, 'recipes');
                addDoc(recipeColl, this.recipe)
                .then((recipeColl) => {
                    console.log("inserted with id", recipeColl.id);
                })
                .then(() => {
                    alert("Recipe successfully added!");
                    this.recipe.name = ''
                    this.recipe.description = ''
                    this.recipe.ingredients = ''
                    this.recipe.instructions = ''
                    this.recipe.time = 0
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>