import { useFavoritesStore } from "../store/favoritesStore";
import type { Recipe } from "../types/api";
import "../App.css";

type RecipeCardsProps = {
  recipes: Recipe[];
  filterIds?: string[];
};

function RecipeCards({ recipes = [], filterIds }: RecipeCardsProps) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = (id: number) => favorites.includes(String(id));

  const displayRecipes = filterIds
    ? recipes.filter((recipe) => filterIds.includes(String(recipe.id)))
    : recipes;

  return (
    <div className="recipe-grid">
      {displayRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <div className="recipe-img-wrapper">
            <img src={recipe.image} alt={recipe.title} />
          </div>

          <div className="recipe-content">
            <h2 className="recipe-title">{recipe.title}</h2>

            <button
              className={`favorite-btn ${
                isFavorite(recipe.id) ? "active" : ""
              }`}
              onClick={() => toggleFavorite(String(recipe.id))}
            >
              {isFavorite(recipe.id) ? "❤︎" : "♡"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeCards;
