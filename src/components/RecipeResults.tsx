import { useSearchResultsStore } from "../store/searchResultsStore";
import RecipeCards from "./recipe/RecipeList";

function RecipeResults() {
  const { recipes, loading, error } = useSearchResultsStore();
  console.log(recipes)

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error.message}</p>;
  if (recipes.length === 0) return null;

  return <RecipeCards recipes={recipes} />;
  
}

export default RecipeResults;
