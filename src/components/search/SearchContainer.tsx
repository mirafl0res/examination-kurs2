import { useRecipeStore } from "../../store/recipeStore";
import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";
import { useState } from "react";
import { DEFAULT_RECIPE_COUNT } from "../../types/api";
import MockRecipesQuickList from "./MockRecipesQuickList";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { search } = useRecipeStore();

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
      <AdvancedFilters />
      <MockRecipesQuickList onRecipeClick={handleSearch} />
    </>
  );
}

export default SearchContainer;
