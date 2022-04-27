<template>
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
                            <router-link :to="{name: 'edit', params: { id: r.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteRecipe(r.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import { db } from '../myconfig';
    import {
        collection,
        getDocs,
        deleteDoc,
        doc,
        QuerySnapshot
    } from 'firebase/firestore'
    
    export default {
        data() {
            return {
                Recipes: []
            }
        },
        created() {
            const recipeRef = collection(db, 'recipes');
            getDocs(recipeRef)
            .then((qResults) => {
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
                        time: rData.time
                    })
                })
            })
            console.log(this.Recipes)
        },
        methods: {
            deleteRecipe(id){
              if (window.confirm("Do you really want to delete?")) {
                deleteDoc(doc(db, `recipes/${id}`)).then(() => { window.location.reload()});
              }
            }
        }
    }
</script>
<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>