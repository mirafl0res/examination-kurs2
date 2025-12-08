// https://spoonacular.com/food-api/docs
export type SearchOptions = {
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

export type SearchResponse = {
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
