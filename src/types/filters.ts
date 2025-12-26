import type {
  Diet,
  Intolerance,
  Cuisine,
  MealType,
  RecipeSortOption,
} from "../constants";

export type Filters = {
  intolerances: Intolerance[];
  diet: Diet[];
  type: MealType | null;
  cuisine: Cuisine | null;
  maxReadyTime: number | null;
  sort: RecipeSortOption | null;
  sortDirection: "asc" | "desc" | null;
};

export type FavoriteFilter = {
  id: string;
  name: string;
  filters: Filters;
};

export type SearchFiltersState = {
  filters: Filters;
  favoriteFilters: FavoriteFilter[];
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  setFilters: (filters: Filters) => void;
  toggleFavoriteFilter: (favorite: FavoriteFilter) => void;
  saveFavorite: (name: string) => void;
  loadFavorite: (favorite: Filters) => void;
  clearFilters: () => void;
};
