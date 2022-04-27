import React, { useEffect } from "react";
import { useParams } from "react-router";

function Recipe() {
  let { recipeSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [recipeSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">This is a Recipe Title</h1>
        <h6 className="mb-5">The recipe slug is, {recipeSlug}</h6>
        <p>
          Recipe
        </p>
        <p>
          Recipe
        </p>
        <p>
          Recipe
        </p>
      </div>
    </div>
  );
}

export default Recipe;