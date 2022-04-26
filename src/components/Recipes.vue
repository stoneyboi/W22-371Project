<template>
    <div class="recipe">
        <button class="navibar" id="home-btn" @click="goToHome">&lt; Home Page</button>
        <h1>this is the Recipes page</h1>
        <h2>this is a h2 inside of the Recipes page</h2>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios';
import {randomRecipes, recipe} from '../datatypes';

@Component
export default class Recipes extends Vue {
    $router: any;
    recipeArr: Array<recipe> = [];
    numRecipes = 5;
    apiKey = '0ba11f7329msh7be47b4be5b3d2dp1a3f29jsn187257194c85';

    mounted(): void {
        this.moreRecipes();
    }

    goToHome(): void {
        this.$router.push({ path: '/' })
    }

    moreRecipes(): void {
        axios
        .request({
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {q: 'chicken'},
            headers: {
                'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
                'X-RapidAPI-Key': '0ba11f7329msh7be47b4be5b3d2dp1a3f29jsn187257194c85'
            }
        })
        .then((r: AxiosResponse) => r.data)
        .then((r: randomRecipes) => {
            console.log(r.data);
            this.recipeArr.splice(0);
            this.recipeArr.push(...r.data);
        });
    }

}

</script>


