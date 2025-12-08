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
        const list = get().favorites;

        const updated = list.includes(id)
          ? list.filter((fav) => fav !== id)        // ta bort
          : [...list, id];                          // lägg till

        set({ favorites: updated });
      },

      isFavorite: (id) => {
        return get().favorites.includes(id);
      }
    }),
    {
      name: "favoriteMeals", // key i localStorage
    }
  )
);
