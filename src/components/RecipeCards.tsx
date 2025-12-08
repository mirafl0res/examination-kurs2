import { useMealdb } from "../api/useMealdb";


function RecipeCards() {
   const meals = useMealdb();

  return (
    <div>
    
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} width="200" />
        </div>
      ))}
    </div>
  );
}

export default RecipeCards
