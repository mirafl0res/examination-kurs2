import { useFavoritesStore } from "../store/favoritesStore";
import RecipeCards from "../components/RecipeCards";

function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div>
      <h1>My favorite recipes</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <RecipeCards filterIds={favorites} />
      )}
    </div>
  );
}

export default FavoritesPage;
