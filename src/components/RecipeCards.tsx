import { useMealdb } from "../api/useMealdb";
import "../App.css";

function RecipeCards() {
  const meals = useMealdb();

  return (
    <div className="recipe-grid">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="recipe-card">
          <div className="recipe-img-wrapper">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>

          <div className="recipe-content">
            <h2 className="recipe-title">{meal.strMeal}</h2>

            
            <button className="favorite-btn">♥</button> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeCards;
