import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toggleObjectInArray } from "../utils/toggleHelpers";
import {
  type Filters,
  type FavoriteFilter,
  type SearchFiltersState,
} from "../types/filters";

const initialFilters: Filters = {
  intolerances: [],
  diet: [],
  type: null,
  cuisine: [],
  maxReadyTime: null,
  sort: null,
  sortDirection: null,
};

export const useSearchFiltersStore = create<SearchFiltersState>()(
  persist(
    (set) => ({
      filters: initialFilters,
      favoriteFilters: [],
      setFilters: (filters) => set({ filters }),
      setFilter: (key, value) =>
        set((state) => ({
          filters: { ...state.filters, [key]: value },
        })),
      clearFilters: () => set({ filters: initialFilters }),

      toggleFavoriteFilter: (favorite: FavoriteFilter) => {
        set((state) => ({
          favoriteFilters: toggleObjectInArray(state.favoriteFilters, favorite),
        }));
      },
      saveFavorite: (name: string) =>
        set((state) => ({
          favoriteFilters: [
            ...state.favoriteFilters,
            { id: crypto.randomUUID(), name, filters: state.filters },
          ],
        })),
      loadFavorite: (favorite: Filters) => set({ filters: favorite }),
    }),
    { name: "searchFilters" }
  )
);
