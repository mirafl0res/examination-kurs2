import { useSearchResultsStore } from "../store/searchResultsStore";
import RecipeCards from "./recipe/RecipeList";

function RecipeResults() {
  const { recipes, loading, error, hasSearched } = useSearchResultsStore();

  if (loading) return <p>Loading...</p>;

  if (error && hasSearched) return <p style={{ color: "red" }}>{error.message}</p>;
  if (recipes.length === 0 && hasSearched) return <p style={{ color: "#d33", textAlign: "center"}}>No recipes found. Try again with a different search term. </p>;

  if (recipes.length === 0) return null;

  return <RecipeCards recipes={recipes} />;
  
}

export default RecipeResults;
