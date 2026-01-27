import { DEFAULT_RECIPE_COUNT } from "../constants";
import type { Filters, SearchOptions, SearchMode } from "../types";
import type { RecipeSortOption } from "../constants";

export const formatFilters = (filters: Filters) => ({
  ...(filters.diet.length && { diet: filters.diet.join(",") }),
  ...(filters.intolerances.length && {
    intolerances: filters.intolerances.join(","),
  }),
  ...(filters.cuisine && { cuisine: filters.cuisine }),
  ...(filters.type && { type: filters.type }),
  ...(filters.maxReadyTime != null && { maxReadyTime: filters.maxReadyTime }),
  ...(filters.sort && { sort: filters.sort }),
  ...(filters.sortDirection && { sortDirection: filters.sortDirection }),
});

// Returns the shared base parameters for all search modes
const baseSearchParams = (filters: Filters) => ({
  addRecipeInformation: true,
  number: DEFAULT_RECIPE_COUNT,
  ...formatFilters(filters),
});

export const buildDefaultSearchMode = (
  query: string,
  filters: Filters
): SearchOptions => ({
  ...baseSearchParams(filters),
  query,
  sort: "meta-score",
  sortDirection: "desc",
});

const ingredientSortDirection = (sort: RecipeSortOption) =>
  sort === "max-used-ingredients" ? "desc" : "asc";

export const buildIngredientsSearchMode = (
  includeIngredients: string,
  filters: Filters
): SearchOptions => {
  const sort = filters.sort ?? ("min-missing-ingredients" as RecipeSortOption);
  const sortDirection = ingredientSortDirection(sort);

  return {
    ...baseSearchParams(filters),
    includeIngredients,
    fillIngredients: true,
    sort,
    sortDirection,
    ignorePantry: true,
  };
};

export const searchModeBuilders: Record<
  SearchMode,
  (query: string, filters: Filters) => SearchOptions
> = {
  default: buildDefaultSearchMode,
  ingredients: buildIngredientsSearchMode,
};
