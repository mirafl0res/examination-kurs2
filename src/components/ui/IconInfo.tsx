import type { LucideIcon } from "lucide-react";
import { Icon } from "./icon";

type IconInfoProps = {
  icon: LucideIcon;
  text: string;
  className?: string;
};

function IconInfo({ icon, text, className = "" }: IconInfoProps) {
  return (
    <span className={`icon-info ${className}`}>
      <span className="icon-info__icon">
        <Icon icon={icon} />
      </span>
      <span className="icon-info__text">{text}</span>
    </span>
  );
}

export default IconInfo;