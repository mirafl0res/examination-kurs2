const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

<<<<<<< HEAD
// https://spoonacular.com/food-api/docs
type SearchOptions = {
  number?: number; // Number of expected results
  query?: string;
  intolerances?: string;
  diet?: string;
  type?: string; // e.g. "main course"
  includeIngredients?: string; // Comma-separated list of ingredients
  excludeIngredients?: string; // Comma-separated list of ingredients
  instructionsRequired?: boolean;
  fillIngredients?: boolean; // Add information about the ingredients and whether they are used or missing in relation to the query
  addRecipeInformation?: boolean;
  addRecipeInstuctions?: boolean;
};

const searchSpoonacular = async (options: SearchOptions = {}) => {
  const url = new URL(BASE_URL);

  const params = {
    apiKey: API_KEY,
    // includeIngredients: ingredients.join(","),
    // ignorePantry: "true",
    number: "3",
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
=======
export const fetchFromSpoonacular = async (ingredients) => {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    includeIngredients: ingredients.join(","),
    ignorePantry: true,
    number: 10,
  });

  const response = await fetch(
    `${BASE_URL}?${params.toString()}`
  );
  const data = await response.json();
  return data;
};
>>>>>>> 4705309 (add Spoonacular search helper (work in progress) and TestSearch component)
