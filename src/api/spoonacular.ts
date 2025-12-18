import {
  type SearchOptions,
  type SearchResponse,
  type Recipe,
} from "../types/api";
import { DEFAULT_RECIPE_COUNT } from "../constants";

const BASE_URL = "https://api.spoonacular.com";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const ensureApiKey = () => {
  if (!API_KEY)
    throw new Error("Missing Spoonacular API key (VITE_SPOONACULAR_API_KEY)");
};

const addParamsToUrl = (url: URL, params: Record<string, unknown>): void => {
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });
};

const fetchSpoonacular = async <T>(
  endpoint: string,
  params?: Record<string, unknown>
): Promise<T> => {
  ensureApiKey();
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("apiKey", API_KEY);
  if (params) {
    addParamsToUrl(url, params);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Spoonacular API error: ${response.statusText}`);
  }
  return await response.json();
};

const searchSpoonacular = async (
  options: SearchOptions
): Promise<SearchResponse> => {
  const params = {
    number: options.number ?? DEFAULT_RECIPE_COUNT,
    ...options,
  };
  const endpoint = "/recipes/complexSearch";

  return fetchSpoonacular<SearchResponse>(endpoint, params);
};

const getRecipeById = async (id: number): Promise<Recipe> => {
  const endpoint = `/recipes/${id}/information`;

  return fetchSpoonacular<Recipe>(endpoint);
};

export { searchSpoonacular, getRecipeById };
