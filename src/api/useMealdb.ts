// useMealdb.ts
import { useEffect, useState } from "react";

export function useMealdb() {
  const [meals, setMeals] = useState<any[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian"
      );
      const parsed = await response.json();
      setMeals(parsed.meals.slice(0, 6) || []);
    };

    getMeals();
  }, []);

  return meals;
}
