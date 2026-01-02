import useFetchRecipes from "../hooks/useFetchRecipes";
import type { Recipe } from "../types";
import FavoriteButton from "../components/recipe/FavoriteButton";
import IconInfo from "../components/ui/IconInfo";
import IngredientStatus from "../components/recipe/IngredientStatus";
import { useNavigateBack } from "../hooks/useNavigateBack";
import "./RecipePage.css"
import { Icons } from "../components/ui/icons";


function RecipePage() {
  const goBack = useNavigateBack({ fallbackTo: "/" });

  const { recipe, loading, error } = useFetchRecipes();


  if (loading) return <div>Loading recipe...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Recipe not found</div>;


  const missingItems =
    (recipe as unknown as { missedIngredients?: Array<{ id: number; name: string }>} ).missedIngredients;

  const usedItems =
    (recipe as unknown as { usedIngredients?: Array<{ id: number; name: string }>} ).usedIngredients;

  const meta = [
    { icon: Icons.time, text: `${recipe.readyInMinutes} min` },
    { icon: Icons.users, text: `${recipe.servings} servings` },
  ];

function getInstructionSteps(recipe: Recipe) {
  const blocks = recipe.analyzedInstructions;
  if (!blocks || blocks.length === 0) return [];

    return blocks[0].steps.map((s) => s.step.trim());
  }
  const instructionSteps = getInstructionSteps(recipe);

  return (
    <article>
             <button onClick={goBack} className="back-button">
    <Icons.back /> Back
  </button>
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

      {((missingItems && missingItems.length > 0) || (usedItems && usedItems.length > 0)) && (
        <div className="ingredient-info">
          <IngredientStatus used={usedItems} missed={missingItems} />
        </div>
      )}

      <img src={recipe.image} alt={recipe.title} />
      
      <section>
        <div className="ingredient-list">
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
        </div>
      </section>

      <section>
        <div className="instructions-list">
        <h2>Instructions</h2>
        {instructionSteps.length > 0 ? (
          <ul>
            {instructionSteps.map((step, i) => (
                  <li key={i}>
                    <label>
                      <input type="checkbox" />
                      <span className="instruction-text">{step}</span>
                    </label>
                  </li>
                ))}
          </ul>
        ) : (
          <p>No instructions available.</p>
        )}
        </div>
      </section>
    </article>
  );
}

export default RecipePage;
