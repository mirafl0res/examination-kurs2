import type { Diet } from "../constants/diets";
import type { Intolerance } from "../constants/intolerances";

export type Filters = {
  intolerances: Intolerance[];
  diets: Diet[];
  maxReadyTime?: number | null;
};

export type FavoriteFilter = {
  id: string;
  name: string;
  filters: Filters;
};

export type SearchFiltersState = {
  filters: Filters;
  favoriteFilters: FavoriteFilter[];
  setFilters: (filters: Filters) => void;
  toggleFavoriteFilter: (favorite: FavoriteFilter) => void;
  saveFavorite: (name: string) => void;
  loadFavorite: (favorite: Filters) => void;
  clearFilters: () => void;
};
