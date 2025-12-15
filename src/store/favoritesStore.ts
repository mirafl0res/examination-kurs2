import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toggleObjectInArray } from "../utils/toggleHelpers";
import { type FavoriteState } from "../types/favorites";

export const useFavoritesStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (favorite) => {
        set((state) => ({
          favorites: toggleObjectInArray(state.favorites, favorite),
        }));
      },

      isFavorite: (id) => {
        return get().favorites.some((f) => f.id === id);
      },
    }),
    {
      name: "favoriteRecipes",
    }
  )
);
