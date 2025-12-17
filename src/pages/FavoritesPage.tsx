import { useState } from "react";
import { useFavoritesStore } from "../store/favoritesStore";
import RecipeCard from "../components/recipe/RecipeCard"
import { List, LayoutGrid } from "lucide-react";

export default function FavoritesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="favorites-page">
      <h1>My favorite recipes </h1>
        <div className="view-toggle">
        <button onClick={() => setView("grid")}><LayoutGrid /></button>
        <button onClick={() => setView("list")}><List /></button>
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
