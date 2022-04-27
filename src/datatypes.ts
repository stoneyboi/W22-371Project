type RandomRecipes = {
    results: Array<Recipe>;
}

type Instructions = {
    display_text: string;
}

type Recipe = {
    slug: string;
    cook_time_minutes: number;
    description: string;
    instructions: Array<Instructions>;
    thumbnail_url: string;
}

export {RandomRecipes, Recipe};