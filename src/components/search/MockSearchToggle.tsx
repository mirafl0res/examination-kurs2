import type { ChangeEvent } from "react";

type MockToggleProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
};

const MockToggle = ({ value, onChange }: MockToggleProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };
  
  return (
    <label htmlFor="mock-toggle">
      <input
        id="mock-toggle"
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      Use Mock API Data
    </label>
  );
};

export default MockToggle;
