import { useMealdb } from "../api/useMealdb";
import "../App.css";
import { useFavoritesStore } from "../store/favoritesStore";

function RecipeCards() {
  const meals = useMealdb();
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <div className="recipe-grid">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="recipe-card">
          <div className="recipe-img-wrapper">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>

          <div className="recipe-content">
            <h2 className="recipe-title">{meal.strMeal}</h2>

            <button
              className={`favorite-btn ${
                isFavorite(meal.idMeal) ? "active" : ""
              }`}
              onClick={() => toggleFavorite(meal.idMeal)}
            >
              {isFavorite(meal.idMeal) ? "❤︎" : "♡"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeCards;
