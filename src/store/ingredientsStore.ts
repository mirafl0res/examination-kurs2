import { create } from "zustand";
import { togglePrimitiveInArray } from "../utils/toggleHelpers";
import { type IngredientsState } from "../types";

export const useIngredientsStore = create<IngredientsState>((set) => ({
  ingredients: [],
  setIngredients: (ingredients) => set({ ingredients }),
  addIngredient: (ingredient) =>
    set((state) => ({
      ingredients: state.ingredients.includes(ingredient)
        ? state.ingredients
        : [...state.ingredients, ingredient],
    })),
  removeIngredient: (ingredient) =>
    set((state) => ({
      ingredients: togglePrimitiveInArray(state.ingredients, ingredient),
    })),
  clearIngredients: () => set({ ingredients: [] }),
}));
