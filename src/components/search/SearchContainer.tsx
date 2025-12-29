import { useState } from "react";
import { useSearchResultsStore } from "../../store/searchResultsStore";
import { searchModeBuilders } from "../../utils/searchOptionBuilders";
import type { SearchMode } from "../../types";
import "./SearchContainer.css";
import {
  AdvancedFilters,
  SearchForm,
  SearchModeToggle,
  MockSearchContainer,
  IngredientInput,
  ToggleFiltersButton,
} from ".";
import { Icons } from "../ui/icons";
import IconInfo from "../ui/IconInfo";
import { useSearchFiltersStore } from "../../store/searchFiltersStore";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchMode, setSearchMode] = useState<SearchMode>("default");
  const search = useSearchResultsStore((state) => state.search);

  const filters = useSearchFiltersStore((state) => state.filters);

  const hasActiveFilters = useSearchFiltersStore((state) => state.hasActiveFilters());
  const clearFilters = useSearchFiltersStore((state) => state.clearFilters);

  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (searchQuery: string): void => {
    const searchBuilder = searchModeBuilders[searchMode];
    if (!searchBuilder) return;
    const searchOptions = searchBuilder(searchQuery, filters);
    search(searchOptions);

    setShowFilters(false);
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

      <div className="search-container">
        <SearchModeToggle onModeChange={setSearchMode} activeMode={searchMode} />

        {SearchInput}

        <div className="search-filters">
          <ToggleFiltersButton
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          {hasActiveFilters && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              <IconInfo icon={Icons.close} text="Clear Filters" />
            </button>
          )}
        </div>

        {showFilters && <AdvancedFilters />}
      </div>
    </>
  );
}

export default SearchContainer;
