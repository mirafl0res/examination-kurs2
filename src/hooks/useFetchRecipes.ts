import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/recipes";
import type { Recipe } from "../types/api";


function useFetchRecipes() {
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

  return { recipe, loading, error }
}

export default useFetchRecipes
