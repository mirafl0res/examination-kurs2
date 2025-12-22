import { useState } from "react";
import { useSearchResultsStore } from "../../store/searchResultsStore";
import { searchModeBuilders } from "../../utils/searchOptionBuilders";
import type { SearchMode } from "../../types";
import {
  AdvancedFilters,
  SearchForm,
  SearchModeToggle,
  MockSearchContainer,
  IngredientInput,
  ToggleFiltersButton,
} from ".";
import { useSearchFiltersStore } from "../../store/searchFiltersStore";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchMode, setSearchMode] = useState<SearchMode>("default");
  const search = useSearchResultsStore((state) => state.search);

  const filters = useSearchFiltersStore((state) => state.filters);

  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (searchQuery: string): void => {
    const searchBuilder = searchModeBuilders[searchMode];
    if (!searchBuilder) return;
    const searchOptions = searchBuilder(searchQuery, filters);
    search(searchOptions);
  };

  const SearchInput =
    searchMode === "default" ? (
      <SearchForm
        onChange={setSearchValue}
        onSearch={handleSearch}
        value={searchValue}
      />
    ) : (
      <IngredientInput onSearch={handleSearch} />
    );

  return (
    <>
      <MockSearchContainer onSearch={() => handleSearch("")} />
      <SearchModeToggle onModeChange={setSearchMode} activeMode={searchMode} />
      {SearchInput}
      <ToggleFiltersButton
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      {showFilters && <AdvancedFilters />}
    </>
  );
}

export default SearchContainer;
