import type { SearchMode } from "../../types";

type SearchModeToggleProps = {
  onModeChange: (mode: SearchMode) => void;
  activeMode: SearchMode;
};

function SearchModeToggle({ onModeChange, activeMode }: SearchModeToggleProps) {
  const handleClick = (mode: SearchMode) => {
    onModeChange(mode);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick("default")} className={`pill${activeMode === "default" ? " selected" : ""}`}>
          Search Anything
        </button>
        <button
          onClick={() => handleClick("ingredients")}
          className={`pill${activeMode === "ingredients" ? " selected" : ""}`}
        >
          What's In My Fridge?
        </button>
      </div>
    </>
  );
}

export default SearchModeToggle;
