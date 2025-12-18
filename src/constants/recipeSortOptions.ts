export const RECIPE_SORT_OPTIONS = [
  "", // "Closest Match"
  "meta-score", // "Most Relevant"
  "time",
  "max-used-ingredients",
  "min-missing-ingredients",
] as const;

export type RecipeSortOption = typeof RECIPE_SORT_OPTIONS[number];