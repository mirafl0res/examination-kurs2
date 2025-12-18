import { useState } from "react";
import { useSearchResultsStore } from "../../store/searchResultsStore";
import { USE_MOCK_DATA } from "../../api/recipes";
import { searchModeBuilders } from "../../utils/searchOptionBuilders";
import type { Filters, SearchMode } from "../../types";
import {
  AdvancedFilters,
  SearchForm,
  SearchModeToggle,
  MockRecipesQuickList,
  MockSearchToggle,
  IngredientInput,
} from ".";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    intolerances: [],
    diets: [],
    maxReadyTime: null,
  });

  const [searchMode, setSearchMode] = useState<SearchMode>("default");
  const { search } = useSearchResultsStore();

  const handleSearch = (searchQuery: string): void => {
    const searchBuilder = searchModeBuilders[searchMode];
    if (!searchBuilder) return;
    const searchOptions = searchBuilder(searchQuery, filters);
    search(searchOptions);
  };

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleMockSearchToggle = (checked: boolean) => {
    localStorage.setItem("useMock", checked ? "true" : "false");
    window.location.reload();
  };

  const renderSearchInput = () => {
    if (searchMode === "default") {
      return (
        <SearchForm
          onChange={setSearchValue}
          onSearch={handleSearch}
          value={searchValue}
        />
      );
    }
    return <IngredientInput onSearch={handleSearch} />;
  };

  const renderMockOptions = () => {
    if (import.meta.env.DEV) {
      return (
        <>
          <MockSearchToggle
            value={USE_MOCK_DATA}
            onChange={handleMockSearchToggle}
          />
          {USE_MOCK_DATA && (
            <MockRecipesQuickList onRecipeClick={handleSearch} />
          )}
        </>
      );
    }
    return null;
  };
  return (
    <>
      {renderMockOptions()}
      <SearchModeToggle onModeChange={setSearchMode} activeMode={searchMode} />
      {renderSearchInput()}
      <AdvancedFilters onChange={handleFiltersChange} />
    </>
  );
}

export default SearchContainer;
