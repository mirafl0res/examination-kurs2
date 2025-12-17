import { useState } from "react";
import { INTOLERANCES, type Intolerance } from "../../constants/intolerances";
import { DIETS, type Diet } from "../../constants/diets";
import { PillGroup } from "./PillGroup";
import { togglePrimitiveInArray } from "../../utils/toggleHelpers";
import type { Filters } from "../../types/filters";

interface AdvancedFiltersProps {
  onChange: (filters: Filters) => void;
}

function AdvancedFilters({ onChange }: AdvancedFiltersProps) {
  const [selectedIntolerances, setSelectedIntolerances] = useState<Intolerance[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<Diet[]>([]);

  const handleToggleIntolerance = (value: Intolerance) => {
    const updatedIntolerances = togglePrimitiveInArray(selectedIntolerances, value);
    setSelectedIntolerances(updatedIntolerances);
    onChange({ intolerances: updatedIntolerances, diets: selectedDiets });
  };

  const handleToggleDiet = (value: Diet) => {
    const updatedDiets = togglePrimitiveInArray(selectedDiets, value);
    setSelectedDiets(updatedDiets);
    onChange({ intolerances: selectedIntolerances, diets: updatedDiets });
  };

  return (
    <>
      <h4>Intolerances</h4>
      <PillGroup
        options={INTOLERANCES}
        selected={selectedIntolerances}
        onToggle={handleToggleIntolerance}
      />
      <h4>Diets</h4>
      <PillGroup options={DIETS} selected={selectedDiets} onToggle={handleToggleDiet} />
    </>
  );
}

export default AdvancedFilters;
