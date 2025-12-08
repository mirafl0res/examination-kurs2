const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

// https://spoonacular.com/food-api/docs
type SearchOptions = {
  number?: number; // Number of expected results
  query?: string;

  addRecipeInformation?: boolean;
  addRecipeInstuctions?: boolean;
  instructionsRequired?: boolean;

  includeIngredients?: string; // Comma-separated list of ingredients
  excludeIngredients?: string; // Comma-separated list of ingredients
  fillIngredients?: boolean; // Add information about the ingredients and whether they are used or missing in relation to the query

  intolerances?: string;
  diet?: string;
  type?: string; // e.g. "main course"
  maxReadyTime?: number;
};

type SearchResponse = {
  results: Array<{
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    [key: string]: unknown;
  }>;
  number: number;
  [key: string]: unknown;
};

const addParamsToUrl = (url: URL, params: Record<string, unknown>): void => {
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });
};

const searchSpoonacular = async (
  options: SearchOptions = {}
): Promise<SearchResponse> => {
  const url = new URL(BASE_URL);

  const params: Record<string, unknown> = {
    apiKey: API_KEY,
    number: "3",
    ...options,
  };

  addParamsToUrl(url, params);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  const data: SearchResponse = await response.json();
  return data;
};

export { searchSpoonacular };
