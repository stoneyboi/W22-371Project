<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Recipe</h3>
            <form @submit.prevent="onUpdateForm">
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
</template>
<script>
    import { 
        updateDoc,
        collection,
        getDocs

    } from '@firebase/firestore';
    import { db } from '../myconfig';
    export default {
        data() {
            return {
                recipe: {
                }
            }
        },
        created() {
            // const recipeRef = doc(db, `recipes/${this.$route.params.id}`);
            // updateDoc(recipeRef, )

            // let dbRef = collection(db, `${this.$route.params.id}`);
            // getDocs(dbRef)
            // .then((query) => {
            //     query.forEach((u) => {
            //         const uData = u.data();
            //         this.recipe.name = uData.name,
            //         this.recipe.description = uData.description,
            //         this.recipe.ingredients = uData.ingredients,
            //         this.recipe.instructions = uData.instructions,
            //         this.recipe.time = uData.time
            //     })
            //     this.recipe = query.data();
            // })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault();
                let dbRef = collection(db, `travis-test-90fb2/recipes/${this.$route.params.id}`);
                updateDoc(dbRef, {
                    name: this.recipe.name,
                    description: this.recipe.description,
                    ingredients: this.recipe.ingredients,
                    instructions: this.recipe.instructions,
                    time: this.recipe.time
                }).then(() => {
                    console.log("User successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>