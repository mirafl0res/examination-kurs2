import { useFavoritesStore } from "../store/favoritesStore";
import RecipeCards from "../components/RecipeCards";

function FavoritesPage() {
  const favoriteRecipes = useFavoritesStore((state) => state.favorites);

  const hasFavorites = favoriteRecipes.length > 0;

  return (
    <div className="favorites-page">
      <h1>My favorite recipes</h1>

      {hasFavorites ? (
        <RecipeCards filterIds={favoriteRecipes} />
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
}

export default FavoritesPage;
