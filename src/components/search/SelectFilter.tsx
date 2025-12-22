type SelectFilterProps<T extends string> = {
  label: string;
  value: T | null;
  options: readonly T[];
  onChange: (value: T | null) => void;
};

function SelectFilter<T extends string>({
  label,
  value,
  options,
  onChange,
}: SelectFilterProps<T>) {
  return (
    <label>
      {label}
      <select
        value={value || ""}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val === "" ? null : (val as T));
        }}
      >
        <option value="">None</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectFilter;
