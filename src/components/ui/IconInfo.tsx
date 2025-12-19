import type { LucideProps } from "lucide-react";
import type React from "react";
import "./IconInfo.css"

type IconInfoProps = {
  icon: React.ElementType<LucideProps>;
  text: string;
  className?: string;
  iconProps?: LucideProps;
};

function IconInfo({ icon: Icon, text, className = "", iconProps }: IconInfoProps) {
  return (
    <span className={`icon-info ${className}`}>
      <span className="icon-info__icon">
        <Icon size={16} strokeWidth={1.7} {...iconProps} />
      </span>
      <span className="icon-info__text">{text}</span>
    </span>
  );
}

export default IconInfo;
