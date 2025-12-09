// useMealdb.ts
import { useEffect, useState } from "react";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian";


export function useMealdb() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(BASE_URL);
      const parsed = await response.json();
      setData(parsed.data.slice(0, 6) || []);
    };

    getData();
  }, []);

  return data;
}
