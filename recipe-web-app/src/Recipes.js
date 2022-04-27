import React, { useEffect, useState } from 'react'
import './App.css';
import RecipeAPI from './RecipeAPI';

const Recipes = () => {
    const APP_ID = "19020588";
    const APP_KEY = "54022e38d5f0ab3d11261f5c16e0cc20";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("beef");
    useEffect(() => {
        getRecipes();
    }, [query])
    const getRecipes = async () => {
        const response = await fetch
            (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        // console.log(data);

    };
    const updateSearch = e => {
        setSearch(e.target.value);
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <div className="App">
            <h1 className='recipeH1'><em>Look up Recipes!</em></h1>
            <form className="search-form" onSubmit={getSearch} >
                <input className="search-bar" type="text" value={search}
                    onChange={updateSearch} placeholder="search for recipes here"/>
                <button className="search-button" type="submit" >
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <RecipeAPI
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />

                ))}
            </div>

        </div>
    );
}

export default Recipes;
