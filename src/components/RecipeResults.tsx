import { useRecipeStore } from "../store/recipeStore";
import RecipeCards from "./RecipeCards";

function RecipeResults() {
  const { recipes, loading, error } = useRecipeStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error.message}</p>;
  if (recipes.length === 0) return null;

  return <RecipeCards recipes={recipes} />;
}

export default RecipeResults;
