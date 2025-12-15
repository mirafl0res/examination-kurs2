export const DIETS = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto-vegetarian",
  "ovo-vegetarian",
  "vegan",
  "pescetarian",
  "paleo",
  "primal",
  "Low FODMAP",
  "Whole30",
] as const;

export type Diet = typeof DIETS[number];