import { create } from "zustand";
import { searchSpoonacular } from "../api/spoonacular";

type Recipe = unknown;

type SearchParams = {
  query: string;
  number?: number;
};

type RecipeState = {
  recipes: Recipe[];
  loading: boolean;
  error: Error | null;
  search: (params: SearchParams) => Promise<void>;
};

export const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  loading: false,
  error: null,
  async search(params: SearchParams) {
    const trimmed = params.query.trim();
    if (!trimmed) return;
    set({ loading: true, error: null });

    try {
      const options = {
        query: trimmed,
        number: 2,
      };
      const data = await searchSpoonacular(options);
      set({ recipes: data?.results ?? [] });
    } catch (err) {
      set({ error: err instanceof Error ? err : new Error("Search failed") });
    } finally {
      set({ loading: false });
    }
  },
}));
