import { useState, useEffect } from "react";

export const useSpoonacularSearch = (ingredients: string[], options = {}) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// 
  useEffect(() => {
    searchSpoonacular(ingredients, number, options)
      .then(setRecipes)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [ingredients, number, options]);

  return { recipes, loading, error };
};