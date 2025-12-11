/**
 * Unified recipe API wrapper
 * 
 * In development, USE_MOCK_DATA automatically uses mockRecipes.ts
 * This avoids consuming API quota during development
 * 
 * This module abstracts the choice between mock data (development) and real API calls (production).
 * It provides a consistent interface for recipe search and detail fetching regardless of the data source.
 * 
 * @see spoonacular.ts for real API implementation
 * @see mockRecipes.ts for mock data
 */

import type { SearchOptions, SearchResponse, Recipe } from "../types/api";
import { searchSpoonacular, getRecipeById } from "./spoonacular";
import { filterMockRecipes, getMockRecipeById } from "../data/mockRecipes";
import { DEFAULT_RECIPE_COUNT } from "../types/api";

// Toggle mock/real API using localStorage
// Toggle in console: localStorage.setItem("useMock", "false")
// Defaults to mock data in development
const USE_MOCK_DATA = 
  (localStorage.getItem("useMock") ?? "true") === "true" &&
  import.meta.env.DEV;

/**
 * Search for recipes with filters
 * Uses mock data in development, real API in production
 */
export const searchRecipes = async (
  options: SearchOptions
): Promise<SearchResponse> => {
  if (USE_MOCK_DATA) {
    const results = filterMockRecipes(options);
    return {
      results,
      number: options.number ?? DEFAULT_RECIPE_COUNT,
      offset: 0,
      totalResults: results.length,
    };
  }

  return searchSpoonacular(options);
};

/**
 * Get detailed recipe information by ID
 * Uses mock data in development, real API in production
 */
export const getRecipe = async (id: number): Promise<Recipe> => {
  if (USE_MOCK_DATA) {
    const recipe = getMockRecipeById(id);
    if (!recipe) {
      throw new Error(`Recipe with ID ${id} not found in mock data`);
    }
    return recipe;
  }

  return getRecipeById(id);
};
