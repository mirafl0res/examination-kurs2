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
} from "../../constants/";

import { PillGroup } from ".";
import { togglePrimitiveInArray } from "../../utils/toggleHelpers";
import { useSearchFiltersStore } from "../../store/searchFiltersStore";
import { SelectFilter } from ".";

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

  return (
    <>
      {hasActiveFilters && (
        <button style={{ color: "red" }} onClick={clearFilters}>
          Clear filters
        </button>
      )}

      <h4>Intolerances</h4>
      <PillGroup
        options={INTOLERANCES}
        selected={intolerances}
        onToggle={handleToggleIntolerance}
      />
      <h4>Diets</h4>
      <PillGroup options={DIETS} selected={diet} onToggle={handleToggleDiet} />
      <SelectFilter<Cuisine>
        label="Cuisine"
        value={cuisine}
        options={CUISINES}
        onChange={(value) => setFilter("cuisine", value)}
      />

      <SelectFilter<MealType>
        label="Meal Type"
        value={mealType}
        options={MEAL_TYPES}
        onChange={(value) => setFilter("type", value)}
      />

      <label>
        Max Ready Time (minutes)
        <input
          type="number"
          min={0}
          value={maxReadyTime ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            setFilter("maxReadyTime", val === "" ? null : Number(val));
          }}
        />
      </label>

      <SelectFilter<RecipeSortOption>
        label="Sort By"
        value={sort}
        options={RECIPE_SORT_OPTIONS}
        onChange={(value) => setFilter("sort", value)}
      />
      <SelectFilter<"asc" | "desc">
        label="Sort Direction"
        value={sortDirection}
        options={["asc", "desc"]}
        onChange={(value) => setFilter("sortDirection", value)}
      />
    </>
  );
}

export default AdvancedFilters;
