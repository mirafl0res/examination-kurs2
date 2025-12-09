import { useRecipeStore } from "../../store/recipeStore";
import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";
import { useState } from "react";
import { DEFAULT_RECIPE_COUNT, type Recipe } from "../../types/api";
import RecipeCards from "../RecipeCards";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { search, recipes, loading, error } = useRecipeStore();

  const handleSearch = (query: string): void => {
    search({ query, number: DEFAULT_RECIPE_COUNT });
  };

  return (
    <>
      <SearchModeToggle />
      <SearchForm
        onChange={setSearchValue}
        onSearch={handleSearch}
        value={searchValue}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <AdvancedFilters />
    </>
  );
}

export default SearchContainer;
