import { useFavoritesStore } from "../store/favoritesStore";
import RecipeCard from "../components/recipe/RecipeCard"

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="favorites-page">
      <h1>My favorite recipes</h1>

      {favorites.length > 0 ? (
        <div className="recipe-grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
}
