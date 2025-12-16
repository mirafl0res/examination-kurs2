import type { SearchMode } from "../../types/search";

type SearchModeToggleProps = {
  onModeChange: (mode: SearchMode) => void;
};

function SearchModeToggle({ onModeChange }: SearchModeToggleProps) {
  const handleClick = (mode: SearchMode) => {
    onModeChange(mode);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick("default")}>Search Anything</button>
        <button onClick={() => handleClick("ingredients")}>
          What's In My Fridge?
        </button>
      </div>
    </>
  );
}

export default SearchModeToggle;
