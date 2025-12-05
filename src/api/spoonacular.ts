const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

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
