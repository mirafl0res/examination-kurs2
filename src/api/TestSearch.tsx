import { useState, useEffect } from "react";
import { fetchFromSpoonacular } from "./spoonacular";

export default function TestSearch() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFromSpoonacular(["chicken", "rice"]).then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>
  );
}
