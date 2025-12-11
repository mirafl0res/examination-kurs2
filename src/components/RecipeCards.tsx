import { Link } from "react-router-dom";
import type { Recipe } from "../types/api";
import FavoriteButton from "./recipe/FavoriteButton";
import "../App.css";

type RecipeCardsProps = {
  recipes: Recipe[];
  filterIds?: string[];
};

function RecipeCards({ recipes, filterIds }: RecipeCardsProps) {
  const displayRecipes = filterIds
    ? recipes.filter((recipe) => filterIds.includes(String(recipe.id)))
    : recipes;

  return (
    <div className="recipe-grid">
      {displayRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
            <div className="recipe-img-wrapper">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-content">
              <h2 className="recipe-title">{recipe.title}</h2>
            </div>
          </Link>
          <FavoriteButton id={recipe.id} title={recipe.title} image={recipe.image} />
        </div>
      ))}
    </div>
  );
}

export default RecipeCards;
