import React from "react";
import style from './recipe.module.css';


const RecipeAPI = ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, pos) =>(
                    <li key={pos}>{ingredient.text}</li>
                ))}
            </ol>
  
            <img className={style.image} src={image} alt=""/>
  
        </div>
    );
  
}
export default RecipeAPI;