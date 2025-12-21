import RecipeCard from "./RecipeCard";
import type { Recipe } from "../../types/api";

type RecipeListProps = {
  recipes: Recipe[];
  filterIds?: string[];
};

export default function RecipeList({ recipes, filterIds }: RecipeListProps) {
  const filtered = filterIds
    ? recipes.filter((r) => filterIds.includes(String(r.id)))
    : recipes;

  return (
    <div className="recipe-grid">
      {filtered.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          missedIngredientCount={
            (recipe as Record<string, unknown>).missedIngredientCount as
              | number
              | undefined
          }
          missedIngredients={
            (recipe as Record<string, unknown>).missedIngredients as
              | Array<{ id: number; name: string }>
              | undefined
          }
        />
      ))}
    </div>
  );
}
