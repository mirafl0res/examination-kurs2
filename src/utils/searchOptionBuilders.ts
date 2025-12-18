import { DEFAULT_RECIPE_COUNT } from "../constants";
import type { Filters, SearchOptions, SearchMode } from "../types";
import type { RecipeSortOption } from "../constants";

export const formatFilters = (filters: Filters) => ({
  ...(filters.diets.length && { diet: filters.diets.join(",") }),
  ...(filters.intolerances.length && {
    intolerances: filters.intolerances.join(","),
  }),
});

export const buildDefaultOptions = (
  query: string,
  filters: Filters
): SearchOptions => ({
  query,
  addRecipeInformation: true,
  number: DEFAULT_RECIPE_COUNT,
  ...formatFilters(filters),
});

export const buildIngredientsOptions = (
  includeIngredients: string,
  filters: Filters
): SearchOptions => ({
  includeIngredients,
  addRecipeInformation: true,
  number: DEFAULT_RECIPE_COUNT,
  fillIngredients: true,
  sort: "max-used-ingredients" as RecipeSortOption,
  ignorePantry: true,
  ...formatFilters(filters),
});

export const searchModeBuilders: Record<
  SearchMode,
  (query: string, filters: Filters) => SearchOptions
> = {
  default: buildDefaultOptions,
  ingredients: buildIngredientsOptions,
};


