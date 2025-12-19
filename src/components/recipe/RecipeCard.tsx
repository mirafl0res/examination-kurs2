import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import type { Recipe } from "../../types/api";
import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";
import "./RecipeCard.css";


type RecipeCardProps = {
  recipe: Recipe;
  variant?: "grid" | "list";
  missedIngredientCount?: number;
};

function RecipeCard({ recipe, missedIngredientCount }: RecipeCardProps) {
  const { id, title, image, readyInMinutes, servings } = recipe;

  const meta = [];

  if (readyInMinutes) {
    meta.push({ icon: Icons.time, text: `${readyInMinutes} min` });
  }

  if (servings) {
    meta.push({ icon: Icons.users, text: `${servings} servings` });
  }

  return (
    <Link to={`/recipe/${id}`}>
      <div className="recipe-card">
        <div className="recipe-img-wrapper">
          <FavoriteButton
            id={id}
            title={title}
            image={image}
            servings={servings ?? 0}
            readyInMinutes={readyInMinutes ?? 0}
          />
          <img src={image} alt={title} />
        </div>

        <div className="recipe-content">
          <h2 className="recipe-title">{title}</h2>

          {missedIngredientCount !== undefined && (
            <p className="missing-ingredients">
              Missing ingredients: {missedIngredientCount}
            </p>
          )}

          <div className="recipe-meta">
            {meta.map((item, i) => (
              <IconInfo key={i} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
