export type FavoriteRecipe = {
  id: number;
  title: string;
  image: string;
  servings?: number;
  readyInMinutes?: number;
};

export type FavoriteState = {
  favorites: FavoriteRecipe[];
  toggleFavorite: (recipe: FavoriteRecipe) => void;
  isFavorite: (id: number) => boolean;

};