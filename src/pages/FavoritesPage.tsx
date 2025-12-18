import { useState } from "react";
import { useNavigateBack } from "../hooks/useNavigateBack"
import { useFavoritesStore } from "../store/favoritesStore";
import RecipeCard from "../components/recipe/RecipeCard"
import { Icon } from "../components/ui/icon";
import { Icons } from "../components/ui/icons";


export default function FavoritesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const favorites = useFavoritesStore((state) => state.favorites);

  const goBack = useNavigateBack({ fallbackTo: "/" });

  return (
    <div className="favorites-page">
        <button onClick={goBack} className="back-button">
    ← Back
  </button>
      <h1>My favorite recipes </h1>
        <div className="view-toggle">
        <button onClick={() => setView("grid")}>< Icon icon={Icons.grid}/></button>
        <button onClick={() => setView("list")}><Icon icon={Icons.list}/></button>
      </div>
       

      {favorites.length > 0 ? (
      <div className={`recipe-grid ${view}`}>
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} variant={view} />
        ))}
      </div>
   
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
}
