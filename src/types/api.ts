// https://spoonacular.com/food-api/docs

export type SearchOptions = {
  query?: string;
  number?: number; // Number of expected results

  addRecipeInformation?: boolean;
  addRecipeInstructions?: boolean;
  instructionsRequired?: boolean;

  includeIngredients?: string; // Comma-separated list of ingredients
  excludeIngredients?: string; // Comma-separated list of ingredients
  fillIngredients?: boolean; // Add information about the ingredients and whether they are used or missing in relation to the query
  sort?: string;
  sortDirection?: "asc" | "desc";
  ignorePantry?: boolean;

  intolerances?: string;
  diet?: string;
  type?: string;
  cuisine?: string;
  maxReadyTime?: number;
};

export type SearchResponse = {
  results: Array<{
    id: number;
    title: string;
    image: string;
    [key: string]: unknown;
  }>;
  number: number;
  [key: string]: unknown;
};

export type InstructionStep = {
  number: number;
  step: string;
};

export type AnalyzedInstruction = {
  name: string;
  steps: InstructionStep[];
};

export type Recipe = SearchResponse["results"][number] & {
  analyzedInstructions?: AnalyzedInstruction[];
  extendedIngredients?: Array<{ id: number; original: string }>;
  servings?: number;
  readyInMinutes?: number;
  diets?: string[];
};
