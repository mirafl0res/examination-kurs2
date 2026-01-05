import { useState } from "react";
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
import type { FilterSectionKey } from "../../types";

import { PillGroup, SingleSelectDropdown, ToggleFiltersButton } from ".";
import { togglePrimitiveInArray } from "../../utils/toggleHelpers";
import { useSearchFiltersStore } from "../../store/searchFiltersStore";

function AdvancedFilters() {
  const [filterSections, setFilterSections] = useState<
    Record<FilterSectionKey, boolean>
  >({
    intolerances: false,
    diets: false,
    dropdowns: false,
  });

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
  const setFilter = useSearchFiltersStore((state) => state.setFilter);
  const clearFilters = useSearchFiltersStore((state) => state.clearFilters);

  const handleToggleSection = (section: FilterSectionKey) => {
    setFilterSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleToggleIntolerance = (value: Intolerance) => {
    const updatedIntolerances = togglePrimitiveInArray(intolerances, value);
    setFilter("intolerances", updatedIntolerances);
  };

  const handleToggleDiet = (value: Diet) => {
    const updatedDiets = togglePrimitiveInArray(diet, value);
    setFilter("diet", updatedDiets);
  };

  const renderIntolerances = () => {
    return (
      <>
        <ToggleFiltersButton
          showFilters={filterSections.intolerances}
          onToggle={() => handleToggleSection("intolerances")}
          sectionName="Intolerances"
          className="filters-subsection-btn"
          id="filters-intolerances-btn"
        />
        {filterSections.intolerances && (
          <>
            <h4>Intolerances</h4>
            <PillGroup
              options={INTOLERANCES}
              selected={intolerances}
              onToggle={handleToggleIntolerance}
            />
          </>
        )}
      </>
    );
  };

  const renderDiets = () => {
    return (
      <>
        <ToggleFiltersButton
          showFilters={filterSections.diets}
          onToggle={() => handleToggleSection("diets")}
          sectionName="Diets"
          className="filters-subsection-btn"
          id="filters-diets-btn"
        />
        {filterSections.diets && (
          <>
            <h4>Diets</h4>
            <PillGroup
              options={DIETS}
              selected={diet}
              onToggle={handleToggleDiet}
              onClear={clearFilters}
            />
          </>
        )}
      </>
    );
  };

  const renderDropdowns = () => {
    return (
      <>
        <ToggleFiltersButton
          showFilters={filterSections.dropdowns}
          onToggle={() => handleToggleSection("dropdowns")}
          sectionName="Extra Options"
          className="filters-subsection-btn"
          id="filters-extras-btn"
        />
        {filterSections.dropdowns && (
          <div className="dropdown-container">
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
              label="Max time"
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
          </div>
        )}
      </>
    );
  };

  return (
    <div className="advanced-filters">
      {renderIntolerances()}
      {renderDiets()}
      {renderDropdowns()}
    </div>
  );
}

export default AdvancedFilters;
