import { useSearchResultsStore } from "../../store/searchResultsStore";
import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";
import { useState } from "react";
import { DEFAULT_RECIPE_COUNT } from "../../types/api";
import { type Intolerance } from "../../constants/intolerances";
import MockRecipesQuickList from "./MockRecipesQuickList";
import MockSearchToggle from "./MockSearchToggle";
import { USE_MOCK_DATA } from "../../api/recipes";
import { type Diet } from "../../constants/diets";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filters, setFilters] = useState<{
    intolerances: Intolerance[];
    diets: Diet[];
  }>({
    intolerances: [],
    diets: [],
  });
  const { search } = useSearchResultsStore();

  const handleSearch = (query: string): void => {
    const searchOptions = {
      query,
      number: DEFAULT_RECIPE_COUNT,
      intolerances: filters.intolerances.join(",") || undefined,
      diet: filters.diets.length > 0 ? filters.diets.join(",") : undefined, // AND logic
      // diet: filters.diets.length > 0 ? filters.diets.join("|") : undefined, // OR logic
    };
    search(searchOptions);
  };

  const handleFiltersChange = (newFilters: {
    intolerances: Intolerance[];
    diets: Diet[];
  }) => {
    setFilters(newFilters);
  };

  const handleMockSearchToggle = (checked: boolean) => {
    localStorage.setItem("useMock", checked ? "true" : "false");
    window.location.reload();
  };

  return (
    <>
      {import.meta.env.DEV && (
        <MockSearchToggle
          value={USE_MOCK_DATA}
          onChange={handleMockSearchToggle}
        />
      )}
      {USE_MOCK_DATA && <MockRecipesQuickList onRecipeClick={handleSearch} />}
      <SearchModeToggle />
      <SearchForm
        onChange={setSearchValue}
        onSearch={handleSearch}
        value={searchValue}
      />
      <AdvancedFilters onChange={handleFiltersChange} />
    </>
  );
}

export default SearchContainer;
