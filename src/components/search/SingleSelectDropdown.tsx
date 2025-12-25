type SingleSelectDropdownProps<T extends string> = {
  label: string;
  value: T | null;
  options: readonly T[];
  onChange: (value: T | null) => void;
};

function SingleSelectDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: SingleSelectDropdownProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    onChange(selected === "" ? null : (selected as T));
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
