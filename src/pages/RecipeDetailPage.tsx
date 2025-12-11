import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import "../App.css";
import FavoriteButton from "../components/recipe/FavoriteButton";

function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Get recipe from the store (already fetched via search)
  const recipes = useRecipeStore((s) => s.recipes);
  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <Link to="/" className="back-link">← Back to search</Link>
        <p>Recipe not found. Try searching for recipes first.</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail-page">
      <Link to="/" className="back-link">← Back to recipes</Link>

      <div className="recipe-detail-header">
        <img src={recipe.image} alt={recipe.title} className="recipe-detail-img" />
        <div className="recipe-detail-info">
          <h1>{recipe.title} <FavoriteButton id={recipe.id} title={recipe.title} image={recipe.image} /></h1>
          
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
