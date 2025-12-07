import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";

function SearchContainer() {
  const handleSearch = (params) => {
    return null;
  };

  return (
    <>
      <SearchModeToggle />
      <SearchForm
        onChange={() => {}} // setSearchValue
        onSearch={() => {}} // handleSearch
        value={() => {}} // searchValue
      />
      <AdvancedFilters />
    </>
  );
}

export default SearchContainer;
