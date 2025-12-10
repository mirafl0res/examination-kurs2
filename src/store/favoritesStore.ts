import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FavoriteRecipe = {
  id: string;
  title: string;
  image: string;
};


type FavoriteState = {
  favorites: FavoriteRecipe[];
  toggleFavorite: (recipe: FavoriteRecipe) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

     toggleFavorite: (recipe) => {
  const favoriteList = get().favorites;

  const alreadySaved = favoriteList.some(
    (favorite) => favorite.id === recipe.id
  );

  if (alreadySaved) {
    set({
      favorites: favoriteList.filter(
        (favorite) => favorite.id !== recipe.id
      ),
    });
  } else {
    set({
      favorites: [...favoriteList, recipe],
    });
  }
},

      isFavorite: (id) => {
        return get().favorites.some((f) => f.id === id)
      },
    }),
    {
    name: "favoriteRecipes", 
    }
  )
)