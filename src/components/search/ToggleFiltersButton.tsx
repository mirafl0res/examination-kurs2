import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";

type ToggleFiltersButtonProps = {
  onToggle: () => void;
  showFilters: boolean;
  sectionName: string;
  className?: string;
};

function ToggleFiltersButton({
  showFilters,
  onToggle,
  sectionName,
  className,
}: ToggleFiltersButtonProps) {
  return (
    <button
      id="filters-btn"
      onClick={onToggle}
      className={className}
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
