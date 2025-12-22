import { useState } from "react";
import { useSearchResultsStore } from "../../store/searchResultsStore";
import { USE_MOCK_DATA } from "../../api/recipes";
import { searchModeBuilders } from "../../utils/searchOptionBuilders";
import type { SearchMode } from "../../types";
import {
  AdvancedFilters,
  SearchForm,
  SearchModeToggle,
  MockRecipesQuickList,
  MockSearchToggle,
  IngredientInput,
} from ".";
import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";
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
      <button
        onClick={() => setShowFilters(!showFilters)}
        title={showFilters ? "Hide advanced filters" : "Show advanced filters"}
      >
        <IconInfo
          icon={showFilters ? Icons.chevronUp : Icons.chevronDown}
          text={showFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
        />
      </button>
      {showFilters && <AdvancedFilters />}
    </>
  );
}

export default SearchContainer;
