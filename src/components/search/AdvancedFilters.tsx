import { useState } from "react";
import { INTOLERANCES, type Intolerance } from "../../constants/intolerances";

function AdvancedFilters({
  onChange,
}: {
  onChange: (intolerances: Intolerance[]) => void;
}) {
  const [selected, setSelected] = useState<Intolerance[]>([]);

  const toggle = (value: Intolerance) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(newSelected);
    onChange(newSelected);
  };

  const createCheckboxes = () => {
    return INTOLERANCES.map((intolerance) => {
      const slug = intolerance.toLowerCase().replace(/\s+/g, "-");

      return (
        <div key={intolerance}>
          <label htmlFor={`intolerance-${slug}`}>{intolerance}</label>
          <input
            type="checkbox"
            id={`intolerance-${slug}`}
            checked={selected.includes(intolerance)}
            onChange={() => toggle(intolerance)}
          />
        </div>
      );
    });
  };

  return <>{createCheckboxes()}</>;
}

export default AdvancedFilters;