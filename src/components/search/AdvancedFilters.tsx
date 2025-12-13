import { useState } from "react";
import { INTOLERANCES, type Intolerance } from "../../constants/intolerances";
import { DIETS, type Diet } from "../../constants/diets";
import { PillGroup } from "./PillGroup";

interface AdvancedFiltersProps {
  onChange: (filters: { intolerances: Intolerance[]; diets: Diet[] }) => void;
}

function AdvancedFilters({ onChange }: AdvancedFiltersProps) {
  const [selectedIntolerances, setSelectedIntolerances] = useState<
    Intolerance[]
  >([]);
  const [selectedDiets, setSelectedDiets] = useState<Diet[]>([]);

  const toggleValue = <T,>(array: readonly T[], value: T): T[] =>
    array.includes(value)
      ? array.filter((v) => v !== value)
      : [...array, value];

  const handleToggleIntolerance = (value: Intolerance) => {
    const newSelected = toggleValue(selectedIntolerances, value);
    setSelectedIntolerances(newSelected);
    onChange({ intolerances: newSelected, diets: selectedDiets });
  };

  const handleToggleDiet = (value: Diet) => {
    const newSelected = toggleValue(selectedDiets, value);
    setSelectedDiets(newSelected);
    onChange({ intolerances: selectedIntolerances, diets: newSelected });
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
      <PillGroup
        options={DIETS}
        selected={selectedDiets}
        onToggle={handleToggleDiet}
      />
    </>
  );
}

export default AdvancedFilters;
