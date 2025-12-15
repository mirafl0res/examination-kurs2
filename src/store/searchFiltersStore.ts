import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toggleObjectInArray } from "../utils/toggleHelpers";
import {
  type Filters,
  type FavoriteFilter,
  type SearchFiltersStore,
} from "../types/filters";

export const useSearchFiltersStore = create<SearchFiltersStore>()(
  persist(
    (set) => ({
      filters: {
        intolerances: [],
        diets: [],
        maxReadyTime: null,
      },
      favoriteFilters: [],
      setFilters: (filters: Filters) => set({ filters }),
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
      clearFilters: () =>
        set({
          filters: {
            intolerances: [],
            diets: [],
            maxReadyTime: null,
          },
        }),
    }),
    { name: "searchFilters" }
  )
);
