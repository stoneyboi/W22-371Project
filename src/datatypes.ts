type randomRecipes = {
    data: Array<recipe>
}

type recipe = {
    name: string;
    cookTime: string;
    images: Array<string>;
    ingredients: Array<string>;
    instructions: Array<Instructions>;
}

type Instructions = {
    steps: Array<string>;
}

export {randomRecipes, recipe}