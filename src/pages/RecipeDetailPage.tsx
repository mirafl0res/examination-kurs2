import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getRecipe } from "../api/recipes";
import type { Recipe } from "../types";
import FavoriteButton from "../components/recipe/FavoriteButton";
import { Clock, Users } from "lucide-react";
import IconInfo from "../components/recipe/IconInfo";


function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        // Automatically uses mock data in dev, real API in production
        const data = await getRecipe(Number(id));
        setRecipe(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <div>Loading recipe...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Recipe not found</div>;

  const location = useLocation();
  const state = (location.state as
    | {
        missedIngredientCount?: number;
        missedIngredients?: Array<{ id: number; name: string }>;
      }
    | undefined);

  const meta = [
  { icon: Clock, text: `${recipe.readyInMinutes} min` },
  { icon: Users, text: `${recipe.servings} servings` },
];

function getInstructionSteps(recipe: Recipe) {
  const blocks = recipe.analyzedInstructions;
  if (!blocks || blocks.length === 0) return [];

    return blocks[0].steps.map((s) => s.step.trim());
  }
  const instructionSteps = getInstructionSteps(recipe);

  return (
    <article>
      <h1>{recipe.title} 
        <FavoriteButton 
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
        servings={recipe.servings?? 0} 
        readyInMinutes={recipe.readyInMinutes ?? 0}
        /> </h1>

      <div className="recipe-meta">
      {meta.map((item, i) => (
        <IconInfo key={i} icon={item.icon} text={item.text} />
        ))}
      </div>

      {state?.missedIngredientCount !== undefined && (
        <div className="missing-info">
          <p>Missing ingredients: {state.missedIngredientCount}</p>
          {state.missedIngredients && state.missedIngredients.length > 0 && (
            <ul className="missing-list">
              {state.missedIngredients.map((mi) => (
                <li key={mi.id}>{mi.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <img src={recipe.image} alt={recipe.title} />
      
{/*       <section>
        <h2>Details</h2>
        <p>Servings: {Number(recipe.servings)}</p>
        <p>Ready in: {Number(recipe.readyInMinutes)} minutes</p>
        <p>Diet info: {String(recipe.diets)}</p>
       
      </section> */}

      <section>
        <h2>Ingredients</h2>
        <ul>
          {(
            recipe.extendedIngredients as Array<{
              id: number;
              original: string;
            }>
          )?.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Instructions</h2>

        {instructionSteps.length > 0 ? (
          <ul>
            {instructionSteps.map((step, i) => (
              <li key={i}>
                <label>
                  <input type="checkbox" />
                  {step}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p>No instructions available.</p>
        )}
      </section>
    </article>
  );
}

export default RecipeDetailPage;
