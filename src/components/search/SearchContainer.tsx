import { useSearchResultsStore } from "../../store/searchResultsStore";
import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";
import { useState } from "react";
import { DEFAULT_RECIPE_COUNT } from "../../types/api";
import MockRecipesQuickList from "./MockRecipesQuickList";
import { type Intolerance } from "../../constants/intolerances";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [intolerances, setIntolerances] = useState<Intolerance[]>([]);
  const { search } = useSearchResultsStore();

  const handleSearch = (query: string): void => {
    // console.log("Current intolerances state:", intolerances);
    const searchOptions = {
      query,
      number: DEFAULT_RECIPE_COUNT,
      intolerances: intolerances.join(",") || undefined,
    };
    // console.log("SearchOptions about to send:", searchOptions);
    search(searchOptions);
  };

  const handleIntolerancesChange = (intolerances: Intolerance[]) => {
    // console.log("Intolerances updated:", intolerances);
    setIntolerances(intolerances);
  };

  return (
    <>
      <SearchModeToggle />
      <SearchForm
        onChange={setSearchValue}
        onSearch={handleSearch}
        value={searchValue}
      />
      <AdvancedFilters onChange={handleIntolerancesChange} />
      <MockRecipesQuickList onRecipeClick={handleSearch} />
    </>
  );
}

export default SearchContainer;
