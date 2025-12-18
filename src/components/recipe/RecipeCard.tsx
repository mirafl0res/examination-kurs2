import FavoriteButton from "./FavoriteButton";
import type { Recipe } from "../../types/api";
import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import IconInfo from "./IconInfo"
import type { LucideProps } from "lucide-react";


type RecipeCardProps = {
  recipe: Recipe;
  variant?: "grid" | "list";
  missedIngredientCount?: number;
  missedIngredients?: Array<{ id: number; name: string }>;
};

function RecipeCard({ recipe, missedIngredientCount, missedIngredients }: RecipeCardProps) {
  const { id, title, image, readyInMinutes, servings } = recipe;

  

  const meta = [
    readyInMinutes && { icon: Clock, text: `${readyInMinutes} min` },
    servings && { icon: Users, text: `${servings} servings` },
].filter(Boolean) as { icon: React.ElementType<LucideProps>; text: string }[];

  return (
    <Link
      to={`/recipe/${id}`}
      state={{ missedIngredientCount, missedIngredients }}
    >
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
            <p className="missing-ingredients">Missing ingredients: {missedIngredientCount}</p>
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