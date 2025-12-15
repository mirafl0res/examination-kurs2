export type Filters = {
  intolerances: string[];
  diets: string[];
  maxReadyTime: number | null;
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
