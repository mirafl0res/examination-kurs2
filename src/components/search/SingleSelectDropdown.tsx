type SingleSelectDropdownProps<T extends string | number> = {
  label: string;
  value: T | null;
  options: readonly T[];
  onChange: (value: T | null) => void;
};

function SingleSelectDropdown<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: SingleSelectDropdownProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;

    if (selected === "") {
      return onChange(null);
    }
    if (typeof options[0] === "number") {
      return onChange(Number(selected) as T);
    }
    
    onChange(selected as T);
  };

  const renderOptions = () =>
    options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

  return (
    <label>
      {label}
      <select value={value ?? ""} onChange={handleChange}>
        <option value="">None</option>
        {renderOptions()}
      </select>
    </label>
  );
}

export default SingleSelectDropdown;
