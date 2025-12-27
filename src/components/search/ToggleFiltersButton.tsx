import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";

type ToggleFiltersButtonProps = {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

function ToggleFiltersButton({
  showFilters,
  setShowFilters,
}: ToggleFiltersButtonProps) {
  return (
    <button
      onClick={() => setShowFilters(!showFilters)}
      title={showFilters ? "Hide advanced filters" : "Show advanced filters"}
    >
      <IconInfo
        icon={showFilters ? Icons.chevronUp : Icons.chevronDown}
        text={showFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
      />
    </button>
  );
}

export default ToggleFiltersButton;
