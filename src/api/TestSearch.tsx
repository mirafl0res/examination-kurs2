import { useState, useEffect } from "react";
import { searchSpoonacular } from "./spoonacular";

export default function TestSearch() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredientsInput, setIngredientsInput] = useState("chicken,rice");
  const [error, setError] = useState<Error | null>(null);

  function runSearch() {
    setLoading(true);
    setError(null);
    searchSpoonacular([""], {
      number: 1,
      addRecipeInformation: true,
      // addRecipeInstuctions: true,
      // instructionsRequired: true,
      fillIngredients: true,
      includeIngredients: "chickpeas, tahini",
    })
      .then((data) => {
        console.log(data);
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    runSearch();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <input
        value={ingredientsInput}
        onChange={(e) => setIngredientsInput(e.target.value)}
        placeholder="chicken,rice"
      />
      <button onClick={runSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>
  );
}
