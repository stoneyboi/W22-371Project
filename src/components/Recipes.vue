<template>
    <div class="recipe">
        <button class="navibar" id="home-btn" @click="goToHome">&lt; Home Page</button>
        <button class="navibar" id="logout-btn" @click="logout">Logout</button>
        <h1>this is the Recipes page</h1>

        <div>
            <div class="input-section">
                <label>Recipes per page</label>
                <input type="number" v-model="numRecipes">
            </div>
            <table class="recipes-table">
                <tr>
                    <th>Image</th>
                    <th>Slug</th>
                    <th>Cook Time(min)</th>
                    <th>Description</th>
                    <th>Instructions</th>
                </tr>
                <tr v-for="(u,pos) in recipeArr" :key="pos">
                    <td><img width="200" height="200" src=u.thumbnail_url /></td>
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
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios';
import {RandomRecipes, Recipe} from '../datatypes';

@Component
export default class Recipes extends Vue {
    $router: any;
    recipeArr: Array<Recipe> = [];
    numRecipes = 5;

    mounted(): void {
        this.fetchRecipes();
    }

    goToHome(): void {
        this.$router.push({ path: '/' });
    }

    logout(): void {
        this.$router.push({path: '/login'})
    }

    fetchRecipes(): void {
        axios
        .request({
                method: 'GET',
                url: 'https://tasty.p.rapidapi.com/recipes/list',
                params: { from: Math.floor(Math.random() * 20), size: this.numRecipes},
                headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': '0ba11f7329msh7be47b4be5b3d2dp1a3f29jsn187257194c85'
                }
        })
        .then((r: AxiosResponse) => r.data)
        .then((ru: RandomRecipes) => {
            this.recipeArr.splice(0);
            this.recipeArr.push(...ru.results);
        });
    }
}

</script>


