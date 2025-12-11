import FavoriteButton from "./FavoriteButton";
import type { Recipe } from "../../types/api";
import { Link } from "react-router-dom"

type RecipeCardProps = {
  recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
    <div className="recipe-card">
      <div className="recipe-img-wrapper">
        <img src={recipe.image} alt={recipe.title} />
      </div>

      <div className="recipe-content">
        <h2 className="recipe-title">{recipe.title}</h2>

        <FavoriteButton
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
        />
      </div>
    </div>
    </Link>
  );
}
export default RecipeCard
