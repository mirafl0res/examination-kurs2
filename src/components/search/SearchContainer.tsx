import { useState } from "react";
import { useSearchResultsStore } from "../../store/searchResultsStore";
import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";
import MockRecipesQuickList from "./MockRecipesQuickList";
import MockSearchToggle from "./MockSearchToggle";
import { USE_MOCK_DATA } from "../../api/recipes";
import type { Filters } from "../../types/filters";
import { searchModeBuilders } from "../../utils/searchOptionBuilders";
import type { SearchMode } from "../../types/search";

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

  return (
    <>
      {import.meta.env.DEV && <MockSearchToggle value={USE_MOCK_DATA} onChange={handleMockSearchToggle} />}
      {USE_MOCK_DATA && <MockRecipesQuickList onRecipeClick={handleSearch} />}
      <SearchModeToggle onModeChange={setSearchMode} />
      <SearchForm onChange={setSearchValue} onSearch={handleSearch} value={searchValue} />
      <AdvancedFilters onChange={handleFiltersChange} />
    </>
  );
}

export default SearchContainer;
