import { useRecipeStore } from "../../store/recipeStore";
import AdvancedFilters from "./AdvancedFilters";
import SearchForm from "./SearchForm";
import SearchModeToggle from "./SearchModeToggle";
import { useState } from "react";
import RecipeCards from "../RecipeCards";

function SearchContainer() {
  const [searchValue, setSearchValue] = useState("");
  const { search, recipes, loading, error } = useRecipeStore();

  const handleSearch = (query: string) => {
    search({ query });
  };

  return (
    <>
      <SearchModeToggle />
      <SearchForm
        onChange={setSearchValue} // setSearchValue
        onSearch={handleSearch} // handleSearch
        value={searchValue} // searchValue
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>{recipe.title}</h3>
            <p>{recipe.readyInMinutes} min</p>
          </div>
        ))}
      </div>
      <AdvancedFilters />
    </>
  );
}

export default SearchContainer;
