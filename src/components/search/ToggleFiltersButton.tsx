import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";

type ToggleFiltersButtonProps = {
  onToggle: () => void;
  showFilters: boolean;
  sectionName: string;
  className?: string;
  id?: string;
};

function ToggleFiltersButton({
  showFilters,
  onToggle,
  sectionName,
  className,
  id,
}: ToggleFiltersButtonProps) {
  return (
    <button
      id={id}
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
