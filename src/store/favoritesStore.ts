import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritesStore = {
  favorites: string[]; 
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const favoriteList = get().favorites;

        const updated = favoriteList.includes(id)
          ? favoriteList.filter((fav) => fav !== id)        // ta bort
          : [...favoriteList, id];                          // lägg till

        set({ favorites: updated });
      },

      isFavorite: (id) => {
        return get().favorites.includes(id);
      }
    }),
    {
      name: "favoriteRecipes", // key i localStorage
    }
  )
);
