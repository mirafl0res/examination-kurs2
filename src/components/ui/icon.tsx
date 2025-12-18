/* Renderar en ikon på ett enhetligt sätt 
(storlek, klass, stil) oavsett var den 
används i appen. */
import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export function Icon({
  icon: IconComponent,
  size = 16,
  className,
}: IconProps) {
  return <IconComponent size={size} className={className} />;
}