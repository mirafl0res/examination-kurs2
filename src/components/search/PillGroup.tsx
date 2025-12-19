import "./PillGroup.css"

type PillGroupProps<T extends string> = {
  options: readonly T[];
  selected: T[];
  onToggle: (option: T) => void;
  onClear?: () => void;
};

export function PillGroup<T extends string>({
  options,
  selected,
  onToggle,
  onClear,
}: PillGroupProps<T>) {
  return (
    <>
      <div className="pill-group">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={selected.includes(option) ? "pill selected" : "pill"}
            onClick={() => onToggle(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {onClear && options.length > 0 && (
        <button style={{ color: "red" }} onClick={onClear}>
          Clear all
        </button>
      )}
    </>
  );
}
