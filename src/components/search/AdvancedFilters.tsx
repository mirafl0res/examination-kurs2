import {
  INTOLERANCES,
  type Intolerance,
  DIETS,
  type Diet,
} from "../../constants/";

import { PillGroup } from "./PillGroup";
import { togglePrimitiveInArray } from "../../utils/toggleHelpers";
import { useSearchFiltersStore } from "../../store/searchFiltersStore";

function AdvancedFilters() {
  const intolerances = useSearchFiltersStore((state) => state.filters.intolerances);
  const diet = useSearchFiltersStore((state) => state.filters.diet);
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
      <h4>Intolerances</h4>
      <PillGroup
        options={INTOLERANCES}
        selected={intolerances}
        onToggle={handleToggleIntolerance}
      />
      <h4>Diets</h4>
      <PillGroup
        options={DIETS}
        selected={diet}
        onToggle={handleToggleDiet}
        onClear={clearFilters}
      />
    </>
  );
}

export default AdvancedFilters;
