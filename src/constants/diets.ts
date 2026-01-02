export const DIETS = [
  "Gluten free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-vegetarian",
  "Ovo-vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
  "Low FODMAP",
  "Whole30",
] as const;

export type Diet = typeof DIETS[number];