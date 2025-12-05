const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

// https://spoonacular.com/food-api/docs
type SearchOptions = {
  number?: number; // The number of expected results
  query?: string;
  intolerances?: string; // e.g. "gluten"
  diet?: string; // e.g. "vegetarian"
  includeIngredients?: string; // A comma-separated list of ingredients that should/must be used in the recipes
  excludeIngredients?: string; // A comma-separated list of ingredients or ingredient types that the recipes must not contain.
  type?: string; // e.g. "main course"
  instructionsRequired?: boolean; // Whether the recipes must have instructions.
  fillIngredients?: boolean; // Add information about the ingredients and whether they are used or missing in relation to the query
  addRecipeInformation?: boolean; // More information about the recipes returned.
  addRecipeInstuctions?: boolean; // Get analyzed instructions for each recipe returned
};

const searchSpoonacular = async (
  ingredients: string[],
  options: SearchOptions = {}
) => {
  const url = new URL(BASE_URL);

  const params = {
    apiKey: API_KEY,
    includeIngredients: ingredients.join(","),
    ignorePantry: "true",
    number: "5",
    ...options,
  };

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { searchSpoonacular };
