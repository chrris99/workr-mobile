import { Color, colors } from "@/design-system/colors/colors";
import { IconName, icons } from "@/design-system/icons/icons";

export type IconSize = "XS" | "S" | "M";

interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: Color;
  strokeWidth?: number;
}

const iconSize: Record<IconSize, number> = {
  XS: 16,
  S: 20,
  M: 24,
};

export const Icon = ({
  name,
  size = "M",
  color = "primary-700",
  strokeWidth = 2,
}: IconProps) => {
  const SvgIcon = icons[name];
  return (
    <SvgIcon
      width={iconSize[size]}
      height={iconSize[size]}
      strokeWidth={strokeWidth}
      color={colors[color]}
    />
  );
};
