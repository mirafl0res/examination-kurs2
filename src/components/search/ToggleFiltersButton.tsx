import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";

type ToggleFiltersButtonProps = {
  onToggle: () => void;
  showFilters: boolean;
  sectionName: string;
};

function ToggleFiltersButton({
  showFilters,
  onToggle,
  sectionName,
}: ToggleFiltersButtonProps) {
  return (
    <button
      id="filters-btn"
      onClick={onToggle}
      title={showFilters ? `Hide ${sectionName}` : `Show ${sectionName}`}
    >
      <IconInfo
        icon={showFilters ? Icons.chevronUp : Icons.chevronDown}
        text={showFilters ? `Hide ${sectionName}` : `Show ${sectionName}`}
      />
    </button>
  );
}

export default ToggleFiltersButton;
