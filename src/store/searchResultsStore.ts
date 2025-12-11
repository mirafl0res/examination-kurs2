import { create } from "zustand";
import { searchRecipes } from "../api/recipes";
// import { searchSpoonacular } from "../api/spoonacular";
import {
  type SearchOptions,
  type Recipe,
  DEFAULT_RECIPE_COUNT,
} from "../types/api";

type RecipeState = {
  recipes: Recipe[];
  loading: boolean;
  error: Error | null;
  search: (params: SearchOptions) => Promise<void>;
};

export const useSearchResultsStore = create<RecipeState>((set) => ({
  recipes: [],
  loading: false,
  error: null,
  async search(params) {
    const trimmed = params.query.trim();
    if (!trimmed) return;
    set({ loading: true, error: null });

    try {
      const options: SearchOptions = {
        query: trimmed,
        number: params.number ?? DEFAULT_RECIPE_COUNT,
      };
      // searchRecipes automatically uses mocks in dev, real API in production
      const data = await searchRecipes(options);
      set({ recipes: data?.results ?? [] });
    } catch (err) {
      set({ error: err instanceof Error ? err : new Error("Search failed") });
    } finally {
      set({ loading: false });
    }
  },
}));
