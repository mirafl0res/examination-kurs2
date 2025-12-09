// useMealdb.ts
import { useEffect, useState } from "react";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian";


export function useMealdb() {
  const [meals, setMeals] = useState<any[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(BASE_URL);
      const parsed = await response.json();
      setMeals(parsed.meals.slice(0, 6) || []);
    };

    getMeals();
  }, []);

  return meals;
}
