import {
  INTOLERANCES,
  type Intolerance,
  DIETS,
  type Diet,
  CUISINES,
  type Cuisine,
  MEAL_TYPES,
  type MealType,
  RECIPE_SORT_OPTIONS,
  type RecipeSortOption,
  MAX_READY_TIME_OPTIONS,
  type MaxReadyTimeOption,
} from "../../constants/";

import { PillGroup, SingleSelectDropdown } from ".";
import { togglePrimitiveInArray } from "../../utils/toggleHelpers";
import { useSearchFiltersStore } from "../../store/searchFiltersStore";

function AdvancedFilters() {
  const intolerances = useSearchFiltersStore(
    (state) => state.filters.intolerances
  );
  const diet = useSearchFiltersStore((state) => state.filters.diet);
  const cuisine = useSearchFiltersStore((state) => state.filters.cuisine);
  const mealType = useSearchFiltersStore((state) => state.filters.type);
  const maxReadyTime = useSearchFiltersStore(
    (state) => state.filters.maxReadyTime
  );
  const sort = useSearchFiltersStore((state) => state.filters.sort);
  const sortDirection = useSearchFiltersStore(
    (state) => state.filters.sortDirection
  );
  const hasActiveFilters = useSearchFiltersStore((state) =>
    state.hasActiveFilters()
  );

  const setFilter = useSearchFiltersStore((state) => state.setFilter);
  const clearFilters = useSearchFiltersStore((state) => state.clearFilters);

  const handleToggleIntolerance = (value: Intolerance) => {
    const updatedIntolerances = togglePrimitiveInArray(intolerances, value);
    setFilter("intolerances", updatedIntolerances);
  };

  const handleToggleDiet = (value: Diet) => {
    const updatedDiets = togglePrimitiveInArray(diet, value);
    setFilter("diet", updatedDiets);
  };

  const renderClearButton = () => {
    return (
      hasActiveFilters && (
        <button style={{ color: "red" }} onClick={clearFilters}>
          Clear Filters
        </button>
      )
    );
  };

  const renderIntolerances = () => {
    return (
      <>
        <h4>Intolerances</h4>
        <PillGroup
          options={INTOLERANCES}
          selected={intolerances}
          onToggle={handleToggleIntolerance}
        />
      </>
    );
  };
  
  const renderDiets = () => {
    return (
      <>
        <h4>Diets</h4>
        <PillGroup
          options={DIETS}
          selected={diet}
          onToggle={handleToggleDiet}
          onClear={clearFilters}
        />
      </>
    );
  };

  const renderDropdowns = () => {
    return (
      <>
        <SingleSelectDropdown<Cuisine>
          label="Cuisine"
          value={cuisine}
          options={CUISINES}
          onChange={(value) => setFilter("cuisine", value)}
        />
        <SingleSelectDropdown<MealType>
          label="Meal Type"
          value={mealType}
          options={MEAL_TYPES}
          onChange={(value) => setFilter("type", value)}
        />
        <SingleSelectDropdown<MaxReadyTimeOption>
          label="Max Ready Time (minutes)"
          value={maxReadyTime}
          options={MAX_READY_TIME_OPTIONS}
          onChange={(value) => setFilter("maxReadyTime", value)}
        />
        <SingleSelectDropdown<RecipeSortOption>
          label="Sort By"
          value={sort}
          options={RECIPE_SORT_OPTIONS}
          onChange={(value) => setFilter("sort", value)}
        />
        <SingleSelectDropdown<"asc" | "desc">
          label="Sort Direction"
          value={sortDirection}
          options={["asc", "desc"]}
          onChange={(value) => setFilter("sortDirection", value)}
        />
      </>
    );
  };

  return (
    <>
      {renderClearButton()}
      {renderIntolerances()}
      {renderDiets()}
      {renderDropdowns()}
    </>
  );
}

export default AdvancedFilters;
