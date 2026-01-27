import type { SearchMode } from "../types";
import { RECIPE_SORT_OPTIONS, type RecipeSortOption } from "../constants";

const INGREDIENT_SORTS: ReadonlyArray<RecipeSortOption> = [
  "max-used-ingredients",
  "min-missing-ingredients",
];

const INGREDIENT_OPTIONS = RECIPE_SORT_OPTIONS.filter((option) =>
  INGREDIENT_SORTS.includes(option)
);
const DEFAULT_OPTIONS = RECIPE_SORT_OPTIONS.filter((option) =>
  !INGREDIENT_SORTS.includes(option)
);

export const getValidSortOptions = (mode: SearchMode): RecipeSortOption[] =>
  mode === "ingredients" ? INGREDIENT_OPTIONS : DEFAULT_OPTIONS;